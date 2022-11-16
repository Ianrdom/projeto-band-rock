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
    const musicas = await deezerApi.MusicasBuscas(119);
    this.musicas = musicas.data;
    console.log(musicas);
  },
  computed: {
    artistasLimitados() {
      return this.limit ? this.bandas.slice(0, this.limit) : this.object;
    },
  },
  methods: {
    mostrar_album(id) {
      this.$router.push(`/album/${id}`);
    },
    mostrar_artista(id) {
      this.$router.push(`/artistas/${id}`);
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
        <div class="musica-details-daily">
          <div
            class="album-nome-musica"
            @click="mostrar_album(musica.album.id)"
          >
            {{ musica.title }}
          </div>
          <div class="artista-nomes" @click="mostrar_artista(musica.artist.id)">
            {{ musica.artist.name }}
          </div>
        </div>
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
  background-color: rgb(1, 2, 17);
  margin: 10px 0;
}
.musicas-items img {
  max-height: 50px;
  padding: 0 10px;
}
.artistas-items {
  display: flex;
  padding: 10px;
}

.artistas-items img {
  max-height: 60px;
}
.musica-details-daily {
  display: flex;
  flex-direction: column;
}
.musicas-items {
  font-size: 18px;
}
.artista-nomes {
  font-size: 14px;
  cursor: pointer;
  color: gray;
}
.album-nome-musica {
  cursor: pointer;
}
</style>
