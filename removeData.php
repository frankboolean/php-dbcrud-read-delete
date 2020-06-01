<?php
header('Content-Type: application/json');
$server = 'localhost';
$username = 'root';
$password = 'root';
$dbName = 'new';
$conn = new mysqli($server, $username, $password, $dbName,$port);
if ($conn -> connect_errno) {
    echo $conn -> connect_errno;
    return;
}

$identificativo = $_GET['id'];

$sql = "
    DELETE
    FROM paganti  WHERE id = " . $identificativo;
$conn -> query($sql);
$conn -> close();




 ?>
