
<?php

include "api.php";

function main(){
    $request = $_SERVER["REQUEST_METHOD"];
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        echo $id;
        $api = new Api\api($request,$id);
    }else{
        $id = null;
        $api = new Api\api($request,$id);
    }
}


main();
?>