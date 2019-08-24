const { Client } = require('pg');
const { development } = require('../config/config.json');
const constr = `postgres://${development.username}:${development.password}@${development.host}:${development.port}/${development.database}`;

class Database {
  constructor(connectionString) {
    if (Database.exists) {
      return Database.instance;
    }
    this.conn = new Client({ connectionString });
    Database.exists = true;
    Database.instance = this;
    return this;

  }

  async connect() {
    try {
      await this.conn.connect();
      console.log('Success on connection!');
    } catch (e) {
      console.log('Error on connecting', e);
    }
  }

  async testConnection() {
    try {
      const q = await this.conn.query('SELECT NOW()');
      const results = await q.rows;
      return results;
    } catch (e) {
      return { mgs: 'some error', meta: e };
    }
  }

  async queryDB(query) {
    try {
      const q = await this.conn.query(query);
      const results = await q.rows;
      return results;
    } catch (e) {
      return { mgs: 'some error', meta: e };
    }
  }
}

module.exports = new Database(constr);