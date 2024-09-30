import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: 10000,
  clickUpgrades: [
    new Upgrade({ name: 'knife', price: 50, bonus: 1 }),
    new Upgrade({ name: 'drill', price: 250, bonus: 5 }),
  ],
  autoUpgrades: [
    new Upgrade({ name: 'mousetronaut', price: 1000, bonus: 10 }),
    new Upgrade({ name: 'space station', price: 50000, bonus: 100 }),
  ]
})