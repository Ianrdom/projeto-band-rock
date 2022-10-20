<script>
import PlayCircleOutline from "vue-material-design-icons/PlayCircleOutline.vue";
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
export default {
  components: { AudioPlayer, PlayCircleOutline },
  props: ["id"],
  data() {
    return {
      artista: [],
      musicas: [],
      albums: [],
      limit: 5,
      option: {
        src: "",
        title: "",
        coverImage: "",
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
  methods: {
    alteraAudio(musica) {
      this.option.src = `${musica.preview}`;
      this.option.title = `${musica.title} - ${musica.artist.name}`;
      this.option.coverImage = `${musica.album.cover_big}`;
      this.option.progressBarColor = "rgb(255, 0, 0)";
      this.option.indicatorColor = "rgb(255,0,0)";
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
          <div class="musica-detalhes">
            <PlayCircleOutline
              @click="alteraAudio(musica)"
              :size="38"
            ></PlayCircleOutline>
            <img :src="`${musica.album.cover_big}`" alt="Musica - track" />
            <div class="musica-titulo">
              {{ musica.title }}
            </div>
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
      <AudioPlayer :option="option" />
    </div>
  </div>
</template>
<style></style>
