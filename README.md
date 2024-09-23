# daffodil-tgc

Here's the content converted to Markdown format:

# Summary of Game (Major elements or play points)

- Players will be able to build a deck from various cards to design their own strategy
- Cards will have various types, such as creatures, equipment and spells, and abilities that will affect gameplay depending on the game state
- Players will take turns drawing cards, playing cards, and then attacking/defending from attacks if they choose
- Players will be able to win the game if a win condition is met (such as your opponent dying or a card stating that you outright win if a condition is met)
- Cards will potentially be able to interact with each other creating multiple combinations that can make gameplay variable and fun
- Players will have to manage their mana/energy. Said energy/mana allows them to play cards and/or activate certain card-abilities/card-effects

# Non-technical functional requirements

- The player can interact with the game by clicking and/or keyboard commands
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
- The game will be able to initiate a peer-to-peer connection to another game instance for PvP (if I have enough time to implement it)
  - >:) I'm going to punish myself and attempt networking

# Technical considerations with justifications

- The game will make use of a NoSQL JSON document-based database
  - I don't know why, I just keep hearing about NoSQL and I don't know the difference between that and SQL.
  - I'm using a JSON document-based database since they are easily human readable/modifiable and would be exceptionally useful for storing card-data
- The game will make use of a peer-to-peer connection where one game instance acts as a server and another acts as a client (again if I have enough time to implement it)
  - I didn't think PvE was enough fun and I want to punish myself by forcing myself to implement networking (I've never tried to implement networking in any project thus far)
- The game will be rendered using HTML/JavaScript in the frontend and all the game logic will be handled using Python with Flask as the glue
  - I've never tried something like this and I think it would be fun
  - I picked HTML because I want something simple and efficient to be able to display my game
  - I chose JavaScript so I could dynamically update the web page to reflect the current game state and because it's an obvious pairing with HTML
  - I didn't know whether to pick Flask or Django but I went with Flask since it's supposedly lighter?
  - I chose Python because I know Python and there are a boat load, no, butt load of supporting libraries I could use
- The game will be service-based
  - This makes more sense for a turn based game and will be less of a headache if I want to implement PvP
- The game will be a local service and run on the player's device
  - This would make sense for PvE gameplay unless I end up implementing PvP then the client will use a custom-api to communicate its actions with the server
- The game will make use of a mono-repo codebase
  - This is because the game will be quite simple logically and probably won't have any development done on it once I finish this project

# Data structure and stuff

- Card data will be stored as an object when a card is in play but each individual card is stored in a massive JSON file containing card attributes such as CardID, Name, Effects, Health, etc. Each Effect a card has a corresponding function with the same name which will be activated once the effect is activated.
- A player's hand and deck data consists of an array of CardID's. When a card is in play, the individual cards are initialized as objects and are now able to perform various abilities like attacking, taking damage, activating effects, or being destroyed.
- A game-state-manager will keep track of who's turn it is, the current game state including but not limited to player health, player energy/mana, if a player is drawing/playing/attacking/defending. The game-state-manager will also log all game-events in a txt.
