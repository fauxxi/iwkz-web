<?php

require __DIR__ . './StreamingService.php';

Class StreamingController {
    const MIN_DIFF_LAST_UPDATE_DEFAULT_STREAM = 5;
    private $config;
    private $streamingService;

    public function __construct() {
        $this->streamingService = new StreamingService();
        $configHandler = new ConfigHandler();
        $this->config = $configHandler->readConfig();
    }

    public function getDefaultIwkzStream() {
        return $this->streamingService->getIwkzStreaming();
    }

    public function getDefaultStreamings() {
        $configData = $this->config[Enum::STREAMING_CHANNELS];
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

    public function getStartedEvent() {
        $currentTime = new Datetime("now");
        $startedEvent = [];

        foreach($this->config[Enum::SCHEDULE] as $index => $val) {
            $startTime = new DateTime($val['startTime']);
            $endTime = new DateTime($val['endTime']); 

            if ($currentTime >= $startTime && $currentTime <= $endTime) {
                array_push($startedEvent, $this->addMoreStreamInfo($this->config[Enum::SCHEDULE][$index]));
            }
        }

        return $startedEvent;
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
            $stream = $this->streamingService->getZoomUrl();

            $startedEvent['streamId'] = $stream;
        }

        return $startedEvent;
    }
}