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
  async ArtistaBuscas(id) {
    try {
      const { data } = await axios.get(`/artist/${id}`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async Albums_ArtistaBuscas(id) {
    try {
      const { data } = await axios.get(`/artist/${id}/albums`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async MusicasBuscas(id) {
    try {
      const { data } = await axios.get(`/artist/${id}/top`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async AlbumBuscas(id) {
    try {
      const { data } = await axios.get(`/album/${id}`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async Album_MusicasBuscas(id) {
    try {
      const { data } = await axios.get(`/album/${id}/tracks`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
}
