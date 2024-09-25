import express from 'express'
import DMS from '../dbManagement/databaseManagementSingleton.js';

const app = express();
const card_router = express.Router();
const card_db = DMS.getCards();

card_router.get('/', (req,res) =>{
    res.json(card_db)
});


export default card_router