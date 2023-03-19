<?php
    class Post{
        function __construct(){
            $this-> checkRequestAction();
        }
        function checkRequestAction(){
            // axios send the data in json formate so to read the date we have to decode the data 
            $data = json_decode(file_get_contents('php://input'), true);
            $action = $data['action'];
            switch($action){
                case "signUp":
                    $this->signupAction();
                    break;
                case "logIn":
                    $this->LogInAction();
                    break;
                case "addSession":
                    $this->sessionAddAction();
                    break;
                case "addParticipants":
                    $this->participantsAddAction();
                    break;
                case "addStory":
                    $this->addStory();
                    break;
                case "updateHiddenStatus":
                    $this->updateHiddenStatus();
                    break;
                case "InsertTheStatus":
                    $this->InsertTheStatus();
                    break;
                case "updateStoryStatus":
                    $this->updateStoryStatus();
                    break;
                case "addStoryPoints":
                    $this->addStoryPoints();
                    break;
            }
        }



        function signUpAction(){    
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $fullName = $data['fullName'];
            $email = $data['email'];
            $password = password_hash($data['password'],true);

            $sql = "INSERT INTO users (fullname,email,password) 
            VALUES ('$fullName','$email','$password')";
            // send the query to the database
            $result = $conn->query($sql);
            // check the connection of the database
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(array('message' => 'submitted successfully'));
            }
            else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            // close the database connection
            $conn->close();
        }

        function logInAction(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $email = $data['email'];
            $password = $data['password'];
            
            $sql = "SELECT * FROM users WHERE (email = '$email')";
            // send the query to the database
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                $row = mysqli_fetch_assoc($result);
                if (is_array($row)){
                    if (password_verify($password, $row ['password'])){
                        header("HTTP/1.1 200 OK");
                            echo json_encode(array('id' => $row['id']));
                    }
                    else{
                        header("HTTP/1.1 400 Bad Request");
                        echo json_encode(array('message' => 'Invalid email or password'));
                    }
                }
            }else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Invalid email or password'));
            }
            $conn->close();
        }



        function sessionAddAction(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $sessionName = $data['sessionName'];
            $sessionDescription = $data['sessionDescription'];
            $session_creator = $data['creator_id'];
            session_start();
            // $session_id = bin2hex(random_bytes(16));
            $session_id_query = "SELECT UUID() as uuid";
            $session_id_result = $conn->query($session_id_query);
            $id_value = mysqli_fetch_assoc($session_id_result);
            $session_id = $id_value['uuid'];
            $_SESSION['session_id'] = $session_id;
            
            $sql = "INSERT INTO sessions (session_id,name,description,creator_id) 
            VALUES ('$session_id','$sessionName','$sessionDescription','$session_creator')";
            // send the query to the database
            $result = $conn->query($sql);
            // check the connection of the database
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['session_id' => $_SESSION['session_id']]);
            }
            else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            // close the database connection
            $conn->close();
        }

        function participantsAddAction(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $participant_id = $data['user_id'];
            $session_id = $data['session_id'];
            
            // check the participants
            $check_query = "SELECT creator_id FROM sessions WHERE (session_id = '$session_id') ";
            $check_result = $conn->query($check_query);
            if ($check_result->num_rows > 0){
                $result_value = mysqli_fetch_assoc($check_result);
                // for moderator
                if ($result_value['creator_id']==$participant_id){
                    
                    $sql = "INSERT INTO participants(role,user_id,session_id)
                            VALUES ('moderator','$participant_id','$session_id')";
                    $result = $conn->query($sql);
                    if($result===TRUE){
                        header("HTTP/1.1 201 Created");
                        echo json_encode(['message'=>'created']);
                    }
                }
                else{
                    $sql = "INSERT INTO participants(role,user_id,session_id)
                            VALUES ('member','$participant_id','$session_id')";
                    $result = $conn->query($sql);
                    if($result===TRUE){
                        header("HTTP/1.1 201 Created");
                        echo json_encode(['message'=>'created']);
                    }

                }
            }
            // close the database connection
            $conn->close();

        }


        function addStory(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $session_id = $data['session_id'];
            $storyTitle = $data['title'];
            $storyDescription = $data['description'];

            $query = "INSERT INTO stories (session_id,name,description)
                      VALUES ('$session_id','$storyTitle','$storyDescription')";

            $result = $conn->query($query);
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['message'=>'story added']);
            }
            else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }

        }


        function updateStoryStatus(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $story_id = $data['story_id'];
            $query = "UPDATE stories
                        SET status = CASE
                        WHEN id = $story_id THEN 'active'
                        ELSE 'inactive'
                        END";


            $result = $conn->query($query);
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['message'=>'story status update']);
            }
            else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            
            // close the database connection
            $conn->close();
        }
        
        
        function addStoryPoints(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $user_id = $data['user_id'];
            $story_id = $data['story_id'];
            $story_points = $data['story_points'];
            print_r($data);
            $query = "INSERT INTO storypoints (user_id,story_id,points)
                    VALUES ('$user_id','$story_id','$story_points')
                    ";

            $result = $conn->query($query);
            
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['message'=>'story point added']);
            }
            else{


                $UpdateQuery = "UPDATE storypoints SET points = '$story_points'
                WHERE story_id = '$story_id' AND user_id = $user_id";

                $result = $conn->query($UpdateQuery);
                if($result===TRUE){
                    header("HTTP/1.1 201 Created");
                    echo json_encode(['message'=>'story point update']);
                }
                else{
                    header("HTTP/1.1 400 Bad Request");
                    echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
                }


            }


            $conn->close();
        }


        function InsertTheStatus(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $session_id = $data['session_id'];

            $sql = "INSERT INTO statusCheck(session_id) VALUES ('$session_id')";
            $result = $conn->query($sql);
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['storyStatus'=>'hidden']);
            }
            else{
                $sql = "UPDATE statusCheck SET storyStatus = 'hidden' where session_id = '$session_id'";
                $result = $conn->query($sql);
                if($result===TRUE){
                    header("HTTP/1.1 201 Created");
                    echo json_encode(['storyStatus'=>$storyStatus]);
                }
                else{
                    header("HTTP/1.1 400 Bad Request");
                    echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
                }
            }
            // close the database connection
            $conn->close();

        }
        
        function updateHiddenStatus(){
            require_once( "connection/connection.php");
            $data = json_decode(file_get_contents('php://input'), true);
            $storyStatus = $data['storyStatus'];
            $session_id = $data['session_id'];

            $sql = "UPDATE statusCheck SET storyStatus = '$storyStatus' where session_id = '$session_id'";
            $result = $conn->query($sql);
            if($result===TRUE){
                header("HTTP/1.1 201 Created");
                echo json_encode(['storyStatus'=>$storyStatus]);
            }
            else{
                header("HTTP/1.1 400 Bad Request");
                echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
            }
            // close the database connection
            $conn->close();


        }
        
        
        
    }
?>