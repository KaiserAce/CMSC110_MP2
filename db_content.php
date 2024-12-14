<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'db_connect.php';

$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name, $db_port);

if ($mysqli->connect_error) {
    echo json_encode(["error" => "Failed to connect to database: " . $mysqli->connect_error]);
    exit;
}

$sql = "SELECT * FROM products";
$result = $mysqli->query($sql);

if ($result && $result->num_rows > 0) {
  $data = [];
  while ($row = $result->fetch_assoc()) {
      $data[] = $row;
  }
  echo json_encode($data); 
} else {
    echo json_encode(["message" => "No results found."]);
}

$mysqli->close();

?>
