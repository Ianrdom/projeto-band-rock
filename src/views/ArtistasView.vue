<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
export default {
  data() {
    return {
      bandas: [],
      image: "src/assets/random_metallica_img.jpg",
    };
  },
  async created() {
    const bandas = await deezerApi.GeneroBuscas();
    this.bandas = bandas.data;
  },
  computed: {
    fundo() {
      return { "background-image": "url(" + this.image + ")" };
    },
  },
};
</script>

<template>
  <div class="artistas">
    <div class="card" v-for="banda of bandas" :key="banda.id">
      <div class="card-image" :style="fundo"></div>
      <div class="card-text">
        <h2>{{ banda.name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.artistas {
  display: flex;
  flex-wrap: wrap;
}
</style>
