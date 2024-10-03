export interface card {
    _id: number;
    damage: number;
    effect: string;
    name: string;
 }

export interface classCard{
   className:string,
   description: string
}
 
 export interface cardData {
   damage: number;
   effect: string;
   name: string;
}

export interface superClassCard{
   _id: number;
   className:string,
   description: string
}

