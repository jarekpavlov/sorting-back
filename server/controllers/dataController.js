const map = require('../repository/mockDB')

class DataController {

    async getData(req, res) {
        // dbConnection.query("SELECT*FROM sorted_list", (err,rows,fields) =>{
        //     if(!err){
        //         res.json(rows)
        //     }else {
        //         console.log(err)
        //     }
        // })
        //Object.entries(map.get('G'))
        const {parameter} = req.query
        res.json(map.get(parameter))
        console.log(map.get(parameter))
    }

    async sendData(req, res) {
        const {parameter} = req.query
        const list = req.body
        res.json(list)
        console.log(list)
        map.set(parameter, list)
    }
}

module.exports = new DataController()