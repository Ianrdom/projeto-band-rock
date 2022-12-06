import { ref } from "vue";
import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", () => {
  const displayPlayer = ref(false);
  const option = ref({});
  const musicas = ref({});
  const musicasrecentes = ref([]);

  function clear() {
    musicas.value = null;
  }
  function AddRecentes(musica) {
    musicasrecentes.value.push(musica);
  }
  function setOption(options) {
    displayPlayer.value = true;
    option.value = options;
    // Object.assign(option, options);
  }
  function setMusica(musicas_novas) {
    musicas.value = musicas_novas;
    musicas.value.forEach((m) => (m.isPlaying = false));
  }

  function pausa_icon_musica(musica) {
    musicas.value.find((m) => m === musica).isPlaying = false;
  }
  function inicia_icon_musica(musica) {
    musicas.value.forEach((m) => (m.isPlaying = false));
    musicas.value.find((m) => m === musica).isPlaying = true;
  }

  function closeAudio() {
    displayPlayer.value = false;
    option.value = {};
    if (musicas.value != null) {
      musicas.value.forEach((m) => (m.isPlaying = false));
    }
  }
  function limparMusicasRecentes() {
    musicasrecentes.value = [];
  }

  return {
    displayPlayer,
    option,
    musicas,
    setMusica,
    setOption,
    pausa_icon_musica,
    inicia_icon_musica,
    closeAudio,
    clear,
    AddRecentes,
    musicasrecentes,
    limparMusicasRecentes,
  };
});
