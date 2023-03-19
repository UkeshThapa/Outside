<?php
namespace Api;
use Post;
include "post.php";
use Get;
include "get.php";
use Delete;
include "delete.php";

class api{
    
    private $requestName;  

    function __construct($request){
        $this->requestName = $request;
        $this->request();
    }
    
    function request(){
        header('Content-Type: application/json');
        switch($this->requestName){
            case "POST":
                new Post();
                break;
            case "GET":
                new Get();
                break;
            case "DELETE":
                new Delete();
                break;

        } 
    }



}
?>