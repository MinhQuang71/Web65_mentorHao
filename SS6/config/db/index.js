import { MongoClient } from "mongodb";

const url = 'mongodb+srv://quanghoang508:Kiwi123%40%40%40@minhquang.koczoc9.mongodb.net/web-65';
const client = new MongoClient(url);
const db = client.db('web-65');
export const restauRentCollection = db.collection('Restaurant')

async function dbConnect() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
      
    } catch (error) {
        console.log("connect fail")
    }
  
  }

  export default dbConnect;