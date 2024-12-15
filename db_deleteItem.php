
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

$sql = "DELETE FROM products WHERE Product_ID = '$id'";
$result = $mysqli->query($sql);

$mysqli->close();

echo json_encode(['message' => 'Data inserted successfully']);
?>
