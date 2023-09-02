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
  await serviceUser.RemoveUsers(req.params.id)
  return res.redirect("/user");
}


module.exports = {
  handleHome,
  handleUserPage,
  handleCreateUser,
  handleDeleteUser
};
