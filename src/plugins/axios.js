import axios from "axios";

axios.defaults.baseURL = "https://deezerdevs-deezer.p.rapidapi.com";
axios.interceptors.request.use((config) => {
  config.headers = {
    "X-RapidAPI-Key": "391f5b8295mshe889abbc047fad2p14b212jsnbc36461d249b",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  };
  return config;
});
