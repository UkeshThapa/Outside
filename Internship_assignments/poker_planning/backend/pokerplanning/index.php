
<?php

include "Api/api.php";

function main(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    // request check
    $request = $_SERVER["REQUEST_METHOD"]; 
    
    new Api\api($request);

}


main();
?>