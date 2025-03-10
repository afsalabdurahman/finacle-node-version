const { state } = require("../dataBase/Db");
var dbs = require("../dataBase/Db");
module.exports = {
  checkdata: (userdata) => {
    var respons = {};
    var status = false;
    var a = true;
    var conn = dbs;
    return new Promise((resolve, reject) => {
      conn.connect(() => {
        conn.query("SELECT*FROM level_1", function (err, result, fields) {
          console.log(result[0].user_id, "result data");
          if (userdata.name === result[0].sole_id) {
            console.log("mission passwed");
            respons.status = true;
            respons.user = result[0].sole_id;
            resolve(respons);
          } else {
            respons.status = false;
            resolve(respons);
            console.log("mission faild");
          }
        });
      });
    });
  },

  chckpass: (pass) => {
    var respons = {};
    console.log(pass.password, "gett pass");
    return new Promise((resolve, reject) => {
      dbs.connect(() => {
        dbs.query("select*from pasword", (err, result) => {
          console.log(result[0].user_password, "result 222222222");
          if (pass.password == result[0].user_password) {
            console.log("true");

            resolve((respons.status = true));
          } else {
            console.log("false");
            resolve((respons.status = false));
          }
        });
      });
    });
  },
  menu: (serch) => {
    return new Promise((resolve, reject) => {
      dbs.connect(() => {
        var respons = {};
        dbs.query(
          `SELECT * FROM menu WHERE menus ="${serch.menu}"`,
          (err, result) => {
            respons.one = result;
          }
        );
        dbs.query("select * from menu", (err, result) => {
          var find = result[0].menus;
          var from = result;
          from.forEach((element) => {});

          respons.two = result;

          resolve(respons);
        });
      });
    });
  },
  uploading: (updata) => {
    return new Promise((resolve, reject) => {
      var functions = updata.function;
      var sole_id = updata.soleid;
      var customer = updata.customer_id;
      var ccy = updata.ccy;
      var schemecode = updata.scheme_code;
      var glsub = updata.gl_sub;
      var permentantAc = updata.permant_ac;
      var amount = updata.amount;

      var sql = `INSERT INTO finacle (functions,soleid,customer_id,ccy,schemecode,glsubcode,permentant,amount) VALUES ('${functions}','${sole_id}','${customer}','${ccy}','${schemecode}','${glsub}','${permentantAc}','${amount}' )`;
      dbs.query(sql, function (err, result) {
        if (err) console.log(err);
        else {
        }
      });

      var name = "AFSAL ABDURAHMAN";
      var atz = "no";
      var sql1 = `INSERT INTO customer_id (user_cid,user_name,accounts,accountz) VALUES ('${customer}','${name}','${permentantAc}','${atz}' )`;
      dbs.query(sql1, function (err, result) {
        if (err) console.log(err);
        else {
          console.log(result);
        }
      });
    });
  },
  account: (ac) => {
    var status = {};

    console.log(ac.account, "acts");
    return new Promise((resolve, reject) => {
      dbs.connect(() => {
        dbs.query(
          `SELECT * FROM finacle WHERE permentant ="${ac.account}"`,
          (err, result) => {
            console.log(result, "1111111");
            status.one = result;
            dbs.query(
              `SELECT * FROM customer_id WHERE accounts ="${ac.account}"`,
              (err, result) => {
                console.log(result, "customer idssss &&&&&&account");
                var ff = result;
                status.two = result;
                resolve(status);
              }
            );
          }
        );
      });
    });
  },
};
