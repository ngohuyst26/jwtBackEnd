import serviceUser from "../service/serviceUser";
// create the connection to database


const handleHome = (req, res) => {
  const name = "Huy Đẹp Trai";
  return res.render("home.ejs", { name });
};


const handleUserPage = async (req, res) => {
  let UserList = await serviceUser.ListUsers();
  return res.render("users.ejs", { UserList });
};


const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let user = req.body.user;
  let password = req.body.password;
  let verry = req.body.verry;
  serviceUser.createUser(user, email, password)
  return res.redirect("/user");
};


const handleDeleteUser = async (req, res) => {
  console.log("id:", req.params.id);
  await serviceUser.RemoveUsers(req.params.id)
  return res.redirect("/user");
}

const handleGetOneUser = async (req, res) => {
  let userGet = {}; 
  let user = await serviceUser.GetOneUser(req.params.id);
  if(user && user.length > 0) {
    userGet = user[0];
  }
  return res.render("update-user.ejs", { userGet });
}


const handleUpdateUser = async (req, res) => {
  let user = req.body.user;
  let email = req.body.email;
  let id = req.body.id;
  await serviceUser.UpdateUser(id, user, email);
  return res.redirect("/user");
}


module.exports = {
  handleHome,
  handleUserPage,
  handleCreateUser,
  handleDeleteUser,
  handleGetOneUser,
  handleUpdateUser
};
