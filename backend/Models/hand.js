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
const testPlayerHand = [1, 3, 5]
var hand = new Hand(testPlayerHand)

console.log(hand)
