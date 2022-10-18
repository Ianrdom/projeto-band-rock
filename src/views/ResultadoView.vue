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
      resultado: [],
      limit: 5,
    };
  },
  async created() {
    const resultado = await deezerBuscas.BuscarPorResultado(this.search);
    this.resultado = resultado;
    const artistas = await deezerBuscas.BuscarPorResultado(
      "/artist?q=" + this.search
    );
    this.artistas = artistas;
    const musicas = await deezerApi.MusicasBuscas(this.artista[0].id);
    this.musicas = musicas;
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
    <div class="resultado-artista-1st">
      <div class="1st-artista-image">
        <!-- <img :src="`${artistas[0].picture_big}`" alt="" /> -->
      </div>
      <div class="1st-artista-image"></div>
    </div>
  </div>
</template>
<style></style>
