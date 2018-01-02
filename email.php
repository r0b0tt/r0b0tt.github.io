<?php

 $to = "antoniomainakn@gmail.com";
 $name = $_POST['name'];
 $email = $_POST['email'];
 $subject = $_POST['subject'];
 $message = $_POST['message'];
 $content = "From: " . $name . "\n" . $message;
 
 $mail = mail($to, $subject, $content);
 if($mail){
     echo "Success";
 }else{
     echo "Fail";
 }
//  header("Location: index.php");
?>