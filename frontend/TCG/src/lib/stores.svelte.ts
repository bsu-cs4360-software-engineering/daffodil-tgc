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
    }
};