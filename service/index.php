<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

require __DIR__ . '/app/CalendarService.php';
require __DIR__ . '/app/ConfigHandler.php';
require __DIR__ . '/app/YoutubeService.php';

const SCHEDULE = 'SCHEDULE';
const STREAMING_CHANNELS = 'STREAMING_CHANNELS';
const DEFAULT_STREAMING_KEY = 'DEFAULT_STREAMING_KEY';

$calendarService = new CalendarService();
$configHandler = new ConfigHandler();

//TODO: get stream id if the streaming is started and update to streaming channels
if(isset($_GET['update']) || $argv[1] === 'update') {
    $youtubeService = new YoutubeService();
    $config = $configHandler->readConfig();
    $youtubeService->getLiveStreamId("UCos52azQNBgW63_9uDJoPDA");

    $currentHour = date("H", time());
    $nextTwoHour = $currentHour + 2;
    $startetEvent = [];

    foreach($config[SCHEDULE] as $val) {
        $startTimeHour = explode(':', $val['startTime'])[0];

        if ($startTimeHour >= $currentHour && $startTimeHour <= $nextTwoHour) {
            $startetEvent = $val;
            break;
        }
    }

    var_dump($startetEvent);
}

//manage today schedule
if(sizeof($argv) > 1 && $argv[1] === 'schedule') {
    $config = $configHandler->readConfig();
    $config[SCHEDULE] = $calendarService->getEventToday();
    $configHandler->writeConfig($config);

    echo "update done";
    return;
}

echo "ok";