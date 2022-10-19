<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
import DeezerBUSCAS from "@/api/buscas";
const deezerBuscas = new DeezerBUSCAS();
export default {
  props: ["search"],
  data() {
    return {
      artistas: [],
      musicas: [],
      albums: [],
      resultados: [],
      first_artist: "",
      limit: 5,
    };
  },
  async created() {
    const resultados = await deezerBuscas.BuscarPorResultado(
      "?q=" + this.search
    );
    this.resultados = resultados.data;

    const artistas = await deezerBuscas.BuscarPorResultado(
      "/artist?q=" + this.search
    );
    this.artistas = artistas.data;
    const musicas = await deezerApi.MusicasBuscas(this.artistas[0].id);
    this.musicas = musicas.data;
  },

  computed: {
    AlbumsLimitados() {
      return this.limit ? this.albums.slice(0, this.limit) : this.albums;
    },
  },
};
</script>

<template>
  <div class="resultado-search">
    <div
      v-for="resultado of resultados"
      :key="resultado.id"
      class="resultado-artista-1st"
    >
      <div class="1st-artista-image">
        <!-- <img :src="`${artistas[0].picture_big}`" /> -->
        {{ resultado.artist.picture }}
      </div>
      <div class="1st-artista-image"></div>
    </div>
  </div>
</template>
<style></style>
