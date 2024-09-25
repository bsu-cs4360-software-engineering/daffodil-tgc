import Deck from './deck.js'

export default class Hand extends Deck {
    getCardFromHandPosition(pos) {
        if (pos < 0 || pos >= this.size()) {
            throw RangeError
        }
        const cardID = this.getKeys()[pos]
        const card = this.getCardFromID(cardID)
        return { [cardID]: card}
        //return card
    }
    drawFrom(deck) {
        this.addCard(deck.drawRND())
    }
}
//initialize deck with list of cardID's
const testPlayerDeck = [123,456,789,101,202,303,404,505,606,707]
var deck = new Deck(testPlayerDeck)
var hand = new Hand()

/*
console.log(deck)
console.log(hand)

/*
console.log("\nDrawing random card from deck and adding it to hand\n")
hand.drawFrom(deck)
*/

console.log(deck.getCardsList())
console.log(deck)
console.log(hand)
*/

console.log(deck.getCardsList())