<?php
namespace Api;

class api{
    
    private $requestName;  
    private $url;
    private $conn;
    private $id;
    
    function __construct($request,$id){
        $this->requestName = $request;
        $this->id =$id;
        $this->request();
    }
    
    function request(){
        echo $this->requestName ;
        header('Content-Type: application/json');
        switch($this->requestName){
            case "POST":
                $this->post();
                break;
            case "GET":
                $this->get();
                break;
            case 'PUT':
                $this->put();
                break;
            case 'DELETE':
                $this->delete();
                break;
            default:
                $this->notFoundPage();
        } 
    }

    function post(){
        require_once( "../connection/conn.php");
        $data = json_decode(file_get_contents("php://input"), true);
        $name = $data["name"];
        $writer = $data["writer"];
        $company = $data["company"];
        $type = $data["type"];
        $genre = $data["genre"];    
        // query to get the email and password
        $sql = "INSERT INTO anime (anime_name,writer_name,production_company_name,type,genre) 
        VALUES ('$name','$writer','$company','$type','$genre')";
        // send the query to the database
        $result = $conn->query($sql);
        // check the connection of the database
        if($result===TRUE){
            echo json_encode(array('message' => 'Contact form submitted successfully'));
        }
        else{
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }
        // close the database connection
        $conn->close();

    }



    function get(){
        require_once( "../connection/conn.php");
        echo "hello";
        if ($this->id  == null){
            $sql = "SELECT * FROM anime";
            $result = $conn->query($sql);
            $data = array();
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $data[] = $row;
                }
                echo json_encode($data);
            }else{
                echo json_encode(array('message' => 'No contact forms found'));
            }
        }else{
            $sql = "SELECT * FROM anime WHERE id=$this->id";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                $row = mysqli_fetch_assoc($result);
                echo json_encode($row);
            }else{
                echo json_encode(array('message' => 'No contact forms found'));
            }
        }
    }

    function put(){
        // import the file
        // require_once( "../connection/conn.php");
        echo "put $this->id" ;
        // $data = json_decode(file_get_contents("php://input"), true);
        // $name = $data["name"];
        // $writer = $data["writer"];
        // $company = $data["company"];
        // $type = $data["type"];
        // $genre = $data["genre"];    
        // // query to get the email and password
        // $sql = "UPDATE anime SET anime_name = '$name',writer_name='$writer',production_company_name='$company',type='$type',genre='$genre' WHERE id = $this->id";

        // // send the query to the database
        // $result = $conn->query($sql);
        // // check the connection of the database
        // if($result===TRUE){
        //     echo json_encode(array('message' => 'Contact form updated successfully'));
        // }
        // else{
        //     echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        // }
        // // close the database connection
        // $conn->close();
    }

    function delete(){
        require_once( "../connection/conn.php");
        $sql = "DELETE FROM anime WHERE id = $this->id "; 
        $result =  $conn->query($sql);
        if($result){
            echo json_encode(array('message' => 'Contact form deleted successfully'));
        }
        else{
            echo json_encode(array('message' => 'Error: ' . $conn->error));
        }
    }

    function notFoundPage(){
        echo "Page not found";
    }

}
?>