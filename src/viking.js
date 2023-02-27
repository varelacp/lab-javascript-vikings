// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const saxonWarior1 = Math.floor(Math.random() * this.saxonArmy.length);
    const saxonRandom = this.saxonArmy[saxonWarior1];
    const vikingWarior1 = Math.floor(Math.random() * this.vikingArmy.length);
    const vikingRandom = this.vikingArmy[vikingWarior1];
    const energyViking = saxonRandom.receiveDamage(vikingRandom.strength);
    if (saxonRandom.health <= 0) {
      this.saxonArmy.splice(saxonWarior1, 1);
    }
    return energyViking;
  }

  saxonAttack() {
    const saxonWarior1 = Math.floor(Math.random() * this.saxonArmy.length);
    const saxonRandom = this.saxonArmy[saxonWarior1];
    const vikingWarior1 = Math.floor(Math.random() * this.vikingArmy.length);
    const vikingRandom = this.vikingArmy[vikingWarior1];
    const energySaxon = vikingRandom.receiveDamage(saxonRandom.strength);
    if (vikingRandom.health <= 0) {
      this.vikingArmy.splice(vikingWarior1, 1);
    }
    return energySaxon;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
