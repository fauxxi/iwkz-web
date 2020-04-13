<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');

require __DIR__ . '/app/CalendarService.php';

$calendarService = new CalendarService();
var_dump($calendarService->getEventToday());