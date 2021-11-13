const express = require('express')
const { MongoClient, Collection } = require('mongodb');
require('dotenv').config();


const app = express()
const ObjectId = require('mongodb').ObjectId;
const email = require('mongodb').email;
const port = process.env.PORT || 5000;
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors())
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bbopj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('WE ARE BANGLADESH 4 WHEELERS HUB')
  })


  async function run() {
    try {
      await client.connect();
      const database = client.db("Tesla4wheeler");
      const allVhclCollection = database.collection("CatagoryCollection");
      const slider1Collection = database.collection("slider");
      const slider2Collection = database.collection("Slider2");
    


    //   app.get('/catagorydetail', async (req, res) => {
    //   console.log(req.query);
    //   const result =  allVhclCollection.find({});
    //   const count = await result.count();
    //   const page =req.query.page;
    //   const size = req.query.size;
    //   let products;
    //   if (page) {
    //     products = await result.skip(page*size).limit(parseInt(size)).toArray()
    //   }
    //   else{
    //     products = await result.toArray()
    //   }
   
     
     
    //   res.send({
    //     count,
    //     products
    //   })
    //   })

      app.get('/slider1Collection', async (req, res) => {

      const result =  slider1Collection.find({});
      const users = await result.toArray()
      res.send(users)
      })

      app.get('/allcatagogy', async (req, res) => {

      const result =  allVhclCollection.find({});
      const users = await result.toArray()
      res.send(users)
      })
      app.get('/allcatagogy/:id', async (req, res) => {
           
        const id = req.params.id;
        console.log(id);
        const quary = { _id: ObjectId(id)}
      const result =  allVhclCollection.find(quary);
      const users = await result.toArray()
      res.send(users)
      })

      //claints Data Get

    //   app.get('/Claint', async (req, res) => {

    //   const result = claintCollection.find({});
    //   const users = await result.toArray()
    //   res.send(users)
    //   })


    //Use POST to Get Data

      
    //  app.post("/productsOutput/bykeys",async(req,res)=>
    //   {
    //     const keys = req.body;
    //     console.log('Send to DB',req.body);
    //     const quary = {key:{$in: keys}}
        
    //     const products = await allProductsCollection.find(quary).toArray();
    //     // console.log(`A document was inserted with the _id: ${result.insertedId}`);
    //     res.json(products)
    //     //res.send('POST')
    //   })
          
       /*********Post A  Dynamic Cart Document to Data base**********                      */

    //   app.post("/userOrder",async(req,res)=>
    //   {
    //     const order = req.body;
    //     console.log('Send Cart to DB' , order);
    //     const result = await  orderCollection.insertOne(order);
    //     console.log(`A Cart was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
      
    //   })





      //Post A Document to Data base

      
    //  app.post("/userInput",async(req,res)=>
    //   {
    //     const newUser = req.body;
    //     console.log('Send to DB',req.body);
    //     const result = await  userDataCollection.insertOne(newUser);
    //     console.log(`A document was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
    //   })



      //POST a Comment



    //   app.post("/comment",async(req,res)=>
    //   {
    //     const newUser = req.body;
    //     console.log('Send to DB',req.body);
    //     const result = await  commentDataCollection.insertOne(newUser);
    //     console.log(`A comment was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
    //   })
     


      // GET A COMMENT

    //   app.get('/comment', async (req, res) => {

    //     const result = commentDataCollection.find({});
    //     const users = await result.toArray()
    //     res.send(users)
    //   })


      //Post A  Dynamic Cart Document to Data base

    //   app.post("/userCart",async(req,res)=>
    //   {
    //     const newData = req.body;
    //     console.log('Send Cart to DB',req.body);
    //     const result = await  userCartDataCollection.insertOne(newData).toArray;
    //     console.log(`A Cart was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
       
    //   })

    
      /****All claints Cart Data Get*****/

    //   app.get('/userCart', async (req, res) => {

    //     const result = userCartDataCollection.find({});
    //     const users = await result.toArray()
    //     res.send(users)
    //     })

         /****Single claints Cart Data Get*****/

        // app.get('/userCart/:id', async (req, res) => {

        // const result = userCartDataCollection.findOne({});
        // const users = await result.toArray()
        // res.send(users)
        // })

       /*******************   Delete A Cart    ***********************************/
          
    //    app.delete('/userCart/:id',async(req,res)=>
    //     {
    //     const id = req.params.id;
    //     console.log(id);
    //     const quary = { _id: ObjectId(id)}
    //     const result= await userCartDataCollection.deleteOne(quary);
    //     res.json(result)
    //     })


      /********************************** Update Info ***********************************/
    //    app.put('/userCart/:id',async(req,res)=>
    //     {
    //     const id = req.params.id;
    //     console.log(id);
    //     const quary = { _id: ObjectId(id)}
    //     const options = { upsert: true };
    //     const updateDoc = {
    //       $set: {
    //         status: `Approve`
    //       },
    //     };
    //     const result= await userCartDataCollection.updateOne(quary,updateDoc,options);
    //     res.json(result)
    //     })




     
    } finally {
     // await client.close();
    }
  }
  run().catch(console.dir);

  app.listen(port, () => {
    console.log(`My Web is  listening at >>>> http://localhost:${port}`)
  })