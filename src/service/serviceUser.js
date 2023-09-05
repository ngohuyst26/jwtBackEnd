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

  //attributes dùng để lọc các gái trị caanf lấy ra 
  //include đẻ liên kết lấy dữ liệu từ bảng khác
  // 
  let usergroup = await db.User.findOne(
    {
      where: { id: 2 },
      attributes: ["id", "user", "email"],
      include: { model: db.Group, attributes: ["name", "description"] },
      raw: true,
      nest: true
    }
  );


  let RoleUser = await db.Role.findAll(
    {
      attributes: ["id", "url", "description"],
      include: { model: db.Group, where: {id: 1}, attributes: ["id", "name", "description"]},
      raw: true,
      nest: true
    }
  );
  console.log("user role: ", RoleUser);


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