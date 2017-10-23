/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  console.log("GET /");
  res.render('home', {
    title: 'Home'
  });
};
