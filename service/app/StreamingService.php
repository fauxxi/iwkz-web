<?php

Class StreamingService {
    private $apiKey = Config::YOUTUBE_API_KEY;
    private $apiUrl = 'https://www.googleapis.com/youtube/v3/search';  
    private $defaultParams = 'part=snippet&eventType=live&maxResults=1&type=video';
    private $zoomClient = 'https://iwkz.de/service/zoom.php';

    public function getYoutubeLiveStreamId($channelId) {
        $curl = curl_init();
        $url = "$this->apiUrl?$this->defaultParams&key=$this->apiKey&channelId=$channelId";

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);
        $data = json_decode($result, true);

        curl_close($curl);

        if(sizeof($data["items"]) > 0) {
            return $data['items'][0]['id']['videoId'];
        }
        return '';
    }

    public function getZoomUrl($id, $pass) {
        $url = "$this->zoomClient?id=$id&pass=$pass";

        return $url;
    }

    public function getIwkzStreaming() {
        return [
            "UCzlY1aUSt8z0c4NKOlDWUdQ" => [
                "type" => "youtube",
                "active" => true,
                "chatBox" => true,
                "streamId" => null,
                "name" => "IWKZ Live",
            ],
        ];
    }

    public function getDefaultStreamings() {
        return [
            "UClIIopOeuwL8KEK0wnFcodw" => [
                "type" => "youtube",
                "active" => true,
                "chatBox" => false,
                "streamId" => null,
                "name" => "Makkah Live",
            ],
            "UC_ANPr8IkWibKlKhmi_-H1g" => [
                "type" => "youtube",
                "active" => true,
                "chatBox" => false,
                "streamId" => null,
                "name" => "Madinah Live",
            ],
        ];
    }
}