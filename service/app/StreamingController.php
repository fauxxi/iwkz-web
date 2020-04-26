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

        $configStreamingChannels = array_merge($tmp, $newConfigs);
        if($this->isAnyChangesOnStreamChannels($configStreamingChannels)) {
            $config[Enum::STREAMING_CHANNELS] = $configStreamingChannels;
            $this->configHandler->writeConfig($config);
        }
    }

    private function isAnyChangesOnStreamChannels($newConfig) {
        $config = $this->configHandler->readConfig();
        $oldConfig = $config[Enum::STREAMING_CHANNELS];

        if(sizeof($newConfig) !== sizeof($oldConfig)) {
            return true;
        }

        $keys = array_keys($newConfig);
        $isNeedUpdate = false;
        foreach($keys as $key) {
            if(array_key_exists('lastUpdate', $newConfig[$key])) {
                if($oldConfig[$key]['lastUpdate'] !== $newConfig[$key]['lastUpdate']) {
                    $isNeedUpdate = true;
                    break;
                }
            }

            if($oldConfig[$key]['streamId'] !== $newConfig[$key]['streamId']) {
                $isNeedUpdate = true;
                break;
            }
        }

        return $isNeedUpdate;
    }

    private function getDefaultStreamings() {
        $config = $this->configHandler->readConfig();
        $configData = $config[Enum::STREAMING_CHANNELS];
        $data = $this->streamingService->getDefaultStreamings();
        $currentTime = new Datetime("now");

        foreach($data as $key=>$val) {
            $lastUpdateExistingStream = array_key_exists('lastUpdate', $configData[$key]) ? $configData[$key]['lastUpdate'] : '00:00';
            $lastUpdateTime = new DateTime($lastUpdateExistingStream);

            $timeDiff = $currentTime->diff($lastUpdateTime);
            $hoursDiff = $timeDiff->h;
            $hoursDiff = $hoursDiff + ($timeDiff->days*24);

            if ($hoursDiff > self::MIN_DIFF_LAST_UPDATE_DEFAULT_STREAM || empty($data[$key]["streamId"])) {
                $streamId = $this->streamingService->getYoutubeLiveStreamId($key);

                $data[$key]["lastUpdate"] = date('H:i', time());
                $data[$key]["streamId"] = $streamId;
            } else {
                $data[$key]["lastUpdate"] = $configData[$key]["lastUpdate"];
                $data[$key]["streamId"] = $configData[$key]["streamId"];
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

        if ($existingEvent["type"] === 'youtube' && !$existingEvent["streamId"]) {
            $existingEvent["streamId"] = $this->streamingService->getYoutubeLiveStreamId($startedEvent['id']);
        }

        return $existingEvent;
    }

    private function addMoreStreamInfo($startedEvent) {
        $startedEvent['active'] = true;
        $startedEvent['chatBox'] = false;
        $startedEvent['streamId'] = null;

        if ($startedEvent['type'] === 'youtube') {
            $streamId = $this->streamingService->getYoutubeLiveStreamId($startedEvent['id']);

            $startedEvent['streamId'] = $streamId;
            $startedEvent['chatBox'] = $streamId ? true : false;
        }

        if ($startedEvent['type'] === 'zoom') {
            $stream = $this->streamingService->getZoomUrl($startedEvent['id'], $startedEvent['password']);

            $startedEvent['streamId'] = $stream;
        }

        return $startedEvent;
    }
}