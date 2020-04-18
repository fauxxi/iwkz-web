<?php

require __DIR__ . '/ConfigHandler.php';
require __DIR__ . '/StreamingService.php';
require __DIR__ . '/CalendarService.php';

Class StreamingController {
    const MIN_DIFF_LAST_UPDATE_DEFAULT_STREAM = 5;
    private $streamingService;
    private $configHandler;

    public function __construct() {
        $this->streamingService = new StreamingService();
        $this->configHandler = new ConfigHandler();
    }

    public function updateTodaySchedule() {
        $calendarService = new CalendarService();
        $config = $this->configHandler->readConfig();

        $config[Enum::SCHEDULE] = $calendarService->getEventToday();
        $this->configHandler->writeConfig($config);
    }

    public function updateStreamingChannels() {
        $config = $this->configHandler->readConfig();
        $defaultKey = $config[Enum::DEFAULT_STREAMING_KEY];
        $startedEvents = $this->getStartedEvent();
        $newConfigs = $this->getDefaultStreamings();

        $tmp = [];
        for($i=0; $i<count($startedEvents); $i++) {
            if ($i == 0) {
                $tmp[$defaultKey] = $startedEvents[$i];
            } else {
                $tmp[$i] = $startedEvents[$i];
            }
        }

        if(count($tmp) === 0) {
            $tmp = $this->streamingService->getIwkzStreaming();
        }

        $config[Enum::STREAMING_CHANNELS] = array_merge($tmp, $newConfigs);
        $this->configHandler->writeConfig($config);
    }

    private function getDefaultStreamings() {
        $config = $this->configHandler->readConfig();
        $configData = $config[Enum::STREAMING_CHANNELS];
        $data = $this->streamingService->getDefaultStreamings();
        $currentTime = new Datetime("now");

        foreach($data as $key=>$val) {
            $data[$key] = $configData[$key];
            $lastUpdateTime = new DateTime($configData[$key]['lastUpdate']);

            $timeDiff = $currentTime->diff($lastUpdateTime);
            $hoursDiff = $timeDiff->h;
            $hoursDiff = $hoursDiff + ($timeDiff->days*24);

            if ($hoursDiff > self::MIN_DIFF_LAST_UPDATE_DEFAULT_STREAM) {
                $streamId = $this->streamingService->getYoutubeLiveStreamId($key);

                $data[$key]["lastUpdate"] = date('H:i', time());
                $data[$key]["streamId"] = $streamId;
            }
        }

        return $data;
    }

    private function getStartedEvent() {
        $config = $this->configHandler->readConfig();
        $existingChannels = $config[Enum::STREAMING_CHANNELS];
        $currentTime = new Datetime("now");
        $startedEvent = [];

        $keysOfExistingChannels = array_values(array_map(function($val) {
            if(array_key_exists("key", $val)) {
                return $val["key"];
            } 
            return "-";
        }, $existingChannels));

        foreach($config[Enum::SCHEDULE] as $index => $val) {
            $startTime = new DateTime($val['startTime']);
            $endTime = new DateTime($val['endTime']); 

            if ($currentTime >= $startTime && $currentTime <= $endTime) {
                $isStreamInfoExist = in_array ($val["key"], $keysOfExistingChannels);
                array_push(
                    $startedEvent, 
                    $isStreamInfoExist
                        ? $this->getExistingStreamInfo($config[Enum::SCHEDULE][$index])
                        : $this->addMoreStreamInfo($config[Enum::SCHEDULE][$index])
                );
            }
        }

        return $startedEvent;
    }

    private function getExistingStreamInfo($startedEvent) {
        $config = $this->configHandler->readConfig();
        $existingChannels = $config[Enum::STREAMING_CHANNELS];
        $key = $startedEvent["key"];
        $existingEvent = $startedEvent;

        foreach($existingChannels as $val) {
            if (array_key_exists("key", $val) && $val["key"] === $key) {
                $existingEvent = $val;
            }
        }

        return $existingEvent;
    }

    private function addMoreStreamInfo($startedEvent) {
        $startedEvent['active'] = true;
        $startedEvent['chatBox'] = true;
        $startedEvent['streamId'] = null;

        if ($startedEvent['type'] === 'youtube') {
            $streamId = $this->streamingService->getYoutubeLiveStreamId($startedEvent['id']);

            $startedEvent['streamId'] = $streamId;
        }

        if ($startedEvent['type'] === 'zoom') {
            $stream = $this->streamingService->getZoomUrl($startedEvent['id'], $startedEvent['password']);

            $startedEvent['streamId'] = $stream;
        }

        return $startedEvent;
    }
}