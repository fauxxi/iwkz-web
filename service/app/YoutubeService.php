<?php

Class YoutubeService {
    private $apiKey = 'AIzaSyAB2KQDFinWt_eyJrcFfi3vFbAPkUsVxM8';
    private $apiUrl = 'https://www.googleapis.com/youtube/v3/search';  
    private $defaultParams = 'part=snippet&eventType=live&maxResults=1&type=video';

    public function getLiveStreamId($channelId) {
        $url = "$this->apiUrl?$this->defaultParams&key=$this->apiKey&channelId=$channelId";

        $data = file_get_contents($url);
        $data = json_decode($data, true);

        if(sizeof($data["items"]) > 0) {
            return $data['items'][0]['id']['videoId'];
        }
        
        return '';
    }
}