
class LandingHandler {
  static async test(req, res) {
    return res.status(200).send({ data: "some shit" });
  }

  static async getDate(req, res) {
      return res.send(new Date);
  }
  
  static async getBooks(req, res){

  }
}

module.exports = LandingHandler;
