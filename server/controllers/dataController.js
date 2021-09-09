const DataAccess = require("../dao/dataAccess");


const getData = (req, res) => {
    DataAccess.getList(req, res);
}

const sendData = (req, res) => {
    DataAccess.saveList(req, res);
}

module.exports = {
    getData,
    sendData
}