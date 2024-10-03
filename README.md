# daffodil-tgc


# How to play the game
- First step is to make sure that you have node js installed on your system.
- Next, go the root directory of our project where the ```start_servers.py``` file is located.
- Lastly, run the python file using ```python start_servers.py``` in the terminal. This will install all the dependiences for both servers, get them started, and open the correct webpage for you to view the game.
- Enjoy!
=======

# How to test the game code
- FrontEnd: to test goto the frontend/tcg folder and then run "npm run test"
- Backend: to test goto the backend folder and then run "npm run test"

# Summary of Game (Major elements or play points)

- Players will be able to build a deck from various cards to design their own strategy
- Cards will have various types, such as creatures, equipment and spells, and abilities that will affect gameplay depending on the game state
- Players will take turns drawing cards, playing cards, and then attacking/defending from attacks if they choose
- Players will be able to win the game if a win condition is met (such as your opponent dying or a card stating that you outright win if a condition is met)
- Players will have to manage their mana/energy. Said energy/mana allows them to play cards and/or activate certain card-abilities/card-effects

# Non-technical functional requirements

- The player can interact with the game by clicking
- The player can view a user interface displaying the game state
- The player can draw cards from their deck to their hand
- The player can play cards from their hand onto the game field
- Cards will enter a graveyard if destroyed
- The player can activate various card effects if the game state allows for it
- The game will handle turn-based gameplay
- The game will track and handle various win conditions met by either player
- The game will implement various card effects
- The game will track resources used by players and/or cards
- The game will have a PvE mode

# Technical considerations with justifications

- The game will make use of a NoSQL JSON document-based database
  - We will be using a JSON NOSQL database because it allows us to get all the information we need with any need for joins and relations.
  - They are also easily human readable/modifiable and would be exceptionally useful for storing card-data
- The game will be rendered using HTML/JavaScript in the frontend and all the game logic will be handled using NodeJS on the back end.
  - We picked HTML because we wanted something simple and efficient to be able to display my game
  - We chose JavaScript so we could dynamically update the web page to reflect the current game state and because it's an obvious pairing with HTML
- The game will be service-based
  - This makes more sense for a turn based game
- The game will be a local service and run on the player's device
  - This would make sense for PvE gameplay unless we end up implementing PvP then the client will use a custom-api to communicate its actions with the server
- The game will make use of a mono-repo codebase
  - This is because the game will be quite simple logically and probably won't have any development done on it once we finish this project


# Data structure and stuff

- Card data will be stored as an object when a card is in play but each individual card is stored in a massive JSON file containing card attributes such as CardID, Name, Effects, Health, etc. Each Effect a card has a corresponding function with the same name which will be activated once the effect is activated.
- A player's hand and deck data consists of an array of CardID's. When a card is in play, the individual cards are initialized as objects and are now able to perform various abilities like attacking, taking damage, activating effects, or being destroyed.
- A game-state-manager will keep track of who's turn it is, the current game state including but not limited to player health, player energy/mana, if a player is drawing/playing/attacking/defending. The game-state-manager will also log all game-events in a txt.
