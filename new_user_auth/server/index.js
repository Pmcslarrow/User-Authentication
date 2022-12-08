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

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
