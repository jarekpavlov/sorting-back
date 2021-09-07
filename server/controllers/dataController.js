import {getList, saveList} from '../dao/dataAccess.js';

export const getData = (req, res) => {
    getList(req, res)
}

export const sendData = (req, res) => {
    saveList(req, res)
}
