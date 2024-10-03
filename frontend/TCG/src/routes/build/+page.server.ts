import type { card, classCard } from '$lib/types';
import type { PageServerLoad } from './$types';
import { loadCardAndClassData } from '$lib';

export const load: PageServerLoad = async () => {
	const data = await loadCardAndClassData();
	return { classCardData: data.classCardData, cardData: data.cardData };
};
