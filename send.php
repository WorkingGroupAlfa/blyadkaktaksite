<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "bleudeprint@icloud.com"; 
    $subject = "Контактная информация от посетителя";

    $contact = htmlspecialchars(trim($_POST["contact"]));
    $message = "Пользователь оставил контакт: $contact";

    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "Success";
    } else {
        echo "Error";
    }
} else {
    echo "404";
}
?>
