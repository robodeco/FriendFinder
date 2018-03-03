var friendData = require("../data/friends")
var userData = require("../data/user")

module.exports = function(app) {

  app.get("/api/friends", function(req,res) {
    res.json(friendData.friendArr);
  })

  app.get("/api/user", function(req,res) {
    res.json(userData.newUserData)
  })

  app.post("/api/user", function(req,res) {

    userData.newUserData.push(req.body);
    console.log('hi',req.body);
  })
};
