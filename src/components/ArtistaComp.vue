<script>
export default {
  data() {
    return {
      bandas: [
        {
          id: 1,
          nome: " Metallica",
          albuns: 10,
        },
        {
          id: 2,
          nome: " Slayer",
          albuns: 9999,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="card" v-for="banda of bandas" :key="banda.id">
    <div class="card-image"></div>
    <div class="card-text">
      <h2>{{ banda.nome }}</h2>
      <p>{{ banda.albuns }}</p>
    </div>
  </div>
</template>
