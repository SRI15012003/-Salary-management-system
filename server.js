const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running");
});

// Add Employee
app.post("/addEmployee", (req, res) => {
  const { name, email, department, basic_salary } = req.body;

  const sql = "INSERT INTO employees (name, email, department, basic_salary) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, department, basic_salary], (err, result) => {
    if (err) throw err;
    res.send("Employee Added");
  });
});

// Get Employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
