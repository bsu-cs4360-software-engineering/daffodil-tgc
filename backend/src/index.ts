import express from 'express'
import cors from 'cors';
import card_router from './Routes/cards_router';
const app = express();
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:5173', // Default SvelteKit dev server port
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies if you're using them
  optionsSuccessStatus: 204
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Enable pre-flight requests for all routes
app.options('*', cors(corsOptions));


app.use('/api',card_router)

app.listen(PORT, ()=>{
  console.log(`We are running on port ${PORT}`);
})