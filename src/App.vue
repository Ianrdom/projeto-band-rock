<script>
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";

import { mapStores, mapState } from "pinia";
import { useAudioStore } from "@/stores/audio";

export default {
  components: { AudioPlayer, HeaderComp, FooterComp },
  methods: {
    atualizar() {
      const player = document.getElementsByClassName("audio__player-play")[0];
      let clickEvent = new Event("click");
      player.dispatchEvent(clickEvent);
    },
  },
  computed: {
    ...mapStores(useAudioStore),
    ...mapState(useAudioStore, ["displayPlayer", "option"]),
    classObject() {
      return {
        menor: this.displayPlayer,
      };
    },
  },
  watch: {
    async displayPlayer() {
      await this.atualizar();
    },
  },
};
</script>

<template>
  <!-- <div :class="classObject"> -->
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
  <!-- </div> -->
  <div v-show="displayPlayer" class="audio">
    <AudioPlayer id="audio1" :option="option" />
  </div>
</template>

<style scoped>
.menor {
  /* margin-bottom: 100px; */
}
</style>
<!-- WATCH NO PLAY, SE MUDAR DAR PLAY NELE -->
