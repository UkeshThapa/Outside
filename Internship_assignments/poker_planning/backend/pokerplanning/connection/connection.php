<?php
$serverName = "localhost";
$username = "root";
$password = "yukesh";
$database = "pokerplanning";
$port = 4040;

// Create connection
$conn = new mysqli($serverName, $username, $password,$database,$port);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>