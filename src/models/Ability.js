// Bazna klasa za Ability
export class Ability {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  use() {
    return `${this.name} ability used!`;
  }
}

export class FireballAbility extends Ability {
  constructor() {
    super('Fireball', 'Throw a ball of fire at enemies.');
  }
  use() {
    return 'Casting a blazing fireball!';
  }
}

export class ShieldAbility extends Ability {
  constructor() {
    super('Shield', 'Block incoming damage.');
  }
  use() {
    return 'Shield raised, blocking damage!';
  }
}