import axios from "axios";

export default class TesteAPI {
  async testeBucas() {
    // const url = "https://deezerdevs-deezer.p.rapidapi.com/artist/119";
    // const headers = {
    //   "X-RapidAPI-Key": "391f5b8295mshe889abbc047fad2p14b212jsnbc36461d249b",
    //   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    // };
    try {
      const { data } = await axios.get("/artist/119");
      console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
}
