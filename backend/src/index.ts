import express from 'express'
import cors from 'cors';
import card_router from './Routes/cards_router';
const app = express();
const PORT = 3000;


// Enable CORS with the specified options
app.use(cors());

// Enable pre-flight requests for all routes
app.options('*', cors());


app.use('/api',card_router)

app.listen(PORT, ()=>{
  console.log(`We are running on port ${PORT}`);
})