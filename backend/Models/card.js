export default class Card {
    constructor(id, damage,effect,name){
        this.damage = damage;
        this.id = id;
        this.effect = effect;
        this.name = name;
    }
    #get_damage(){
        return this.damage;
    }
    #get_id(){
        return this.id;
    }
    #get_effect(){
        return this.effect;
    }
    #get_name(){
        return this.name;
    }
    get_card() {
        return {
            id: this.#get_id(),
            damage: this.#get_damage(),
            effect: this.#get_effect(),
            name: this.#get_name()
        };
    }
}