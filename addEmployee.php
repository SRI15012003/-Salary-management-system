<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$department = $data->department;
$salary = $data->basic_salary;

$sql = "INSERT INTO employees (name, email, department, basic_salary)
        VALUES ('$name', '$email', '$department', '$salary')";

if ($conn->query($sql) === TRUE) {
    echo "Employee Added Successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
