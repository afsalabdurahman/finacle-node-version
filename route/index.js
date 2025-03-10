var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var bodyParser = require("body-parser");
var data = require("../Data/Data");
const random = require("simple-random-number-generator");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("index.hbs");
});

router.post("/user", function (req, res, next) {
  data.checkdata(req.body).then((respons) => {
    if (respons.status) {
      res.render("sample.hbs");
    } else {
      res.send("faild to loging");
    }
  });
});
router.post("/main", (req, res) => {
  data.chckpass(req.body).then((respons) => {
    if (respons) {
      res.render("mainpage.hbs");
    } else {
      res.send("mission faild");
    }
  });
});
router.post("/menu", (req, res) => {
  data.menu(req.body).then((respons) => {
    if (respons.one[0].menus == "oaac") {
      let params = {
        min: 8888800000,
        max: 9000000000,
        integer: true,
      };
      var numm = random(params);

      res.render("oaac.hbs", { numm });
    } else if (respons.one[0].menus == "tm") {
      res.send("tm");
    } else if (respons.one[0].menus == "acm") {
      res.render("acm.hbs");
    } else {
      res.send("failed menu");
    }
  });
});
router.post("/oaacDb", (req, res) => {
  data.uploading(req.body);
  res.render("mainpage.hbs");
});
router.post("/acm2", (req, res) => {
  data.account(req.body).then((responds) => {
    var abc = responds.one[0];
    var names = responds.two[0].user_name;
    var aa = {
      closed: "N",
      remark: " T OTHER DEPOSIT",
      date: "01/01/2023",
      const: "INDIVIDUAL",
      int: "5.70",
      dep: "12/01",
      a: "A",
      name: "Afsal",
    };
    res.render("acm.hbs", { names, abc, aa });
  });
});
module.exports = router;
