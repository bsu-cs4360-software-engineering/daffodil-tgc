export default class Card {
    constructor(cardVals){
        this.damage = cardVals.damage;
        this.effect = cardVals.effect;
        this.name = cardVals.name;
    }
    #getDamage(){
        return this.damage;
    }
    #getEffect(){
        return this.effect;
    }
    #getName(){
        return this.name;
    }
    getCard() {
        return {
            damage: this.#getDamage(),
            effect: this.#getEffect(),
            name: this.#getName()
        };
    }
}