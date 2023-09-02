const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express()
const port = 3000


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/product',async(req,res) => {
  try{
    const product = await Product.create(req.body)
    res.status(200).json(product);

  }catch(error){
    console.log(error);
    res.status(500).json({message: error.message})
  }
})


mongoose.connect('mongodb+srv://elifozker:Uykusuz01@cluster0.ba3zr3y.mongodb.net/crudsimple?retryWrites=true&w=majority').then(() =>{
  console.log("Connected to mongodb");
  app.listen(port, () => {
    console.log(`Node API listening on port ${port}`)
  });
}).catch(() =>{
  console.log(error);
});