<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

date_default_timezone_set("Europe/Berlin");

require __DIR__ . '/app/Enum.php';
require __DIR__ . '/app/StreamingController.php';

$streamController = new StreamingController();

if(isset($_GET['update']) || $argv[1] === 'update') {
    $streamController->updateStreamingChannels();
    echo json_encode(["updateChannel" => true]);
    return;
}

if($argv[1] === 'schedule' || (isset($_GET['schedule']) &&  $_GET['schedule'] === '1WK2!!!')) {
    $streamController->updateTodaySchedule();
    echo json_encode(["updateSchedule" => true]);
    return;
}

echo "OK";