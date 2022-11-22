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
      artista: [],
      albums: [],
      limit: 5,
      displayPlayer: false,
    };
  },
  async created() {
    const artista = await deezerApi.ArtistaBuscas(this.id);
    this.artista = artista;
    const musicas = await deezerApi.MusicasBuscas(this.id);
    this.setMusica(musicas.data);
    const albums = await deezerApi.Albums_ArtistaBuscas(this.id);
    this.albums = albums.data;
  },
  computed: {
    ...mapStores(useAudioStore),
    ...mapState(useAudioStore, ["option", "musicas"]),
    AlbumsLimitados() {
      return this.limit ? this.albums.slice(0, this.limit) : this.albums;
    },
  },
  methods: {
    ...mapActions(useAudioStore, [
      "setOption",
      "setMusica",
      "inicia_icon_musica",
      "pausa_icon_musica",
    ]),
    mostrar(id) {
      this.$router.push(`/album/${id}`);
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
        coverImage: `${musica.album.cover_big}`,
        progressBarColor: "rgb(167, 3, 3)",
        indicatorColor: "rgb(167, 3, 3)",
      };
      this.setOption(option);
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
            <div class="albums-titulo" @click="mostrar(album.id)">
              {{ album.title }}
            </div>
          </div>
        </div>
        <button @click="this.limit = null">Mostrar Mais</button>
        <button @click="this.limit = 5">Mostrar Menos</button>
      </div>
    </div>
  </div>
</template>
