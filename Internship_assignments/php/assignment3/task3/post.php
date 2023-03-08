<?php

// import the file
require_once( "connection/conn.php");


// value obtained from the input form
$name = $_POST["name"];
$writer = $_POST["writer"];
$company = $_POST["company"];
$type = $_POST["type"];
$genre = $_POST["genre"];

// query to get the email and password
$sql = "INSERT INTO anime (anime_name,writer_name,production_company_name,type,genre) 
        VALUES ('$name','$writer','$company','$type','$genre')";

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
