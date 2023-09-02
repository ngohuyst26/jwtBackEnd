import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "jwtbackend",
});

const handleHome = (req, res) => {
  const name = "Huy Đẹp Trai";
  return res.render("home.ejs", { name });
};

const handleUserPage = (req, res) => {
  return res.render("users.ejs");
};

const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let user = req.body.user;
  let password = req.body.password;
  connection.query(
    "INSERT INTO users(email,user,password) VALUES(?,?,?)",
    [email, user, password],
    function (err, results, fields) {
      if(err){
        console.log(err);
      }
      console.log(results); // results contains rows returned by server
    }
  );
  // console.log("Request: ", req.body);
  return res.send("create");
};

module.exports = {
  handleHome,
  handleUserPage,
  handleCreateUser,
};
