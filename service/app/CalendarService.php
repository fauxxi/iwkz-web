<?php

require __DIR__ . '/ICSReader.php';

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
            $isDailyEvent = $this->isDailyEventAndValid($this->events[$i]);
            $isWeeklyEvent = $this->isWeeklyEventAndValid($this->events[$i]);

            if($isDailyEvent || $isWeeklyEvent || strpos($dateStart, $today) !== false) {
                array_push($todayEvents, $this->getEventDetails($this->events[$i]));
            }
        }

        return $todayEvents;
    }

    private function isWeeklyEventAndValid($event) {
        $days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
        if (array_key_exists('RRULE', $event) && $event['RRULE']['FREQ'] === 'WEEKLY') {
            $lastEvent = new DateTime($event['RRULE']['UNTIL']);
            $today = new DateTime('now');
            $dayN = date('N', time()) - 1;

            return $today <= $lastEvent && strpos($event['RRULE']['BYDAY'], $days[$dayN]) !== false;
        } 

        return false;
    }

    private function isDailyEventAndValid($event) {
        if (array_key_exists('RRULE', $event) && $event['RRULE']['FREQ'] === 'DAILY') {
            $lastEvent = new DateTime($event['RRULE']['UNTIL']);
            $today = new DateTime('now');

            return $today <= $lastEvent;
        } 

        return false;
    }

    private function getEventDetails($data) {
        $start = $this->fixTime($data['DTSTART']);
        $end = $this->fixTime($data['DTEND']);
        $title = $data['SUMMARY'];
        $streamType = $data['LOCATION'];
        $streamTarget = $data['DESCRIPTION'];
        if (is_array($streamTarget)) {
            $streamTarget = implode($streamTarget);
        }

        return array_merge([
            "key" => md5("$title.$start.$end"),
            "date" => date('d.m.Y', time()),
            "name" => $title,
            "type" => $streamType,
            "startTime" => $start,
            "endTime" => $end,
        ], $this->extractStreamInfo($streamTarget));
    }

    private function fixTime($dateTime) {
        $needFix = true;
        if(is_array($dateTime)) {
            if($dateTime["TZID"] === "Europe/Berlin") {
                $needFix = false;
            }    
            $dateTime = $dateTime["value"];
        }

        $tmp = explode('T', $dateTime);
        $tmp = explode('00Z', $tmp[1]);
        $time = $tmp[0];

        $hour = $needFix ? ((int)substr($time, 0, 2)) + 2 : substr($time, 0, 2);
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
        $tmp = explode("#", trim($tmp[1]));
        $tmp = trim($tmp[0]);
        if (strpos($tmp, "<br>") !== false) {
            $tmp = explode("<br>", $tmp);
            $tmp = $tmp[0];
        }
        $infos["id"] = $tmp;

        //getting url
        if (strpos($info, "url") !== false) {
            $tmp = explode('"https://', $info);
            $tmp = explode('"', $tmp[1]);
            $tmp = $tmp[0];
            $infos["url"] = "https://$tmp";
        }

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