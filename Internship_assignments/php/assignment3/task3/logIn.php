<?php
// import the file
require_once( "connection/conn.php");


// value obtained from the input form
$password = $_POST["password"];
$email = $_POST["email"];

// query to get the email and password
$sql = "select * from users where email='".$email."' AND password = '".$password."'";

// send the query to the database
$result = $conn->query($sql);

// check the connection of the database
if($result->num_rows > 0){
    header('Location:index.php');
}
else{
    echo 'Invalid user';
}
// close the database connection
mysqli_close($conn);
?>