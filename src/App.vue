<script setup>
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <h1 class="bungee-font text-center my-4">Moon Miner</h1>
  </header>
  <main>
    <div class="container-fluid">
      <section class="row">
        <div class="col-12">
          <img src="/public/img/swiss-moon.svg" alt="">
        </div>
      </section>
    </div>
  </main>
  <footer>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

h1 {
  color: var(--bs-light);
}

.bungee-font {
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
