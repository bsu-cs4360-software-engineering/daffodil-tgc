import { MongoClient, ServerApiVersion } from 'mongodb';

let instance = null;

class DatabaseManagementSingleton {
  constructor(client) {
    this.client = client;
    this.db = null;
    this.collection = null;
  }

  static async getInstance() {
    if (!instance) {
      const uri = "mongodb+srv://dbUSER:daffodil@carddata.mpiki.mongodb.net/?retryWrites=true&w=majority&appName=CardData";
      const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      await client.connect();

      instance = new DatabaseManagementSingleton(client);
      await instance.loadDatabase();
    }
    return instance;
  }

  async loadDatabase() {
    const dbName = "Dungeonstone";
    const collectionName = "oldCardData";

    this.db = this.client.db(dbName);
    this.collection = this.db.collection(collectionName);
  }

  async getCardsJSON() {
    const documents = await this.collection.find().toArray();
    return documents.map(({ _id, ...rest }) => rest)[0];
  }

  async getCardsList() {
    const cards = await this.getCardsJSON();
    return cards.map((card, index) => ({ [index]: card }));
  }

  async getCardsJSONOld() {
    const newDB = await this.getCardsJSON();
      return Object.entries(newDB).map(([key, entry]) => {
          entry.id = key;
          return entry;
      });
  }

  async getCardFromID(id) {
    const cards = await this.getCardsJSON();
    return cards[id];
  }
}

// Export a method to get the singleton instance
export async function getDMS() {
  return await DatabaseManagementSingleton.getInstance();
}