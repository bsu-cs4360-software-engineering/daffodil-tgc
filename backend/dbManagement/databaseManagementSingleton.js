import cardJSON from '../db.json' with { type: 'json' }

/*
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'mongodb+srv://henricksonethan:<db_password>@carddata.mpiki.mongodb.net/?retryWrites=true&w=majority&appName=CardData';

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  */


  //to replace with MongoDB database
export class DatabaseManagementSingleton {
    constructor() {
        this.db = cardJSON; 
    }
    getCardsJSON() {
        return this.db
    }
    getCardsList() {
      var cardList = []
      for (var id in this.getCardsJSON()) {
          cardList.push( { [id]: this.getCardFromID(id) } )
      }
      return cardList
    }
    getCardsJSONOld() {
      const newDB = this.getCardsJSON();
      return Object.entries(newDB).map(([key, entry]) => {
          entry.id = key;
          return entry;
      });
  }
    getCardFromID(id) {
        return this.getCardsJSON()[id]
    }
}

const DMS = new DatabaseManagementSingleton();
export default DMS;