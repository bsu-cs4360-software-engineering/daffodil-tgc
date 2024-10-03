import DMS from './databaseManagementSingleton';
import type { card, cardData, classCard, superClassCard } from '../../../frontend/TCG/src/lib/types';
import exp from 'constants';

//all tests are very fragile: requires modification when database is modified

test('gets all cards', async () => {
    const expectedDatabaseOutput: Array<cardData> = [
        {"damage": 12, "effect": "This is an effect", "name": "potato"}, 
        {"damage": 20, "effect": "Another effect", "name": "carrot"}, 
        {"damage": 15, "effect": "Yet another effect", "name": "banana"}, 
        {"damage": 8, "effect": "Small effect", "name": "apple"}, 
        {"damage": 25, "effect": "Large effect", "name": "orange"}, 
        {"damage": 18, "effect": "Medium effect", "name": "grape"}, 
        {"damage": 10, "effect": "Special effect", "name": "pear"}, 
        {"damage": 22, "effect": "Powerful effect", "name": "peach"}, 
        {"damage": 14, "effect": "Quick effect", "name": "cherry"}, 
        {"damage": 16, "effect": "Slow effect", "name": "plum"}];

    const actualDatabaseOutput: Array<card> = await DMS.getAllCards();
    const filteredOutput: Array<cardData> = actualDatabaseOutput.map(({ _id, ...rest }) => rest);

    expect(filteredOutput).toEqual(expectedDatabaseOutput);
});

test('get all classes', async () => {
    const expectedDatabaseOutput: Array<classCard> = [
        {"className": "Warlock", "description": "Dark pact-makers who wield chaotic energies and summon demonic minions."},
        {"className": "Healer", "description": "Benevolent creatures that mend wounds and boost allies with restorative magic."},
        {"className": "Witch", "description": "Nature-attuned mystics brewing potions and hexing foes with ancient rituals." },
        {"className": "Wizard", "description": "Scholarly spellcasters mastering arcane magic to manipulate elements and reality."},
    ];

    const actualDatabaseOutput: Array<superClassCard> = await DMS.getAllClasses();
    const filteredOutput: Array<classCard> = actualDatabaseOutput.map(({ _id, ...rest }) => rest);

    expect(filteredOutput).toEqual(expectedDatabaseOutput);
});

test('get specific card', async () => {
    const expectedDatabaseOutput: cardData = {"damage": 12, "effect": "This is an effect", "name": "potato"};

    const actualDatabaseOutput: card = await DMS.getCardByName("potato");
    const { _id, ...filteredOutput} = actualDatabaseOutput;

    expect(filteredOutput).toEqual(expectedDatabaseOutput);
});

test('closes the database connection', async () => {
    let isConnectedBeforeClose;
    try {
        await DMS.client.db().admin().ping();
        isConnectedBeforeClose = true;
    } catch (error) {
        isConnectedBeforeClose = false;
    }

    await DMS.close(); 

    let isConnectedAfterClose;
    try {
        await DMS.client.db().admin().ping();
        isConnectedAfterClose = true;
    } catch (error) {
        isConnectedAfterClose = false;
    }

    expect(isConnectedBeforeClose).toBeTruthy(); //before closing, should be connected
    expect(isConnectedAfterClose).toBeFalsy(); //after closing, should not be connected
});