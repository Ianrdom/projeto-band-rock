// import axios from "axios";
// export default class EditorasApi {
//   async buscarTodasAsEditoras() {
//     const response = await axios.get(
//       "https://livraria-aula-backend.herokuapp.com/Editoras"
//     );
//     return response.data;
//   }

//   async buscarEditora(id) {
//     const response = await axios.get(
//       `https://livraria-aula-backend.herokuapp.com/Editoras/${id}`
//     );
//     return response.data;
//   }

//   async adicionarEditora(editora) {
//     const response = await axios.post(
//       "https://livraria-aula-backend.herokuapp.com/Editoras",
//       editora
//     );
//     return response.data;
//   }

//   async excluirEditora(id) {
//     const response = await axios.delete(
//       `https://livraria-aula-backend.herokuapp.com/Editoras/${id}`
//     );
//     return response.data;
//   }

//   async atualizarEditora(editora) {
//     const response = await axios.put(
//       `https://livraria-aula-backend.herokuapp.com/Editoras/${editora.id}`,
//       editora
//     );
//     return response.data;
//   }
// }
