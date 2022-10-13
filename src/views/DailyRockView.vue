<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
export default {
  data() {
    return {
      bandas: [],
      musicas: [],
      albums: [],
      limit: 5,
    };
  },
  async created() {
    const bandas = await deezerApi.GeneroBuscas();
    this.bandas = bandas.data;
    const musicas = await deezerApi.MusicaBuscas(117);
    this.musicas = musicas.data;
    console.log(musicas);
  },
  computed: {
    artistasLimitados() {
      return this.limit ? this.bandas.slice(0, this.limit) : this.object;
    },
  },
};
</script>

<template>
  <div class="daily-filtro">
    <div class="daily-items">
      <h1>Música que você pode gostar</h1>
      <div class="musicas-items" v-for="musica of musicas" :key="musica.id">
        <img :src="`${musica.album.cover}`" />
        <div>{{ musica.title }}</div>
      </div>
    </div>
    <div class="daily-items">
      <h1>Sugestões de Artistas Novos</h1>
      <div
        class="artistas-items"
        v-for="banda of artistasLimitados"
        :key="banda.id"
      >
        <img :src="`${banda.picture}`" />
        <div>{{ banda.name }}</div>
      </div>
    </div>
    <div class="daily-items">
      <h1>Albúms novos</h1>
      <div>Texto 3</div>
    </div>
  </div>
</template>
<style scoped>
.musicas-items {
  display: flex;
  padding: 10px;
}
.musicas-items img {
  max-height: 40px;
}
.artistas-items {
  display: flex;
  padding: 10px;
}

.artistas-items img {
  max-height: 60px;
}
</style>
