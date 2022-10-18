<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
export default {
  props: ["id"],
  data() {
    return {
      artista: [],
      musicas: [],
      albums: [],
      limit: 5,
      currentAudio: {
        title: "ggggggg",
      },
    };
  },
  async created() {
    const artista = await deezerApi.ArtistaBuscas(this.id);
    this.artista = artista;
    const musicas = await deezerApi.MusicasBuscas(this.id);
    this.musicas = musicas.data;
    const albums = await deezerApi.AlbumsBuscas(this.id);
    this.albums = albums.data;
  },

  computed: {
    AlbumsLimitados() {
      return this.limit ? this.albums.slice(0, this.limit) : this.albums;
    },
  },
};
</script>

<template>
  <div class="artista-profile">
    <div class="artista-header">
      <img :src="`${artista.picture_big}`" />
      <div class="artista-titulo">{{ artista.name }}</div>
    </div>
    <div class="artista-conteudo">
      <div class="artista-musicas">
        <div class="titulo-secao">Musícas de {{ artista.name }}</div>
        <div class="musicas" v-for="musica of musicas" :key="musica.id">
          <div class="musica-detalhes" @click="currentAudio = musica">
            <img :src="`${musica.album.cover_big}`" alt="Musica - track" />
            <div class="musica-titulo">
              {{ musica.title }}
            </div>
          </div>
          <div class="musica-audio">
            <audio controls>
              <source :src="`${musica.preview}`" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
      <div class="artista-albums">
        <div class="titulo-secao">Albums de {{ artista.name }}</div>
        <div class="albums" v-for="album of AlbumsLimitados" :key="album.id">
          <div class="albums-detalhes">
            <img :src="`${album.cover_big}`" alt="Album - Imagem" />
            <div class="album-titulo">
              {{ album.title }}
            </div>
          </div>
        </div>
        <button @click="this.limit = null">Mostrar Mais</button>
        <button @click="this.limit = 5">Mostrar Menos</button>
      </div>
    </div>
    <div class="audio">
      <!-- {{ currentAudio.title }} -->
    </div>
  </div>
</template>
<style>
.audio {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 1000;
  top: 90vh;
  background-color: #f00;
}
</style>
