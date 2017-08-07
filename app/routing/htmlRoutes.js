var path = require("path"); //require npm path

module.exports = function(app) { //export html routing module

  app.get("/survey", function(req, res) { //create survey.html link
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.use(function(req, res) { //use default link as home.html
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};