<?php

$nameForm = addslashes($_POST['name']);
$emailForm = addslashes($_POST['email']);
$phoneForm = addslashes($_POST['phone']);
$mesageForm = addslashes($_POST['message']);

$to = "oficialthurhenrique@gmail.com";
$subject = $nameForm . "deseja entrar em contato com Dev Thur";

$body = "Nome: " . $nameForm . "\n" .
    "Email: " . $emailForm . "\n" .
    "Telefone: " . $phoneForm . "\n" .
    "Mensagem: " . $mesageForm;

$header = "From: " . $nameForm . " <" . $emailForm . ">\r\n" .
    "Reply-To: " . $emailForm . "\r\n" .
    "X-Mailer: PHP/" . phpversion();


if (mail($to, $subject, $body, $header)) {
    echo ("Mensagem enviada com sucesso!");
} else {
    echo ("Mensagem não enviada!");
}
// Redireciona para a página inicial
