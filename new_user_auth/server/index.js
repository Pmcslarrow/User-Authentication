// index.js    server

const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db");
app.use(cors())
app.use(express.json())
app.use(express.static("public"));




// Routes
app.get("/",
  (req,res)=>{
    res.send("Welcome to Paul McSlarrow's Backend")
  });


app.get("/users", async(req, res) => {
    console.log("Accessing user data...")
    const resp = await pool.query("SELECT * FROM users;");
    res.json( resp.rows )
})


app.post("/users", async(req, res) => {
  try {
    console.log("Adding new user...")
    let age = parseInt(req.body.age)
    let name = req.body.name
    let email = req.body.email
    let job = req.body.job

    // Type and error checking
    if ( typeof(age) != "number" || typeof(name) != "string" || typeof(email) != "string" || typeof(job) != "string")
    {
      console.log(`${typeof(age)}, ${typeof(name)}, ${typeof(email)}, ${typeof(job)}`)
      res.send("Invalid parameters")
      res.end()
      return
    }

    // Query
    const text = "INSERT INTO users (age, name, email, job) VALUES ($1, $2, $3, $4) RETURNING *"
    const values = [age, `${name}`, `${email}`, `${job}`]

    await pool.query(text, values, function(err, result) {
        if (err) {
          res.status(500).send("Error inserting new user [-]")
        } else {
          res.status(200).send("Success adding new user [+]")
        }
    })
    
  }

  catch (err) {
    console.log("Failed inserting user")
  }
})


app.delete("/users", async(req, res) => {
  console.log("Deleting user from database...")

  const rowNumber = parseInt(req.body.userData);
  await pool.query('DELETE FROM users WHERE user_id = $1', [rowNumber])
    .then((response) => {
      res.status(200).send("Deletion completed [+]")
    })
    .catch((err) => {
      res.status(500).send("Deletion error [-]")
    })
  })




// Listening on port 5000
app.listen(5000, () => {
    console.log("Server running on port 5000")
})
