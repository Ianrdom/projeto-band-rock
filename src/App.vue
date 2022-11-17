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
    // classObject() {
    //   return {
    //     conteudo: this.displayPlayer,
    //     conteudo1: !this.displayPlayer,
    //   };
    // },
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
  <div class="conteudo">
    <HeaderComp />
    <main>
      <RouterView />
    </main>
    <FooterComp />
    <!-- </div> -->
    <div v-show="displayPlayer" class="espaco"></div>
    <div v-show="displayPlayer" class="audio">
      <AudioPlayer id="audio1" :option="option" />
    </div>
  </div>
</template>

<style scoped>
.espaco {
  height: 120px;
  min-height: 120px;
  background-color: rgb(255, 255, 255);
}
/* .conteudo1 {
  height: 100vh;
  width: 100%;
} */
.conteudo {
  /* min-height: 100vh; */
  height: 100vh;
  width: 100%;
}
</style>
