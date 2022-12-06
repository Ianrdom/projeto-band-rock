<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useAudioStore } from "@/stores/audio";
export default {
  computed: {
    ...mapStores(useAudioStore),
    ...mapState(useAudioStore, ["musicasrecentes"]),
  },
  methods: {
    ...mapActions(useAudioStore, ["limparMusicasRecentes"]),
  },
};
</script>

<template>
  <div class="caminho-diario">
    <div class="home-musicas">
      <div class="home-titulo">
        <h1>Músicas ouvidas recentemente.</h1>
      </div>
      <div class="musica-recente-container">
        <div
          class="musica-recente"
          v-for="musica of musicasrecentes"
          :key="musica.id"
        >
          <div class="musicas-recentes-content">
            <img :src="`${musica.album.cover_big}`" alt="Musica - track" />

            <div class="musica-recente-titulo">{{ musica.title }}</div>
          </div>
        </div>
      </div>
      <button class="limpar-musicas" @click="limparMusicasRecentes()">
        Limpar Musicas
      </button>
    </div>
  </div>
</template>
<style scoped></style>
