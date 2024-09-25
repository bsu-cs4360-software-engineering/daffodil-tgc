import express from 'express'
import DMS from '../dbManagement/databaseManagementSingleton.js';

const app = express();
const card_router = express.Router();
const cardList = DMS.getCardsList();
const cards = DMS.getCardsJSONOld();

card_router.get('/', (req,res) =>{
    res.json(cardList)
});


export default card_router