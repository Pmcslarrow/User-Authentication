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
    console.log("Adding new user [+]")
    let age = req.body.age
    let name = req.body.name
    let email = req.body.email
    let job = req.body.job
    
    await pool.query(`INSERT INTO users (age, name, email, job) VALUES (${age}, '${name}', '${email}', '${job}');`)
      .then((data) => res.sendStatus(200))
      .catch((err) => {
        console.log("\n#############################")
        console.log("Error inserting  [-]")
        console.log(err.detail)
        console.log("#############################\n")
        res.send("Error Inserting")
      })  
  } catch (err) {
    console.log("Error adding new user [-]")
    res.sendStatus(500)
  }
  
})

app.delete("/users", async(req, res) => {
  console.log("DELETING")
  let rowNumber = req.body.userData;
  await pool.query(`DELETE FROM users WHERE user_id = ${rowNumber};`)
    .then((response) => {
      res.status(200).send("DELETE completed [+]")
    })
    .catch((err) => {
      res.status(500).send("DELETE error[-]")
    })
  })

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
