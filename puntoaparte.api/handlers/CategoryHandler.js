class CategoryHandler {
    static async getCategories(req, res){
        const data = {
            List: {
                Literatura: [{theme:'Clasicos',value:5}, {theme:'Ficción Historica',value:6}, {theme:'Poesía',value:3}, {theme:'Literatura Contemporanea',value:1}, {theme:'Por Generos', value:100}],
                Historia: [{theme:'Antigua',value:5}, {theme:'Medieval',value:6}, {theme:'Contemporanea',value:3}, {theme:'Historiografia',value:1}, {theme:'Por Escuela', value:100}],
                Filosofia: [{theme: 'Clasica', value: 1}, {theme:'Medieval', value:2}, {theme:'Contemporanea',value:5}, {theme:'Moderna',value:3}, {theme:'Por Escuela',value:100}]
              }
        }

        res.json(data)
    }
}

module.exports = CategoryHandler;