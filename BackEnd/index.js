import app from "./server.js";
import mongodb from "mongodb";
import reviewsDAO from "./dao/reviewsDAO.js"
require('dotenv').config();

const MongoClient = mongodb.MongoClient;
const devNAME = process.env.devNAME;
const DBPW = process.env.MONGO_DB_PW;
const uri = `mongodb+srv://${devNAME}:${DBPW}@cluster0.bbclzaz.mongodb.net/?retryWrites=true&w=majority`;


const port = 8000

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })
