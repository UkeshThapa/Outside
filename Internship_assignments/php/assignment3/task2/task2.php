<?php

// Does php support encapsulation? Show why or why not with example.

class Integer{

    public $value;

    function __set($name,$value){
        $this->value = $value;
    }

    function __call($name,$arguments){
        if($name == 'minus'){
            $this->value--;
            return $this;
        }

    } 

    function __toString(){
       return ($this->value);
    }

}

$num = new Integer();
$num->number=20;
echo "original number $num <br>";
$num-> minus();
echo "decrease number $num" ;
?>