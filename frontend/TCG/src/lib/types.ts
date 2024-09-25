export interface card {
    id: number;
    damage: number;
    effect: string;
    name: string;
 }
 
 export interface cardData {
   damage: number;
   effect: string;
   name: string;
}
export interface newCard {
   [id: string]: cardData;
}

