import { AppState } from "@/AppState.js";
import { Upgrade } from "@/models/Upgrade.js";

class UpgradesService {
  /*** @param {Upgrade} upgrade */
  purchaseUpgrade(upgrade) {
    if (AppState.cheese < upgrade.price) return

    AppState.cheese -= upgrade.price
    upgrade.quantity++
    upgrade.price = Math.floor(upgrade.price * (upgrade.quantity * 1.2))
  }
}

export const upgradesService = new UpgradesService()