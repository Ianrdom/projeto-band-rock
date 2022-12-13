<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
import PlayOutline from "vue-material-design-icons/PlayOutline.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import { mapStores, mapActions, mapState } from "pinia";
import { useAudioStore } from "@/stores/audio";

export default {
  components: { PlayOutline, Pause },
  props: ["id"],
  data() {
    return {
      album: [],
      displayPlayer: false,
    };
  },
  async created() {
    const album = await deezerApi.AlbumBuscas(this.id);
    this.album = album;
    const musicas = await deezerApi.Album_MusicasBuscas(this.album.id);
    this.setMusica(musicas.data);
  },
  computed: {
    ...mapStores(useAudioStore),
    ...mapState(useAudioStore, ["option", "musicas"]),
  },
  beforeUnmount() {
    this.clear();
  },
  methods: {
    ...mapActions(useAudioStore, [
      "setOption",
      "setMusica",
      "inicia_icon_musica",
      "pausa_icon_musica",
      "clear",
      "AddMusicasDeAlbumsRecentes",
    ]),
    mostrar_artista(id) {
      this.$router.push(`/artistas/${id}`);
    },
    pausaAudio(musica) {
      if (musica.preview === this.option.src) {
        const player = document.getElementsByClassName("audio__player-play")[0];
        let clickEvent = new Event("click");
        player.dispatchEvent(clickEvent);
      }
      this.pausa_icon_musica(musica);
    },
    iniciaAudio(musica) {
      if (musica.preview === this.option.src) {
        const player = document.getElementsByClassName("audio__player-play")[0];
        let clickEvent = new Event("click");
        player.dispatchEvent(clickEvent);
      }
      this.displayPlayer = true;
      this.inicia_icon_musica(musica);
      const option = {
        src: `${musica.preview}`,
        title: `${musica.title}`,
        coverImage: `${this.album.cover_big}`,
        progressBarColor: "rgb(167, 3, 3)",
        indicatorColor: "rgb(167, 3, 3)",
      };
      this.AddMusicasDeAlbumsRecentes(musica.id);
      this.setOption(option);
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
          <div class="musica-content">
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
              <div
                class="musica-participante"
                @click="mostrar_artista(musica.artist.id)"
              >
                {{ musica.artist.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.musica-participante {
  cursor: pointer;
}
</style>
