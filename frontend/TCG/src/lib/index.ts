import type { card, classCard } from './types';

export async function loadCardAndClassData() {
	const response1 = await fetch('http://localhost:3000/api/getAllClasses');
	const response2 = await fetch('http://localhost:3000/api/getAllCards');

	const data1: classCard[] = await response1.json();
	const data2: card[] = await response2.json();
	return { classCardData: data1, cardData: data2 };
}

export async function loadCardsByName(cardDataNames: string[]) {
	let dataResponse = [];
	for (let index in cardDataNames) {
		let response = await fetch(
			`http://localhost:3000/api/getCardByName?name=${cardDataNames[index]}`
		);
		let data: card = await response.json();
		dataResponse.push(data);
	}

	return dataResponse;
}
