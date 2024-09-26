import type { card } from '$lib/types';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
    const response = await fetch("http://localhost:3000/api/getAllCards")
    const data: card[] = await response.json()
    console.log(data)
	return { cardData: data};
};
