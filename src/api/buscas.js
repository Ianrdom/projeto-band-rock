import axios from "axios";

export default class DeezerBuscas {
  async BuscarPorResultado(search) {
    try {
      const { data } = await axios.get(`/search${search}`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async BuscarArtista(search) {
    try {
      const { data } = await axios.get(`/search/artist${search}`);
      // console.log(data);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
}
