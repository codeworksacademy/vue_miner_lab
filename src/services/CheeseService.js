import { AppState } from "@/AppState.js"

class CheeseService {
  increaseCheese(cheeseAmount) {
    AppState.cheese += cheeseAmount
  }
}

export const cheeseService = new CheeseService()