<?php
namespace user;

abstract class student{
     public $name;
    function __construct($studentName){
        $this->name = $studentName;     
     }
     
    function get_name(){
        echo 'Student: '.$this->name."\n" ;
        
     }
    abstract function get_average_marks();
 }

class computerScience extends student{
    public $OOP;
    public $DBMS;
    public $Maths;
    function __construct($name,$OOP,$DBMS,$Maths){
        parent::__construct($name);
        $this->OOP = $OOP;
        $this->DBMS = $DBMS;
        $this->Maths = $Maths;
        
    }
    
    function get_student_name(){
        parent::get_name();
    }
    
    function get_average_marks(){
        $sum = $this->OOP+$this->DBMS+$this->Maths;
        echo "Computer Science total Marks: ".$sum."\n";
        echo "Computer Science Average Marks: ".($sum/3)."\n";
        
    }
    
}


class mathematics extends student{
    public $algebra;
    public $derivative;
    public $antiDerivative;
    function __construct($name,$algebra,$derivative,$antiDerivative){
        parent::__construct($name);
        $this->algebra = $algebra;
        $this->derivative = $derivative;
        $this->antiDerivative = $antiDerivative;
        
    }
    
    function get_student_name(){
        parent::get_name();
    }
    
    function get_average_marks(){
        $sum = $this->algebra+$this->derivative+$this->antiDerivative;
        echo "Mathematics total Marks: ".$sum."\n";
        echo "Mathematics Average Marks: ".($sum/3)."\n";
        
    }
    
}


?>