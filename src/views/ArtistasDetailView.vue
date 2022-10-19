<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
export default {
  components: { AudioPlayer },
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
      option: {
        src: "",
        title: "your-audio-title",
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
          <div class="musica-detalhes" @click="alteraAudio(musica)">
            <img :src="`${musica.album.cover_big}`" alt="Musica - track" />
            <div class="musica-titulo">
              {{ musica.title }}
            </div>
          </div>
          <div class="musica-audio">
            <!-- <audio controls>
              <source :src="`${musica.preview}`" type="audio/mpeg" />
            </audio> -->
            <!-- <av-circle
              :outline-width="0"
              :progress-width="5"
              :outline-meter-space="5"
              :playtime="true"
              playtime-font="18px Monaco"
              audio-src="`${musica.preview}`"
            ></av-circle> -->
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
