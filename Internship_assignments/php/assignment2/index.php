<?php
include('user.php');

$computerScience = new user\computerScience('yukesh',80,60,70);
$computerScience->get_student_name();
$computerScience->get_average_marks();

$computerScience = new user\mathematics('yukesh',90,80,90);
$computerScience->get_average_marks();

?>