import  connection  from "../service/database";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userpass) => {
  let hash = bcrypt.hashSync(userpass, salt);
  return hash;
};

const createUser = (username, email, password) => {
  let passHash = hashUserPassword(password);
  connection.query(
    "INSERT INTO users(email,user,password) VALUES(?,?,?)",
    [email, username, passHash],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log("Tạo tài khoản thành công");
      }
    }
  );
};

module.exports = {
  createUser,
  hashUserPassword
}