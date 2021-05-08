const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(express.static("upload"));

// WITH IMAGES
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "pledge_image_db",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const imagePath = req.body.imagePath;

  db.query(
    "INSERT INTO pledge_table (name, message, image) VALUES (?,?,?)",
    [name, message, imagePath],
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});

app.get("/pledges", (req, res) => {
  db.query("SELECT * FROM pledge_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const message = req.body.message;
  const image = req.body.imagePath;

  db.query(
    "UPDATE pledge_table SET name = ?, message =?, image = ? WHERE id = ?",
    [name, message, image, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM pledge_table WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("yay server is running on port 3001");
});

/**
 * Old Code
 * 
 * // update ONLY NAME
// we will update the name for our example
// there is a weird edge case where if we immediately create a new pledge and
// then we immediately update it, the update appears on the website but it
// doesn't occur in the database so then when we refresh
// the old name stays  and then we can update and change it in the database which
// is weird
// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   db.query(
//     "UPDATE pledge_table SET name = ? WHERE id = ?",
//     [name, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// update NAME MESSAGE IMAGE


// ============================================================================================================
// NO IMAGES
// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "pledge_database",
// });

// app.post("/create", (req, res) => {
//   // query database
//   const name = req.body.name;
//   const message = req.body.message;

//   db.query(
//     "INSERT INTO pledge_table (name, message) VALUES (?,?)",
//     [name, message],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted ");
//       }
//     }
//   );
// });
// ============================================================================================================

 */
