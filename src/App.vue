<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState.js';
import { cheeseService } from './services/CheeseService.js';
import { upgradesService } from './services/UpgradesService.js';

const cheese = computed(() => AppState.cheese)
const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)

const clickBonus = computed(() => {
  let total = 1
  clickUpgrades.value.forEach(upgrade => total += upgrade.totalBonus)
  return total
})

const autoBonus = computed(() => {
  let total = 0
  autoUpgrades.value.forEach(upgrade => total += upgrade.totalBonus)
  return total
})

onMounted(() => {
  setInterval(collectAuto, 3000)
})

function mineCheese() {
  cheeseService.increaseCheese(clickBonus.value)
}
function purchaseUpgrade(upgrade) {
  upgradesService.purchaseUpgrade(upgrade)
}
function collectAuto() {
  cheeseService.increaseCheese(autoBonus.value)
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
              <span>+{{ clickBonus }}</span>
              <i class="mdi mdi-cursor-pointer"></i>
            </div>
            <div class="bg-warning d-flex gap-5 px-3 py-2 fs-1 rounded-corner-start rounded-corner-end fw-bold">
              <i class="mdi mdi-cheese"></i>
              <span>{{ cheese }}</span>
            </div>
            <div class="bg-secondary d-flex gap-5  justify-content-between fs-4 px-3 py-2 rounded-corner-end stat-box">
              <i class="mdi mdi-timer"></i>
              <span>+{{ autoBonus }}</span>
            </div>
          </div>
        </div>
      </section>
      <div class="row bg-warning rounded">
        <div class="col-md-6">
          <div class="m-2 py-2 px-3 rounded bg-secondary d-flex justify-content-between">
            <div>
              <span class="bungee-font fs-3">Click Upgrades</span>
              <div v-for="upgrade in clickUpgrades" :key="upgrade.name" class="mb-2 d-flex gap-1">
                <button @click="purchaseUpgrade(upgrade)" :disabled="upgrade.price > cheese"
                  class="btn btn-primary text-light fs-4">
                  {{ upgrade.price }}
                  <i class="mdi mdi-cheese"></i>
                </button>
                <div>
                  <span class="d-block text-capitalize">{{ upgrade.name }}</span>
                  <span class="d-block">+{{ upgrade.bonus }}</span>
                </div>
              </div>
            </div>
            <div>
              <span class="bungee-font fs-3">Automatic Upgrades</span>
              <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="mb-2 d-flex gap-1">
                <button @click="purchaseUpgrade(upgrade)" :disabled="upgrade.price > cheese"
                  class="btn btn-danger text-light fs-4">
                  {{ upgrade.price }}
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
        <div class="col-md-6">
          <div class="m-2 py-2 px-3 rounded bg-secondary d-flex justify-content-between">
            <div>
              <span class="bungee-font fs-3">Click Stats</span>
              <div v-for="upgrade in clickUpgrades" :key="upgrade.name"
                class="mb-2 d-flex justify-content-between gap-1 text-light">
                <div class="d-flex align-items-center gap-2">
                  <span class="rounded border border-light border-1 fs-3 px-2">
                    {{ upgrade.quantity }}
                  </span>
                  <span class="text-capitalize">
                    {{ upgrade.name + (upgrade.quantity == 1 ? '' : 's') }}
                  </span>
                </div>
                <div>
                  <i class="mdi mdi-arrow-right-thick fs-2"></i>
                  <span class="rounded border border-light border-1 fs-3 px-2">
                    {{ upgrade.totalBonus }}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span class="bungee-font fs-3">Automatic Stats</span>
              <div v-for="upgrade in autoUpgrades" :key="upgrade.name"
                class="mb-2 d-flex justify-content-between gap-1 text-light">
                <div class="d-flex align-items-center gap-2">
                  <span class="rounded border border-light border-1 fs-3 px-2">{{ upgrade.quantity }}</span>
                  <span class="text-capitalize">
                    {{ upgrade.name + (upgrade.quantity == 1 ? '' : 's') }}
                  </span>
                </div>
                <div>
                  <i class="mdi mdi-timer fs-2"></i>
                  <span class="rounded border border-light border-1 fs-3 px-2">
                    {{ upgrade.totalBonus }}
                  </span>
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

img {
  user-select: none;
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
