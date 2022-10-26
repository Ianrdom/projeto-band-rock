<script>
import PlayOutline from "vue-material-design-icons/PlayOutline.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
export default {
  components: { AudioPlayer, PlayOutline, Pause },
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
      displayPlayer: false,
    };
  },
  async created() {
    const artista = await deezerApi.ArtistaBuscas(this.id);
    this.artista = artista;
    const musicas = await deezerApi.MusicasBuscas(this.id);
    this.musicas = musicas.data;
    this.musicas.forEach((m) => (m.isPlaying = false));
    const albums = await deezerApi.AlbumsBuscas(this.id);
    this.albums = albums.data;
  },

  computed: {
    AlbumsLimitados() {
      return this.limit ? this.albums.slice(0, this.limit) : this.albums;
    },
  },
  methods: {
    pausaAudio(musica) {
      if (musica.preview === this.option.src) {
        const player = document.getElementsByClassName("audio__player-play")[0];
        let clickEvent = new Event("click");
        player.dispatchEvent(clickEvent);
      }
      this.musicas.find((m) => m === musica).isPlaying = false;
    },
    iniciaAudio(musica) {
      if (musica.preview === this.option.src) {
        const player = document.getElementsByClassName("audio__player-play")[0];
        let clickEvent = new Event("click");
        player.dispatchEvent(clickEvent);
      }
      this.displayPlayer = true;
      this.musicas.forEach((m) => (m.isPlaying = false));
      this.musicas.find((m) => m === musica).isPlaying = true;
      this.option.src = `${musica.preview}`;
      this.option.title = `${musica.title}`;
      this.option.coverImage = `${musica.album.cover_big}`;
      this.option.progressBarColor = "rgb(167, 3, 3)";
      this.option.indicatorColor = "rgb(167, 3, 3)";
      console.log(musica.isPlaying);
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
        <div class="titulo-secao">Músicas de {{ artista.name }}</div>
        <div class="musicas" v-for="musica of musicas" :key="musica.id">
          <div class="musica-detalhes">
            <Pause
              v-if="musica.isPlaying"
              @click="pausaAudio(musica)"
              :size="25"
            ></Pause>
            <PlayOutline
              v-else
              @click="iniciaAudio(musica)"
              :size="25"
            ></PlayOutline>
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
    <div v-show="displayPlayer" class="audio">
      <AudioPlayer id="audio1" :option="option" />
    </div>
  </div>
</template>
<style></style>
