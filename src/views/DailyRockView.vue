<template>
  <div class="daily-filtro">
    <div class="daily-items">
      <h1>Música que você pode gostar</h1>
      <div>Texto</div>
    </div>
    <div class="daily-items">
      <h1>Sugestões de artistas novos</h1>
      <div>Texto 2</div>
    </div>
    <div class="daily-items">
      <h1>Albúms novos</h1>
      <div>Texto 3</div>
    </div>
  </div>
</template>
<style scoped>
.daily-filtro {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.daily-items {
  width: 90%;
  background-color: #ffffff11;
  margin: 20px 0;
  min-height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
</style>
