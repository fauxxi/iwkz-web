<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

require __DIR__ . '/app/CalendarService.php';
require __DIR__ . '/app/ConfigHandler.php';

//manage today schedule
$calendarService = new CalendarService();
$configHandler = new ConfigHandler();
$config = $configHandler->readConfig();
$config['SCHEDULE'] = $calendarService->getEventToday();
$configHandler->writeConfig($config);