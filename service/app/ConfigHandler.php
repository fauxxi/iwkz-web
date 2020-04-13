<?php

Class ConfigHandler {
    private $configFile = __DIR__ . "/../../config.json";

    public function readConfig() {
        $config = file_get_contents($this->configFile);
        return json_decode($config, true);
    }

    public function writeConfig($config) {
        file_put_contents($this->configFile, json_encode($config, JSON_PRETTY_PRINT));
    }
}