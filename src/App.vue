<script>
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
import Close from "vue-material-design-icons/Close.vue";

import { mapStores, mapState, mapActions } from "pinia";
import { useAudioStore } from "@/stores/audio";

export default {
  data() {
    return {
      playing: false,
    };
  },
  components: { AudioPlayer, Close, HeaderComp, FooterComp },
  methods: {
    ...mapActions(useAudioStore, ["closeAudio"]),
    atualizar() {
      const player = document.getElementsByClassName("audio__player-play")[0];
      let clickEvent = new Event("click");
      player.dispatchEvent(clickEvent);
    },
    fecharplayer() {
      this.closeAudio();
    },
  },
  computed: {
    ...mapStores(useAudioStore),
    ...mapState(useAudioStore, ["displayPlayer", "option"]),
  },
  watch: {
    displayPlayer() {
      this.atualizar();
    },
    playing() {
      console.log(this.playing);
    },
  },
};
</script>

<template>
  <div class="conteudo">
    <HeaderComp />
    <main>
      <RouterView />
    </main>
    <FooterComp />
    <div v-show="displayPlayer" class="espaco"></div>
    <div v-show="displayPlayer" class="audio">
      <Close
        class="fechar-player"
        @click="fecharplayer(this.null_option)"
        :size="30"
      ></Close>
      <AudioPlayer
        id="audio1"
        @play="playing = true"
        @pause="playing = false"
        :option="option"
      />
    </div>
  </div>
</template>

<style scoped>
.espaco {
  height: 120px;
  min-height: 120px;
  background-color: rgb(255, 255, 255);
}
.conteudo {
  /* min-height: 100vh; */
  height: 100vh;
  width: 100%;
}
.fechar-player {
  position: absolute;
  right: 0;
}
.fechar-player:hover {
  background-color: rgba(255, 0, 0, 0.664);
}
</style>
