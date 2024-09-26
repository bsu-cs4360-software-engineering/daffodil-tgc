import express from 'express';
import { getDMS } from '../dbManagement/databaseManagementSingleton.js';

const card_router = express.Router();

(async () => {
  const DMS = await getDMS();
  
  card_router.get('/', async (req, res) => {
    const cards = await DMS.getCardsJSONOld();
    res.json(cards);
  });
})();

export default card_router;