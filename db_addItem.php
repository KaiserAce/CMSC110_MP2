<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'db_connect.php';

$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name, $db_port);

if ($mysqli->connect_error) {
    echo json_encode(["error" => "Failed to connect to database: " . $mysqli->connect_error]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$file = $data['file'];
$name = $data['name'];
$category = $data['category'];
$price = (float) $data['price'];
$qty = (int) $data['quantity'];


$sql = "INSERT INTO products (Product_ID, Product_Name, Product_Category, Image_File, Product_Price, Quantity) VALUES ('$id', '$name', '$category', '$file', $price, $qty)";
$result = $mysqli->query($sql);

$mysqli->close();

echo json_encode(['message' => 'Data inserted successfully']);
?>
