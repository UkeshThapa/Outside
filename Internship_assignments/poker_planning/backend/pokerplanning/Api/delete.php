<?php
    class Delete{
        function __construct(){
            $this-> checkRequestAction();
        }
        function checkRequestAction(){
            if(isset($_GET['action'])){
                $action = $_GET['action'];
                switch($action){
                    case "deleteStoryById":
                        $this->deleteStoryById();
                        break;
                    case "deleteSessionById":
                        $this->deleteSessionById();
                        break;
                }
            }
        }

        function deleteStoryById(){    
            require_once( "connection/connection.php");
            $story_id = $_GET['story_id'];
            $sql = "DELETE FROM stories
                    WHERE id = $story_id";
            // send the query to the database
            $result = $conn->query($sql);
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['message'=>'story deleted']);
            }
            else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            $conn->close();
        }


        function deleteSessionById(){
            require_once( "connection/connection.php");
            $session_id = $_GET['session_id'];

            $sql = "DELETE FROM sessions
                    WHERE session_id = '$session_id'";
            // send the query to the database
            $result = $conn->query($sql);
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['message'=>'story deleted']);
            }
            else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            $conn->close();
        }

    }
?> 