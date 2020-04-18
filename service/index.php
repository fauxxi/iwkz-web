<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

date_default_timezone_set("Europe/Berlin");

require __DIR__ . '/app/CalendarService.php';
require __DIR__ . '/app/ConfigHandler.php';
require __DIR__ . '/app/Enum.php';
require __DIR__ . '/app/StreamingController.php';

$calendarService = new CalendarService();
$configHandler = new ConfigHandler();
$streamController = new StreamingController();

//TODO: get stream id if the streaming is started and update to streaming channels
if(isset($_GET['update']) || $argv[1] === 'update') {
    $config = $configHandler->readConfig();
    $startedEvents = $streamController->getStartedEvent();
    $defaultKey = $config[Enum::DEFAULT_STREAMING_KEY];
    $newConfigs = $streamController->getDefaultStreamings();

    $tmp = [];
    for($i=0; $i<count($startedEvents); $i++) {
        if ($i == 0) {
            $tmp[$defaultKey] = $startedEvents[$i];
        } else {
            $tmp[$i] = $startedEvents[$i];
        }
    }

    if(count($tmp) === 0) {
        $tmp = $streamController->getDefaultIwkzStream();
    }

    $config[Enum::STREAMING_CHANNELS] = array_merge($tmp, $newConfigs);
    $configHandler->writeConfig($config);
}

//manage today schedule
if(sizeof($argv) > 1 && $argv[1] === 'schedule') {
    $config = $configHandler->readConfig();
    $config[Enum::SCHEDULE] = $calendarService->getEventToday();
    $configHandler->writeConfig($config);

    echo "update done";
    return;
}

echo "ok";