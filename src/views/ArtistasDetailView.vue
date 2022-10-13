<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
export default {
  props: ["id"],
  data() {
    return {
      artista: [],
    };
  },
  async created() {
    const artista = await deezerApi.ArtistaBuscas();
    this.artista = artista;
    console.log(artista);
  },
};
</script>

<template>
  <div class="artista-profile">
    <div class="header-artista">
      <img :src="`${artista.picture_big}`" />
      <div>{{ artista.name }}</div>
    </div>
  </div>
</template>
<style>
.header-artista {
  background-color: black;
  display: flex;
}
.header-artista img {
  max-height: 100px;
}
</style>
