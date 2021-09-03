const dbConnection = require("../repository/db")

const getList = (req,res)=>{
    const {parameter} = req.query
    dbConnection.query(`SELECT*FROM ${parameter}`, (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
}
const saveList = (req,res)=>{
    const {parameter} = req.query
    const list = req.body
    dbConnection.query(`TRUNCATE ${parameter}`, (err) => {
        if (!err) {
            console.log('truncated')
            const listF = []
            for (let item of list) {
                const listS = [item.code, item.name]
                listF.push(listS)
            }
            const sql = `INSERT INTO ${parameter} values ?`
            dbConnection.query(sql, [listF], (err) => {
                if (!err) {
                    console.log('success')
                    res.json(list)
                } else {
                    console.log(err)
                }
            })
        } else {
            console.log(err)
        }
    })
}
module.exports = {
    getList,
    saveList
}