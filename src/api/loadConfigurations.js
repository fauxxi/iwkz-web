import axios from "axios";

let config;

const loadConfiguration = async () => {
  const response = await axios.get("/config.json");
  config = response.data;

  return config;
};

export default loadConfiguration;
