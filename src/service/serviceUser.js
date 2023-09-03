// import  connection  from "../service/database";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from 'bluebird';
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userpass) => {
  let hash = bcrypt.hashSync(userpass, salt);
  return hash;
};

const createUser = async (username, email, password) => {
  let passHash = hashUserPassword(password);
  try {
    //User là tên của moddel khôn phải tên của bảng 
    await db.User.create({
      email: email,
      password: passHash,
      user: username
    });
  } catch (e) {
    console.log(e);
  }
};

const ListUsers = async () => {
  let userslist = [];
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'mysql', database: 'jwtbackend', Promise: bluebird });
  try {
    const [rows] = await connection.execute('SELECT * FROM `user`');
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