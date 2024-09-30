<script setup>
import { computed } from 'vue';
import { AppState } from './AppState.js';
import { cheeseService } from './services/CheeseService.js';

const cheese = computed(() => AppState.cheese)
const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)

function mineCheese() {
  cheeseService.mineCheese()
}
</script>

<template>
  <header>
    <h1 class="bungee-font text-center my-4">Moon Miner</h1>
  </header>
  <main>
    <div class="container-fluid">
      <section class="row">
        <div class="col-12">
          <div class="text-center">
            <img @click="mineCheese()" role="button" src="/public/img/swiss-moon.svg" alt="The Moon"
              title="Click to mine!">
          </div>
        </div>
      </section>
    </div>
  </main>
  <footer class="p-3">
    <div class="container-fluid">
      <section class="row">
        <div class="col-12">
          <div class="d-flex justify-content-center align-items-end">
            <div
              class="bg-secondary d-flex gap-5  justify-content-between fs-4 px-3 py-2 rounded-corner-start stat-box">
              <span>+1</span>
              <i class="mdi mdi-cursor-pointer"></i>
            </div>
            <div class="bg-warning d-flex gap-5 px-3 py-2 fs-1 rounded-corner-start rounded-corner-end fw-bold">
              <i class="mdi mdi-cheese"></i>
              <span>{{ cheese }}</span>
            </div>
            <div class="bg-secondary d-flex gap-5  justify-content-between fs-4 px-3 py-2 rounded-corner-end stat-box">
              <i class="mdi mdi-timer"></i>
              <span>+1</span>
            </div>
          </div>
        </div>
      </section>
      <div class="row bg-warning rounded">
        <div class="col-md-6">
          <div class="m-2 p-2 rounded bg-secondary d-flex justify-content-between">
            <div>
              <span class="bungee-font">Click Upgrades</span>
              <div v-for="upgrade in clickUpgrades" :key="upgrade.name" class="mb-2 d-flex gap-1">
                <button class="btn btn-primary">
                  {{ upgrade.currentPrice }}
                  <i class="mdi mdi-cheese"></i>
                </button>
                <div>
                  <span class="d-block text-capitalize">{{ upgrade.name }}</span>
                  <span class="d-block">+{{ upgrade.bonus }}</span>
                </div>
              </div>
            </div>
            <div>
              <span class="bungee-font">Automatic Upgrades</span>
              <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="mb-2 d-flex gap-1">
                <button class="btn btn-danger">
                  {{ upgrade.currentPrice }}
                  <i class="mdi mdi-cheese"></i>
                </button>
                <div>
                  <span class="d-block text-capitalize">{{ upgrade.name }}</span>
                  <span class="d-block">+{{ upgrade.bonus }} / 3s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

* {
  color: var(--bs-light);
}

h1 {
  text-shadow: 0 4px var(--bs-warning);
}

.bungee-font {
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.rounded-corner-start {
  border-top-left-radius: 15px;
}

.rounded-corner-end {
  border-top-right-radius: 15px;
}
</style>
