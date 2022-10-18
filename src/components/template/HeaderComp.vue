<script>
export default {
  data() {
    return {
      procura: "",
    };
  },
  methods: {
    procurar(search) {
      this.$router.push(`/resultado/${search}`);
      this.procura = "";
    },
  },
};
</script>

<template>
  <header>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/daily_rock">Daily Rock</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/artistas">Artistas</RouterLink> </span>
    </div>
    <div class="menu-direito">
      <span>
        <input
          placeholder="Buscar "
          type="text"
          @keyup.enter="procurar(this.procura)"
          v-model="procura"
        />
      </span>
      <span>|</span>
      <span>Sair</span>
    </div>
  </header>
</template>
