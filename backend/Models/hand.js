import Deck from './deck.js'

export default class Hand extends Deck {
    getCardFromHandPosition(pos) {
        if (pos < 0 || pos >= this.size()) {
            throw RangeError
        }
        const cardID = Object.keys(this.getCards())[pos]
        const card = this.getCardFromID(cardID)
        return { [cardID]: card}
    }
}
//initialize hand with list of cardID's
const testPlayerHand = [123, 456, 789]
var hand = new Hand(testPlayerHand)

console.log(hand)

hand.addCard(101)

console.log(hand)

hand.removeCard(789)

console.log(hand)
