<script>
import DeezerAPI from "@/api/request";
const deezerApi = new DeezerAPI();
export default {
  data() {
    return {
      bandas: [],
    };
  },
  async created() {
    const bandas = await deezerApi.GeneroBuscas();
    this.bandas = bandas.data;
  },
  methods: {
    mostrar(id) {
      this.$router.push(`/artistas/${id}`);
    },
  },
};
</script>

<template>
  <div class="artistas">
    <div
      class="artista"
      v-for="banda of bandas"
      :key="banda.id"
      @click="mostrar(banda.id)"
    >
      <div class="artista_imagem">
        <img :src="`${banda.picture_big}`" />
      </div>
      <div class="artista_titulo">
        <p>{{ banda.name }}</p>
      </div>
    </div>
  </div>
</template>
