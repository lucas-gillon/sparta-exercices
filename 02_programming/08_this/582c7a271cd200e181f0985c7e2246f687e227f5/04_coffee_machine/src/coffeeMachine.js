const machine = {
  litersOfCoffee: 0,
  constExpresso: 0.08,
  constLongCoffee: 0.15,

  longCoffee: function () {
    if (this.litersOfCoffee < this.constLongCoffee) {
      return false;
    } else {
      this.litersOfCoffee = this.litersOfCoffee - this.constLongCoffee;
      return true;
    }
  },

  expresso: function () {
    if (this.litersOfCoffee < this.constExpresso) {
      return false;
    } else {
      this.litersOfCoffee = this.litersOfCoffee - this.constExpresso;
      return true;
    }
  },

  fillWithLitersOfCoffee: function (liters) {
    this.litersOfCoffee = this.litersOfCoffee + liters;
    return this;
  },
};

module.exports = machine;
