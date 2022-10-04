<script>
export default {
  data() {
    return {
      bandas: [
        {
          nome: " Metallica",
          albuns: 10,
          membros: "James Hetfield, Kirk Hammett....",
        },
        {
          nome: " Slayer",
          albuns: 9999,
          membros: "Nomes",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- <div class="artista">
    <div class="imagem">
      <img src="src/assets/slayer-index.jpeg" alt="Slayer Imagem" />
    </div>
    <div class="descricao">
      <span> Nome:{{ this.bandas[1].nome }} </span>
      <span> Albuns:{{ this.bandas[1].albuns }} </span>
      <span> Membros:{{ this.bandas[1].membros }} </span>
    </div>
  </div> -->

  <!-- <div class="artista">
    <div class="imagem">
      <img src="src/assets/random_metallica_img.jpg" alt="Metallica Imagem" />
    </div>
    <div class="descricao">
      <span> Nome:{{ this.bandas[0].nome }} </span>
      <span> Albuns:{{ this.bandas[0].albuns }} </span>
      <span> Membros:{{ this.bandas[0].membros }} </span>
    </div>
  </div> -->
  <div class="card">
    <div class="card-image"></div>
    <div class="card-text">
      <span class="date">4 days ago</span>
      <h2>Post One</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus
        omnis illum maxime quod deserunt eligendi dolor
      </p>
    </div>
    <div class="card-stats">
      <div class="stat">
        <div class="value">4<sup>m</sup></div>
        <div class="type">read</div>
      </div>
      <div class="stat border">
        <div class="value">5123</div>
        <div class="type">views</div>
      </div>
      <div class="stat">
        <div class="value">32</div>
        <div class="type">comments</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";

  border-radius: 18px;
  background-color: #6563e64b;

  box-shadow: 5px 5px 15px rgba(129, 117, 231, 0.9);
  font-family: roboto;
  text-align: center;
  width: 300px;
}
.card-image {
  grid-area: image;
}
.card-text {
  grid-area: text;
}
.card-stats {
  grid-area: stats;
}
.card-image {
  grid-area: image;
  background: url("src/assets/random_metallica_img.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-text {
  grid-area: text;
  margin: 25px;
}

.card-text .date {
  color: rgb(255, 255, 255);
  font-size: 13px;
}
.card-text p {
  color: grey;
  font-size: 15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top: 0px;
  font-size: 28px;
}
.card-stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(38, 4, 83);
}
.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
  padding: 10px;
}
.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}
.card {
  transition: 0.5s ease;
  cursor: pointer;
  margin: 30px;
}
</style>
