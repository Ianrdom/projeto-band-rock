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
          <div class="musica-detalhes">
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
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Metal+Mania&family=Signika:wght@500&display=swap");
.artista-header {
  background-color: rgba(0, 0, 0, 0.493);
  display: flex;
  min-height: 20vh;
  align-items: center;
  border-bottom: 1px solid #0502028f;
}
.artista-header img {
  max-height: 19vh;
  padding: 0 3vh;
}
.artista-titulo {
  font-weight: bold;
  font-size: 12vh;
  font-family: "Signika";
}
.musicas {
  display: flex;
  width: 90%;
  margin: 10px 0;
  padding: 15px;
  justify-content: space-between;
  background-color: rgb(1, 2, 17);
}
.musica-detalhes img {
  max-height: 40px;
  padding-right: 5px;
}
.albums-detalhes img {
  max-height: 40px;
  padding-right: 5px;
}

.albums-detalhes {
  display: flex;
  justify-content: center;
  align-items: center;
}
.musica-detalhes {
  display: flex;
  justify-content: center;
  align-items: center;
}
.musica-titulo {
  font-family: "Signika";
  font-size: 1rem;
}
audio {
  width: 1000px;
  height: 100%;
}
.titulo-secao {
  font-family: "Signika";
  font-size: 5vh;
}
.artista-conteudo {
  background-color: #00002cf5;
}
.albums {
  display: flex;
  width: 90%;
  margin: 10px 0;
  padding: 15px;
  justify-content: space-between;
  background-color: rgb(1, 2, 17);
}
button {
  padding: 10px;
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.87);
  margin: 0 5px;
}
</style>
