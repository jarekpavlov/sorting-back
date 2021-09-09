import mysql from 'mysql2';

const mainConnection = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected");
    });
    return connection;
}

export default mainConnection;