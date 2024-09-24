import cardJSON from '../db.json' with { type: 'json' }

export default class CardGetter {
    constructor(){
        this.cardJSON = cardJSON;
    }
    get_cards(){
        return this.cardJSON;
    }
}