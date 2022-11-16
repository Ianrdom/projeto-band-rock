import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", () => {
  const displayPlayer = ref(false);
  const option = reactive({});

  function setOption(options) {
    displayPlayer.value = true;
    Object.assign(option, options);
  }

  return { displayPlayer, option, setOption };
});
