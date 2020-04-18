<?php

require __DIR__ . './ICSReader.php';

Class CalendarService {
    private $events;

    public function __construct() {
        $icsReader = new ICSReader();
        $data = $icsReader->load(file_get_contents('https://calendar.google.com/calendar/ical/admin%40iwkz.de/public/basic.ics'));
        $this->events = $data['VEVENT'];
    }

    public function getEventToday() {
        $today = date('Ymd', time());
        $todayEvents = [];

        for($i = 0; $i < sizeof($this->events); $i++) {
            $dateStart = $this->events[$i]['DTSTART'];

            if(strpos($dateStart, $today) !== false) {
                array_push($todayEvents, $this->getEventDetails($this->events[$i]));
            }
        }

        return $todayEvents;
    }

    private function getEventDetails($data) {
        $start = $data['DTSTART'];
        $end = $data['DTEND'];
        $title = $data['SUMMARY'];
        $streamType = $data['LOCATION'];
        $streamTarget = $data['DESCRIPTION'];
        if (is_array($streamTarget)) {
            $streamTarget = implode($streamTarget);
        }

        return array_merge([
            "date" => date('d.m.Y', time()),
            "name" => $title,
            "type" => $streamType,
            "startTime" => $this->fixTime($start),
            "endTime" => $this->fixTime($end),
        ], $this->extractStreamInfo($streamTarget));
    }

    private function fixTime($dateTime) {
        $tmp = explode('T', $dateTime);
        $tmp = explode('00Z', $tmp[1]);
        $time = $tmp[0];

        $hour = ((int)substr($time, 0, 2)) + 2;
        $minute = substr($time, -2);

        return $hour.':'.$minute;
    }

    private function extractStreamInfo($info) {
        $infos = [
            "id" => '',
            "url" => '',
            "password" => '',
        ];

        //getting id
        $tmp = explode("id:", $info);
        $tmp = explode("-", trim($tmp[1]));
        $tmp = trim($tmp[0]);
        if (strpos($tmp, "<br>") !== false) {
            $tmp = explode("<br>", $tmp);
            $tmp = $tmp[0];
        }
        $infos["id"] = $tmp;

        //getting url
        $tmp = explode('"https://', $info);
        $tmp = explode('"', $tmp[1]);
        $tmp = $tmp[0];
        $infos["url"] = $tmp;

        //getting password
        if (strpos($info, "pass") !== false) {
            $tmp = explode("pass:", $info);
            $tmp = trim($tmp[1]);
            if (strpos($tmp, "<br>") !== false) {
                $tmp = explode("<br>", $tmp);
                $tmp = $tmp[0];
            }
            $infos["password"] = $tmp;
        }

        return $infos;
    }
}