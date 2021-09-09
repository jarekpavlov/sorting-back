import connection from '../repository/db.js';

class DataAccess {
    static getList(req, res) {
        const {parameter} = req.query;
        connection().query(`SELECT*FROM ${parameter}`, (err, rows) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(rows);
        });
    }

    static saveList(req, res) {
        const {parameter} = req.query;
        const list = req.body;
        connection().query(`TRUNCATE ${parameter}`, (err) => {
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
            connection().query(sql, [listF], (err) => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                console.log('success');
                res.json(list);
            });
        });
    }
}

export default DataAccess;