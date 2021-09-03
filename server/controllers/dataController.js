const {getList, saveList} = require("../dao/dataAccess");

const getData = (req, res) => {
    getList(req,res)
}

const sendData = (req, res) => {
    saveList(req,res)
}

module.exports = {
    getData,
    sendData
}