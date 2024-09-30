import { AppState } from "@/AppState.js";
import { Upgrade } from "@/models/Upgrade.js";

class UpgradesService {
  /**
   * @param {Upgrade} upgrade
   */
  purchaseUpgrade(upgrade) {
    if (AppState.cheese < upgrade.currentPrice) return

    AppState.cheese -= upgrade.currentPrice
    upgrade.quantity++
  }
}

export const upgradesService = new UpgradesService()