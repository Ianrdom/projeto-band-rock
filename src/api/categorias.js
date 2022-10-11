import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livraria-aula-backend.herokuapp.com/Categorias"
    );
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(
      `https://livraria-aula-backend.herokuapp.com/Categorias/${id}`
    );
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post(
      "https://livraria-aula-backend.herokuapp.com/Categorias",
      categoria
    );
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://livraria-aula-backend.herokuapp.com/Categorias/${id}`
    );
    return response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(
      `https://livraria-aula-backend.herokuapp.com/Categorias/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
