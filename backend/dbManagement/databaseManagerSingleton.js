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

export class DatabaseManagerSingleton {
    constructor() {
        this.db = cardJSON;
    }
    getCards() {
        return this.db
    }
    getCardFromID(id) {
        return this.getCards()[id]
    }
}

const DMS = new DatabaseManagerSingleton();
export default DMS;