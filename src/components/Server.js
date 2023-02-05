// server.js
const express = require("express")
const bcrypt = require("bcryptjs")
const sqlite3 = require("sqlite3").verbose()

const app = express()
const port = 3000

app.use(express.json())

const db = new sqlite3.Database("users.db", (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log("Connected to the users database.")
})

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  );
`)

app.post("/register", (req, res) => {
  const { username, password } = req.body

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err })
    }

    db.run(
      `INSERT INTO users (username, password)
       VALUES (?, ?);`,
      [username, hash],
      (err) => {
        if (err) {
          return res.status(500).json({ error: err })
        }
        res.status(201).json({ message: "User created" })
      }
    )
  })
})

app.post("/login", (req, res) => {
  const { username, password } = req.body

  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err })
    }
    if (!row) {
      return res
        .status(401)
        .json({ message: "Username or password is incorrect" })
    }
    bcrypt.compare(password, row.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err })
      }
      if (result) {
        return res.status(200).json({ message: "Login successful" })
      }
      return res
        .status(401)
        .json({ message: "Username or password is incorrect" })
    })
  })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
