import dbConnection from '../repository/db.js';

export const getList = (req, res) => {
    const {parameter} = req.query;
    dbConnection.query(`SELECT*FROM ${parameter}`, (err, rows) => {
        if (err) {
            res.status(500);
            res.send(err);
            return;
        }
        res.json(rows);
    });
}

export const saveList = (req, res) => {
    const {parameter} = req.query;
    const list = req.body;
    dbConnection.query(`TRUNCATE ${parameter}`, (err) => {
        if (err) {
            res.status(500);
            res.send(err);
            return;
        }

        console.log('truncated');
        const listF = [];
        for (let item of list) {
            const listS = [item.code, item.name];
            listF.push(listS);
        }
        const sql = `INSERT INTO ${parameter}
                     values ?`;
        dbConnection.query(sql, [listF], (err) => {
            if (err) {
                res.status(500);
                res.send(err);
                return;
            }

            console.log('success');
            res.json(list);
        });
    });
}
