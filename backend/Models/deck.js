import Card from './card.js'
import DMS from '../dbManagement/databaseManagementSingleton.js'

export default class Deck {
    constructor(ids) {
        //cards stored as card objects
        this.cards = ids.reduce((acc, id) => {
            acc[id] = new Card(DMS.getCardFromID(id)); 
            return acc; 
          }, {});
    } 
    getCards() {
        return this.cards
    }
    size() {
        return this.getCards().length
    }
    inDeck(id) {
        return (id in this.getCards())
    }
    getCardFromID(id) {
        if (this.inDeck(id)) {
            return this.getCards()[id]
        }
        else {
            console.log("KeyError")
            return null
        }
    }
}