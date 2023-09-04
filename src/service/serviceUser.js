import bcrypt from "bcryptjs";
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
  try {
    const users = await db.User.findAll();
    userslist = users;
    return userslist;
  } catch (e) {
    console.log(e);
    return userslist;

  }
};


const RemoveUsers = async (id) => {
  try {
    await db.User.destroy({
      where: {
        id: id
      },
    },);
  } catch (e) {
    console.log(e);
  }
}


const GetOneUser = async (id) => {
  try {
    const user = await db.User.findAll({
      where: {
        id: id,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
  }
}


const UpdateUser = async (id, user, email) => {
  try {
    await db.User.update(
      {
        email: email,
        user: user
      },
      {
        where: {
          id: id,
        },
      });
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