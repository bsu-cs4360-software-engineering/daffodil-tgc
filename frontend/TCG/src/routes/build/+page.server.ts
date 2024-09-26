import type { card } from '$lib/types';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
    const response = await fetch("http://localhost:3000/api")
    const data: card[] = await response.json()
	return { cardData: data};
};
