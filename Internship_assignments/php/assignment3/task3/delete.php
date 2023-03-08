<?php
require_once( "connection/conn.php");

if (isset($_GET['deleteid'])){
    $anime_id = $_GET['deleteid'];
    $sql = "DELETE FROM anime WHERE id = $anime_id "; 
    $result =  $conn->query($sql);
    if($result){
        header('location:index.php');
    }
    else{
        echo "error in delete";
    }
}


?>