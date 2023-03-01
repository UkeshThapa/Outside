<?php
 
    class MagicMethod1 {
        function __toString(){
            return "You are using MagicMethod object as a String ";
        }
    }
    
    class MagicMethod2 {
        function __destruct() {
            echo "This destruct magic method "
            + "gets called when object destroys";
        }
    }
     
    // magic method1
    $obj1 = new MagicMethod1();
    echo $obj1;
    $obj2 = new MagicMethod2();
 
?>