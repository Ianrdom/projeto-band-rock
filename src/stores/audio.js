import { ref } from "vue";
import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", () => {
  const displayPlayer = ref(false);
  const option = ref({});
  const musicas = ref({});

  function setOption(options) {
    displayPlayer.value = true;
    option.value = options;
    // Object.assign(option, options);
  }

  function closeAudio() {
    displayPlayer.value = false;
    option.value = {};
  }

  return { displayPlayer, option, musicas, setOption, closeAudio };
});
