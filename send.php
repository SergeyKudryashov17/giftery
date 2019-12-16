<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];

    $to = 'sergey_k@artrange.ru';
    $subject = 'Заявка обратной связи. Сайт Giftery';
    $message = '<p>Имя: '.$name.'</p>';
    $message .= '<p>Номер телефона: '.$number.'</p>';
    $message .= '<p>Email: '.$email.'</p>';
//    $headers = 'From: Giftery <info@giftery.ru>';
//    $headers .= 'Content-type: text/html;';
    $headers  = "From: Giftery < info@giftery.ru >\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\n";

    mail($to, $subject, $message, $headers);

