let pikachu = {
    name: "Pikachu",
    type: "Electrique",
    health: 100,
    maxHealth: 100,
    attackPower: 10,
    defense: 5,
    speed: 15,
    move1: 
      { name: "Tonnerre", power: 8, accuracy: 90 },
    move2:
      { name: "Vive-attaque", power: 6, accuracy: 95 },
    move3:
      { name: "éclair", power: 12, accuracy: 85 },
    move4: 
      { name: "Thunder Fatal foudre", power: 0, accuracy: 100 }
  };
  
  let charizard = {
    name: "Charizard",
    type: "Feu",
    health: 100,
    maxHealth: 100,
    attackPower: 8,
    defense: 4,
    speed: 12,
    move1: 
      { name: "Ember", power: 8, accuracy: 90 },
    move2:
      { name: "Scratch", power: 6, accuracy: 95 },
    move3:
      { name: "Flamethrower", power: 12, accuracy: 85 },
    move4:
      { name: "Vol", power: 8, accuracy: 100 },
    
  };
  
function battle(pikachu, charizard) {
  console.log(`${pikachu.name} vs ${charizard.name} - FIGHT!`);
  
  while (pikachu.health > 0 && charizard.health > 0) {
    // Pokemon 1 attacks Pokemon 2
    let moves1 = getMove(pikachu.move1);
    let damage1 = calculateDamage(pikachu.attackPower, move1.power, charizard.defense);
    console.log(`${pikachu.name} uses ${move1.name} and deals ${damage1} damage to ${charizard.name}!`);
    pokemon2.health -= damage1;
    if (charizard.health <= 0) {
      console.log(`${charizard.name} faints! ${pikachu.name} wins!`);
      break;
    }

    // Pokemon 2 attacks Pokemon 1
    let moves2 = getMove(charizard.move1);
    let damage2 = calculateDamage(pokemon2.attackPower, move2.power, pokemon1.defense);
    console.log(`${pokemon2.name} uses ${move2.name} and deals ${damage2} damage to ${pokemon1.name}!`);
    pokemon1.health -= damage2;
    if (pokemon1.health <= 0) {
      console.log(`${pokemon1.name} faints! ${pokemon2.name} wins!`);
      break;
    }
  }
}
