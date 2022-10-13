import axios from "axios";

export default class DeezerAPI {
  async GeneroBuscas() {
    try {
      const { data } = await axios.get("/genre/464/artists");
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async ArtistaBuscas() {
    try {
      const { data } = await axios.get("/artist/117");
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async AlbumsBuscas(id) {
    try {
      const { data } = await axios.get(`/artist/${id}/albums`);
      console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async MusicaBuscas(id) {
    try {
      const { data } = await axios.get(`/artist/${id}/top`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
}
