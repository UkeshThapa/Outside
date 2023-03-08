<?php

// import the file
require_once( "connection/conn.php");


// value obtained from the input form
$name = $_POST["name"];
$anime_id = $_POST["anime_id"];
$writer = $_POST["writer"];
$company = $_POST["company"];
$type = $_POST["type"];
$genre = $_POST["genre"];

// query to get the email and password
$sql = "UPDATE anime SET anime_name = '$name',writer_name='$writer',production_company_name='$company',type='$type',genre='$genre' WHERE id = $anime_id";

// send the query to the database
$result = $conn->query($sql);
// check the connection of the database
if($result===TRUE){
    header('Location:index.php');
}
else{
    echo 'error adding data';
}


// close the database connection
$conn->close();

?>
