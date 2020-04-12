import axios from "axios";

let config;

const loadConfiguration = async () => {
  if (config) {
    return config;
  }

  const response = await axios.get("/config.json");
  config = response.data;

  return config;
};

export default loadConfiguration;
