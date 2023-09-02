import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "jwtbackend",
});
export default connection;
