import type { card, classCard } from '$lib/types';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
    const response1 = await fetch("http://localhost:3000/api/getAllClasses")
    const response2 = await fetch("http://localhost:3000/api/getAllCards")

    const data1: classCard[] = await response1.json()
    const data2: card[] = await response2.json()
	return { classCardData: data1, cardData: data2};
};
