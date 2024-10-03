import { expect, test, vi, describe } from 'vitest';
import { loadCardAndClassData, loadCardsByName } from '$lib';

describe('Load Function', () => {
	// Mock data Cards
	const mockDataCards = [
		{ _id: '66f4ca884cadd8ccd0ad3e20', damage: 12, effect: 'This is an effect', name: 'potato' },
		{ _id: '66f4ca884cadd8ccd0ad3e21', damage: 20, effect: 'Another effect', name: 'carrot' },
		{ _id: '66f4ca884cadd8ccd0ad3e22', damage: 15, effect: 'Yet another effect', name: 'banana' },
		{ _id: '66f4ca884cadd8ccd0ad3e23', damage: 8, effect: 'Small effect', name: 'apple' },
		{ _id: '66f4ca884cadd8ccd0ad3e24', damage: 25, effect: 'Large effect', name: 'orange' },
		{ _id: '66f4ca884cadd8ccd0ad3e25', damage: 18, effect: 'Medium effect', name: 'grape' },
		{ _id: '66f4ca884cadd8ccd0ad3e26', damage: 10, effect: 'Special effect', name: 'pear' },
		{ _id: '66f4ca884cadd8ccd0ad3e27', damage: 22, effect: 'Powerful effect', name: 'peach' },
		{ _id: '66f4ca884cadd8ccd0ad3e28', damage: 14, effect: 'Quick effect', name: 'cherry' },
		{ _id: '66f4ca884cadd8ccd0ad3e29', damage: 16, effect: 'Slow effect', name: 'plum' }
	];

	// Mock data Classes
	const mockDataClasses = [
		{
			_id: '66f4eaced2e428d67f8a2142',
			className: 'Warlock',
			description: 'Dark pact-makers who wield chaotic energies and summon demonic minions.'
		},
		{
			_id: '66f4eb6fd2e428d67f8a2143',
			className: 'Healer',
			description: 'Benevolent creatures that mend wounds and boost allies with restorative magic.'
		},
		{
			_id: '66f4eba7d2e428d67f8a2144',
			className: 'Witch',
			description: 'Nature-attuned mystics brewing potions and hexing foes with ancient rituals.'
		},
		{
			_id: '66f4ebd7d2e428d67f8a2145',
			className: 'Wizard',
			description:
				'Scholarly spellcasters mastering arcane magic to manipulate elements and reality.'
		}
	];

	global.fetch = vi.fn((url:string) => {
		if (url.includes('/getAllCards')) {
			return Promise.resolve({ json: () => Promise.resolve(mockDataCards) });
		} else if (url.includes('/getAllClasses')) {
			return Promise.resolve({ json: () => Promise.resolve(mockDataClasses) });
        } else if (url.includes('/getCardByName')) {
            const params = new URL(url)
            let paramName = params.searchParams.get('name')
            for (let i of mockDataCards){
                if(i.name == paramName){
                    let index = mockDataCards.indexOf(i)
                    return Promise.resolve({ json: () => Promise.resolve(mockDataClasses[index])});
                }
            }
			return Promise.resolve({ json: () => Promise.resolve(null)});
		} else {
			return Promise.reject(new Error('Not found'));
		}
	});

	test('Load all Card and Class Data', async () => {
        //Should fetch and receive all data card and class correctly
		const result = await loadCardAndClassData();

		expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/getAllCards');
		expect(result.cardData).toEqual(mockDataCards);
	});

    test('Load Cards By Name', async () => {
        //test Data
        const dataToSend = ["potato", "carrot"]

        //Should fetch and receive all data for a card by its name
        const result = await loadCardsByName(dataToSend)

        //Make sure each api call was sent
        for (let data of dataToSend){
            expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/api/getCardByName?name=${data}`);
        }

        for (let data of result){
            expect(dataToSend.indexOf(data.name)).toBeTruthy()
        }

        expect(result.length).toBe(dataToSend.length)
    
    })
});
