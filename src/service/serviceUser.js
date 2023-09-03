// import  connection  from "../service/database";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from 'bluebird';


const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userpass) => {
  let hash = bcrypt.hashSync(userpass, salt);
  return hash;
};

const createUser = async (username, email, password) => {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'mysql', database: 'jwtbackend', Promise: bluebird });
  let passHash = hashUserPassword(password);
  try {
    connection.execute('INSERT INTO users(email,user,password) VALUES(?,?,?)', [email, username, passHash]);
    console.log("Tạo thành công")
  } catch (e) {
    console.log(e);
  }
};

const ListUsers = async () => {
  let userslist = [];
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'mysql', database: 'jwtbackend', Promise: bluebird });
  try {
    const [rows] = await connection.execute('SELECT * FROM `users`');
    userslist = rows;
    return userslist;
  } catch (e) {
    console.log(e);
    return userslist;

  }
};

const RemoveUsers = async (id) => {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'mysql', database: 'jwtbackend', Promise: bluebird });
  try {
    await connection.execute('DELETE FROM users WHERE id=?',[id]);
  } catch (e) {
    console.log(e);
  }
}

const GetOneUser = async (id) => {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'mysql', database: 'jwtbackend', Promise: bluebird });
  try {
    const [rows] = await connection.execute('select * from users where id=?',[id]);
    return rows;
  } catch (e) {
    console.log(e);
  }
}






const UpdateUser = async (id, user, email) => { 
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'mysql', database: 'jwtbackend', Promise: bluebird });
  try {
    await connection.execute('UPDATE users SET user=?, email=? WHERE id=?',[user, email, id]);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  createUser,
  hashUserPassword,
  ListUsers,
  RemoveUsers,
  GetOneUser,
  UpdateUser
}