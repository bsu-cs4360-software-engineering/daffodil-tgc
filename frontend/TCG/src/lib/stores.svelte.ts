import { loadCardsByName } from "$lib";

let _selectedClass = $state("")

export const selectedClass = {
    get: () => _selectedClass,
    set: (value:string) => {
        _selectedClass = value
    }
};

let _selectedCards: string[] = $state([])

export const selectedCards = {
    get: () => _selectedCards,
    set: (value:string) => {
        if(_selectedCards.includes(value)){
            let index = _selectedCards.indexOf(value)
            _selectedCards.splice(index,1)
        } else if(_selectedCards.length < 3){
            _selectedCards.push(value);
        }
        console.log(_selectedCards)
    },
    pop: (index:number)=>{
        _selectedCards.splice(index,1)
    },
    getData: async () => {
        try {
            const data = await loadCardsByName(_selectedCards);
            console.log(data);
            return data;
        } catch (error) {
            console.error("Error loading card data:", error);
            return [];
        }
    },
    getLength: ()=>{
        return _selectedCards.length
    }
};