import mongoose from "mongoose"


export async function dbConnect() {
  mongoose.connect(process.env.VITE_MONGO_URI, {
    dbName: process.env.VITE_DBNAME
  })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log('Unable to connect to database', err))
}

