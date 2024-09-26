import Card from './card';

describe('Card class', () => {
  it('should create a new Card instance with correct properties', () => {
    const cardVals = {
      damage: 10,
      effect: 'heal',
      name: 'Healing Card'
    };
    const card = new Card(cardVals);
    expect(card).toHaveProperty('damage', 10);
    expect(card).toHaveProperty('effect', 'heal');
    expect(card).toHaveProperty('name', 'Healing Card');
  });

  it('should return correct damage value using getDamage method', () => {
    const cardVals = {
      damage: 20,
      effect: 'attack',
      name: 'Attack Card'
    };
    const card = new Card(cardVals);
    expect(card.getCard().damage).toBe(20);
  });

  it('should return correct effect value using getEffect method', () => {
    const cardVals = {
      damage: 15,
      effect: 'shield',
      name: 'Shield Card'
    };
    const card = new Card(cardVals);
    expect(card.getCard().effect).toBe('shield');
  });

  it('should return correct name value using getName method', () => {
    const cardVals = {
      damage: 5,
      effect: 'none',
      name: 'Basic Card'
    };
    const card = new Card(cardVals);
    expect(card.getCard().name).toBe('Basic Card');
  });

  it('should return a new object with correct properties using getCard method', () => {
    const cardVals = {
      damage: 30,
      effect: 'boost',
      name: 'Boost Card'
    };
    const card = new Card(cardVals);
    const cardObject = card.getCard();
    expect(cardObject).toEqual({
      damage: 30,
      effect: 'boost',
      name: 'Boost Card'
    });
  });
});