function addEmployee() {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    department: document.getElementById("department").value,
    basic_salary: document.getElementById("salary").value
  };

  fetch("http://localhost:5000/addEmployee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(data => alert(data));
}
