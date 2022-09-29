<script>
export default {
  data() {
    return {
      banda: {
        nome: " Metallica",
        albuns: 10,
        membros: "James Hetfield, Kirk Hammett....",
      },
    };
  },
};
</script>

<template>
  <div class="artista">
    <div class="imagem">
      <img src="src/assets/random_metallica_img.jpg" alt="Metallica Imagem" />
    </div>
    <div class="descricao">
      <span> Nome:{{ this.banda.nome }} </span>
      <span> Albuns:{{ this.banda.albuns }} </span>
      <span> Membros:{{ this.banda.membros }} </span>
    </div>
  </div>
</template>
