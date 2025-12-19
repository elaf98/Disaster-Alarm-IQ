<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "thm";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT title,type,pos FROM cities";
$result = $conn->query($sql);

$disasters = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $disasters[] = $row;
    }
}

echo json_encode($disasters);
$conn->close();
?>