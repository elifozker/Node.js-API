require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/products',productRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.set("strictQuery",false);
mongoose.connect(MONGO_URL).then(() => {
  console.log("Connected to mongodb");
  app.listen(PORT, () => {
    console.log(`Node API listening on port ${PORT}`)
  });
}).catch(() => {
  console.log(error);
});