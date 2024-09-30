export class Upgrade {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.bonus = data.bonus
    this.quantity = 0
  }

  get currentPrice() {
    if (this.quantity == 0) return this.price
    return Math.floor(this.price * (this.quantity * 1.2))
  }

  get totalPower() {
    return this.quantity * this.bonus
  }
}