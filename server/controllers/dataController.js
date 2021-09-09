import DataAccess from '../dao/dataAccess.js'

class DataController {
    static getData(req, res) {
        DataAccess.getList(req, res);
    }

    static sendData(req, res) {
        DataAccess.saveList(req, res);
    }
}

export default DataController;
