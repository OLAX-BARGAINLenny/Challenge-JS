let pikachu = {
    name: "Pikachu",
    type: "Electrique",
    health: 100,
    maxHealth: 100,
    attackPower: 10,
    defense: 5,
    speed: 15,
    moves: [
      { name: "éclair", power: 8, accuracy: 90 },
      { name: "vive-attaque", power: 6, accuracy: 95 },
      { name: "tonnerre", power: 12, accuracy: 85 },
      { name: "cage éclair", power: 0, accuracy: 100 }
    ]
  };
  
  let charmander = {
    name: "Charmander",
    type: "Feu",
    health: 100,
    maxHealth: 100,
    attackPower: 8,
    defense: 4,
    speed: 12,
    moves: [
      { name: "flammèche", power: 8, accuracy: 90 },
      { name: "griffe", power: 6, accuracy: 95 },
      { name: "lance-flamme", power: 12, accuracy: 85 },
      { name: "vol", power: 5, accuracy: 100 }
    ]
  };
  
  // Function to simulate battle between two Pokemon
  function battle(pikachu, charizard) {
    console.log(`${pikachu.name} vs ${charizard.name}!`);
  
    let currentPokemon = pikachu;
    let opponent = charizard;
  
    // Randomly determine which Pokemon goes first based on speed
    if (charizard.speed > pikachu.speed) {
      currentPokemon = charizard;
      opponent = pikachu;
    }
  
    // Loop until one of the Pokemon has 0 health
    while (pikachu.health > 0 && charizard.health > 0) {
      console.log(`\n${currentPokemon.name}'s turn!`);
  
      // Display available moves for the current Pokemon
      console.log(`${currentPokemon.name} can use:`);
      for (let i = 0; i < currentPokemon.moves.length; i++) {
        console.log(`${i + 1}. ${currentPokemon.moves[i].name}`);
      }
  
      // Get user input for move selection
      let moveSelection = prompt(`Enter the number of the move you want to use (1-${currentPokemon.moves.length}):`);
      while (isNaN(moveSelection) || moveSelection < 1 || moveSelection > currentPokemon.moves.length) {
        moveSelection = prompt(`Invalid input. Enter the number of the move you want to use (1-${currentPokemon.moves.length}):`);
      }
  
      // Get the selected move and calculate damage
      let selectedMove = currentPokemon.moves[moveSelection - 1];
      let damage = selectedMove.power + currentPokemon.attackPower - opponent.defense;
  
      // Calculate accuracy of the move and determine if it hits
      let accuracy = selectedMove.accuracy + (currentPokemon.speed - opponent.speed);
      let hit = Math.floor(Math.random() * 100) + 1 <= accuracy;
  
      // Apply damage to the opponent if the move hits
      if (hit) {
        console.log(`${currentPokemon.name} used ${selectedMove.name}!`);
        console.log(`${opponent.name} took ${damage} damage!`);
        opponent.health -= damage;
      } else {
        console.log(`${currentPokemon.name}'s ${selectedMove.name} missed!`);
      }
  
      console.log(`${opponent.name} has ${opponent.health} health remaining.`);
      button 
      battle(pikachu, charmander);
    }
}