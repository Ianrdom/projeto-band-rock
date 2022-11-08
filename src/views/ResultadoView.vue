<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
import DeezerBUSCAS from "@/api/buscas";
const deezerBuscas = new DeezerBUSCAS();
export default {
  props: ["search"],
  data() {
    return {
      musicas: [],
      resultados: [],
      first_artist: [],
    };
  },
  async created() {
    const resultados = await deezerBuscas.BuscarArtista("?q=" + this.search);
    this.resultados = resultados.data;
    this.first_artist = this.resultados.shift();
    console.log(this.first_artist);
    const musicas = await deezerApi.MusicasBuscas(this.first_artist.id);
    this.musicas = musicas.data;
  },

  methods: {
    mostrar_artista(id) {
      this.$router.push(`/artistas/${id}`);
    },
  },
};
</script>

<template>
  <div class="resultado-search">
    <div class="first-artista-container">
      <div class="first-artista-details">
        <div class="first-artista-image">
          <img :src="`${first_artist.picture_medium}`" />
        </div>
        <div
          class="first-artista-name"
          @click="mostrar_artista(this.first_artist.id)"
        >
          <p>{{ first_artist.name }}</p>
        </div>
      </div>
      <div class="first-artista-musicas">
        <div
          class="first-artista-musica"
          v-for="musica of musicas"
          :key="musica.id"
        >
          <div class="first-artista-musica-image">
            <img :src="`${musica.album.cover_small}`" />
          </div>
          <div class="first-artista-musica-conteudo">
            {{ musica.title }}
          </div>
        </div>
      </div>
    </div>

    <div class="outros-resultados-container">
      <div class="titulo-secao2">Outros Resultados</div>
      <div class="outros-resultados">
        <div
          class="artista-resultado"
          v-for="artista of resultados"
          :key="artista.id"
        >
          <div class="artista-detalhes">
            <img :src="`${artista.picture}`" alt="Artista - Resultado" />
            <div
              class="artista-resultado-titulo"
              @click="mostrar_artista(artista.id)"
            >
              {{ artista.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
