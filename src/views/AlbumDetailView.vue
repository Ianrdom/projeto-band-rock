<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
import PlayOutline from "vue-material-design-icons/PlayOutline.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
export default {
  components: { AudioPlayer, PlayOutline, Pause },
  props: ["id"],
  data() {
    return {
      album: [],
      musicas: [],
      option: {
        src: "",
        title: "",
        coverImage: "",
      },
      displayPlayer: false,
    };
  },
  async created() {
    const album = await deezerApi.AlbumBuscas(this.id);
    this.album = album;
    const musicas = await deezerApi.Album_MusicasBuscas(this.album.id);
    this.musicas = musicas.data;
  },
  methods: {
    mostrar(id) {
      this.$router.push(`/album/${id}`);
    },
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
      this.option.coverImage = `${this.album.cover_big}`;
      this.option.progressBarColor = "rgb(167, 3, 3)";
      this.option.indicatorColor = "rgb(167, 3, 3)";
      console.log(musica.isPlaying);
    },
  },
};
</script>

<template>
  <div class="album-container">
    <div class="album-header">
      <img :src="`${album.cover_big}`" />
      <div class="album-titulo">{{ album.title }}</div>
    </div>
    <div class="album-conteudo">
      <div class="album-musicas">
        <div class="titulo-secao">Músicas de {{ album.title }}</div>
        <div class="musicas" v-for="musica of musicas" :key="musica.id">
          <div class="musica-container">
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
            <img :src="`${album.cover_big}`" alt="Musica - track" />
            <div class="musica-detalhes">
              <div class="musica-titulo">
                {{ musica.title }}
              </div>
              <div class="musica-participante">{{ musica.artist.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="displayPlayer" class="audio">
      <AudioPlayer id="audio1" :option="option" />
    </div>
  </div>
</template>
