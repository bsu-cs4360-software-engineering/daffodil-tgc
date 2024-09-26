import { MongoClient } from 'mongodb';

class DatabaseManagementSingleton {
  uri: string;
  client: MongoClient;
  database: any;
  cardCollection: any;
  classCollection: any;
  constructor() {
    this.uri = "mongodb+srv://dbUSER:daffodil@carddata.mpiki.mongodb.net/?retryWrites=true&w=majority&appName=CardData";
    this.client = new MongoClient(this.uri);
    this.database = this.client.db("Dungeonstone")
    this.cardCollection = this.database.collection("cardData")
    this.classCollection = this.database.collection("classData")
  }

  async getAllCards() {
    let docs = this.cardCollection.find().toArray(); 
    return docs
  }

  async getCardByName(name: string) {
    const doc = await this.cardCollection.findOne({ name: `${name}`})
    return doc
  }

  async getAllClasses() {
    const docs = await this.classCollection.find().toArray();
    return docs
  }
  

  async close(){
    await this.client.close()
  }
}

const DMS = new DatabaseManagementSingleton()
export default DMS 
