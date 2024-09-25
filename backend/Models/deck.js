import Card from './card.js'
import DMS from '../dbManagement/databaseManagementSingleton.js'

export default class Deck {
    constructor(ids) {
        this.cards = {}; 
        if (ids != undefined)
            ids.forEach(id => this.addCard(id)); 
    } 
    getCards() {
        return this.cards
    }
    getIDs() {
        return Object.keys(this.getCards())
    }
    size() {
        return this.getIDs().length
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
    addCard(id) {
        this.getCards()[id] = new Card(DMS.getCardFromID(id))
    }
    removeCard(id) {
        delete this.getCards()[id]
    }
    drawRND() {
        let randomIndex = Math.floor(Math.random() * this.size())
        let randomID = this.getIDs()[randomIndex]
        this.removeCard(randomID)
        return randomID
    }
}