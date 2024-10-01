export class Upgrade {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.bonus = data.bonus
    this.quantity = 0
  }
  get totalBonus() {
    return this.quantity * this.bonus
  }
}