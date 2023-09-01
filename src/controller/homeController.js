const hanleController = (req, res) => {
  const name = "Huy Đẹp Trai";
  return res.render("home.ejs", { name });
};

module.exports = {
  hanleController,
};
