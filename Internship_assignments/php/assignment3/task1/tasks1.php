<?php
// Does php support encapsulation? Show why or why not with example.
class students{
    public $name;
    public $age;
    public $address;

    function __construct($name,$age,$address){
        $this->name = $name;
        $this->age = $age;
        $this->address = $address;
    }

    function student_detail(){
        echo"The student Information:\n";
        echo "1. Full Name: ".$this->name."\n";
        echo "2. Age: ".$this->age."\n";
        echo "3. Address: ".$this->address."\n";

    }

}

$student = new students('yukesh',24,"kathmandu");
$student->student_detail();

?>