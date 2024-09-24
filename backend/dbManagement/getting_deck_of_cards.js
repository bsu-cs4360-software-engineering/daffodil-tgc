import cardJSON from '../db.json' assert {type:'json'}

export default class CardGetter {
    constructor(){
        this.cardJSON = cardJSON;
    }
    get_cards(){
        return this.cardJSON;
    }
}