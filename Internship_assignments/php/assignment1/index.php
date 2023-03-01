<?php    
    $myFile = fopen('input.txt', 'r');    
    $text = fread($myFile, filesize("input.txt"));    
    $calory_by_group = explode("\n\n", $text);    
    foreach ($calory_by_group as $calory) {        
        $sum_calory[] = array_sum(explode("\n", $calory));
    }    
    $max = max($sum_calory);
    echo ("max calory is: $max \n");
    rsort($sum_calory);    
    echo ("top 3 calories are: ");    
    for ($i = 0; $i < 3; $i++) {        
        echo ("$sum_calory[$i] \n");    
        }    
?>