// import axios from "axios";
// export default class AutoresApi {
//   async buscarTodosOsAutores() {
//     const response = await axios.get(
//       "https://livraria-aula-backend.herokuapp.com/Autores"
//     );
//     return response.data;
//   }

//   async buscarAutor(id) {
//     const response = await axios.get(
//       `https://livraria-aula-backend.herokuapp.com/Autores/${id}`
//     );
//     return response.data;
//   }

//   async adicionarAutor(autor) {
//     const response = await axios.post(
//       "https://livraria-aula-backend.herokuapp.com/Autores",
//       autor
//     );
//     return response.data;
//   }

//   async excluirAutor(id) {
//     const response = await axios.delete(
//       `https://livraria-aula-backend.herokuapp.com/Autores/${id}`
//     );
//     return response.data;
//   }

//   async atualizarAutor(autor) {
//     const response = await axios.put(
//       `https://livraria-aula-backend.herokuapp.com/Autores/${autor.id}`,
//       autor
//     );
//     return response.data;
//   }
// }
