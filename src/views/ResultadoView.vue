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
      albums: [],
      resultados: [],
      first_artist: "",
      limit: 5,
    };
  },
  async created() {
    const resultados = await deezerBuscas.BuscarArtista("?q=" + this.search);
    this.resultados = resultados.data;
    this.first_artist = this.resultados[0];
    console.log(this.first_artist);
    const musicas = await deezerApi.MusicasBuscas(this.first_artist.id);
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
    <div class="first-artista-container">
      <div class="first-artista-details">
        <div class="first-artista-image">
          <img :src="`${first_artist.picture_medium}`" />
        </div>
        <div class="first-artista-name">
          <p>{{ first_artist.name }}</p>
        </div>
      </div>
      <div class="first-artista-musicas">
        <div
          class="first-artista-musica"
          v-for="musica of musicas"
          :key="musica.id"
        >
          <div class="first-artist-musica-image">
            <img :src="`${musica.album.cover_small}`" />
          </div>
          <div class="first-artist-musica-conteudo">
            {{ musica.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
