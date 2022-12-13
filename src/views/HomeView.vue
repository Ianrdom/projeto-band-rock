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
  <div class="caminho-diario">
    <div class="home-musicas">
      <div class="home-titulo">
        <h1>Músicas ouvidas recentemente.</h1>
      </div>

      <div
        class="musica-recente-container"
        v-if="this.musicasrecentes.length != 0"
      >
        <div
          class="musica-recente"
          v-for="musica of musicasrecentes"
          :key="musica.id"
        >
          <div class="musicas-recentes-content">
            <img :src="`${musica.album.cover_big}`" alt="Musica - track" />
            <div class="musica-recente-artista-detalhes">
              <div
                class="musica-recente-titulo"
                @click="mostrar_album(musica.album.id)"
              >
                {{ musica.title }}
              </div>
              <div
                class="musica-recente-artista"
                @click="mostrar_artista(musica.artist.id)"
              >
                {{ musica.artist.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span v-else> Nenhuma música foi iniciada</span>
      <div class="botao-limpa">
        <button
          v-if="this.musicasrecentes.length != 0"
          class="limpar-musicas"
          @click="limparMusicasRecentes()"
        >
          Limpar Musicas
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
