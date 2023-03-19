<?php
class Get
{
    function __construct()
    {
        $this->checkRequestAction();
    }
    function checkRequestAction()
    {
        if (isset($_GET['action'])) {
            $action = $_GET['action'];
            switch ($action) {
                case "checkSession":
                    $this->checkSession();
                    break;
                case "allParticipants":
                    $this->allParticipants();
                    break;
                case "getSessions":
                    $this->getSessions();
                    break;
                case "getStory":
                    $this->getStory();
                    break;
                case "getStatus":
                    $this->getStatus();
                    break;
                case "getActiveStoryPoints":
                    $this->getActiveStoryPoints();
                    break;
                case "getSingleStoryDetail":
                    $this->getSingleStoryDetail();
                    break;
            }
        }
    }

    function checkSession()
    {
        require_once("connection/connection.php");
        $session_id = $_GET['session_id'];
        $sql = "SELECT * FROM sessions WHERE (session_id = '$session_id')";
        // send the query to the database
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            header("HTTP/1.1 200 OK");
            echo json_encode(array("message" => "correct session_id", "sessionExist" => true));
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Invalid email or password'));
        }
        $conn->close();
    }

    function allParticipants()
    {
        require_once("connection/connection.php");
        $session_id = $_GET['session_id'];

        $sql = "SELECT 
                        users.id as user_id,users.fullname as fullName, users.email as email,
                        participants.role as role, participants.session_id as session_id
                        FROM
                         users 
                         LEFT JOIN
                         participants 
                         ON
                          users.id = participants.user_id
                         WHERE participants.session_id = '$session_id' 
                        ";

        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $joined_data_value = [];
            while ($result_value = mysqli_fetch_assoc($result)) {
                $user_id = $result_value['user_id'];
                $fullName = $result_value['fullName'];
                $email = $result_value['email'];
                $role = $result_value['role'];
                $session_id = $result_value['session_id'];

                array_push($joined_data_value, array(
                    'user_id' => $user_id,
                    'fullName' => $fullName,
                    'email' => $email,
                    'role' => $role,
                    'session_id' => $session_id
                )
                );

            }
            // print_r($joined_data_value);
            echo json_encode($joined_data_value);
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }
        $conn->close();
    }


    function getSessions()
    {
        require_once("connection/connection.php");
        $user_id = $_GET['user_id'];
        $sql = "SELECT 
                    sessions.session_id as session_id, sessions.name as sessionName, sessions.status as status, 
                    COUNT(participants.user_id) AS num_users
                    FROM participants 
                    JOIN sessions ON participants.session_id = sessions.session_id
                    WHERE sessions.creator_id = $user_id
                    GROUP BY participants.session_id
                        ";

        $conn->query("SET sql_mode=''");
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $joined_data_value = [];
            while ($result_value = mysqli_fetch_assoc($result)) {
                $session_id = $result_value['session_id'];
                $sessionName = $result_value['sessionName'];
                $status = $result_value['status'];
                $num_users = $result_value['num_users'];

                array_push($joined_data_value, array(
                    'session_id' => $session_id,
                    'sessionName' => $sessionName,
                    'status' => $status,
                    'num_users' => $num_users
                )
                );
            }
            echo json_encode($joined_data_value);
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }


        $conn->close();

    }

    function getStory()
    {
        require_once("connection/connection.php");
        $session_id = $_GET['session_id'];
        $sql = "SELECT id, name , description ,status
                    FROM stories WHERE (session_id ='$session_id') ";

        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            header("HTTP/1.1 200 OK");
            $joined_data_value = [];
            while ($result_value = mysqli_fetch_assoc($result)) {
                $story_id = $result_value['id'];
                $storyName = $result_value['name'];
                $storyDescription = $result_value['description'];
                $storyStatus = $result_value['status'];

                array_push($joined_data_value, array(
                    'story_id' => $story_id,
                    'storyName' => $storyName,
                    'storyDescription' => $storyDescription,
                    'storyStatus' => $storyStatus
                )
                );
            }
            echo json_encode($joined_data_value);
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Invalid email or password'));
        }
        $conn->close();

    }

    function getStatus()
    {
        require_once("connection/connection.php");
        $session_id = $_GET['session_id'];
        $sql = "SELECT storyStatus FROM statuscheck WHERE (session_id = '$session_id')";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $result_value = mysqli_fetch_assoc($result);
            header("HTTP/1.1 200 OK");
            echo json_encode(['storyStatus' => $result_value['storyStatus']]);
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Invalid email or password'));
        }
        $conn->close();
    }

    function getActiveStoryPoints()
    {
        require_once("connection/connection.php");
        $session_id = $_GET['session_id'];
        $sql = "SELECT DISTINCT users.id as user_id, users.fullname as fullName,
                        participants.role as role, participants.session_id as session_id,
                        stories.status as status, stories.storyStatus as storyStatus,
                        storypoints.points as points 
                        FROM 
                        users JOIN participants ON users.id = participants.user_id
                        JOIN stories ON participants.session_id = stories.session_id
                        JOIN storypoints ON storypoints.user_id = users.id AND storypoints.story_id = stories.id 
                        WHERE stories.status ='active' AND participants.session_id = '$session_id'";

        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $joined_data_value = [];
            while ($result_value = mysqli_fetch_assoc($result)) {
                $user_id = $result_value['user_id'];
                $fullName = $result_value['fullName'];
                $role = $result_value['role'];
                $session_id = $result_value['session_id'];
                $storyStatus = $result_value['storyStatus'];
                $status = $result_value['status'];
                $points = $result_value['points'];

                array_push($joined_data_value, array(
                    'user_id' => $user_id,
                    'fullName' => $fullName,
                    'role' => $role,
                    'session_id' => $session_id,
                    'storyStatus' => $storyStatus,
                    'status' => $status,
                    'points' => $points
                )
                );

            }
            // print_r($joined_data_value);
            echo json_encode($joined_data_value);
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }


        $conn->close();
    }

    function getSingleStoryDetail(){

        require_once("connection/connection.php");

        $session_id = $_GET['session_id'];
        $story_id = $_GET['story_id'];
        echo $story_id;



        $sql ="SELECT DISTINCT users.id as users_id, users.fullname as users_name,
        participants.role as role, participants.session_id as session_id,
        stories.status as status, stories.storyStatus,stories.id,
        storypoints.points as points ,
        AVG(storypoints.points) as average
 
        FROM 
        users JOIN participants ON users.id = participants.user_id
        JOIN stories ON participants.session_id = stories.session_id
        JOIN storypoints ON storypoints.user_id = users.id AND storypoints.story_id = stories.id 
        WHERE stories.id=$story_id AND participants.session_id = '$session_id'";
    
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $joined_data_value = [];
            while ($result_value = mysqli_fetch_assoc($result)) {
                $average = $result_value['average'];


                array_push($joined_data_value, array(
                    'average' => $average,
                )
                );

            }
            // print_r($joined_data_value);
            echo json_encode($joined_data_value);
            echo json_encode(['average'=>$joined_data_value[0]['average']]);
        } else {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }


        $conn->close();

}

}
?>