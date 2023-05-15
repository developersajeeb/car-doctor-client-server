const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d9amltv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const verifyJWT = (req, res, next) => {
    console.log('hitting JWT');
    console.log(req.headers.authorization);
    const authorization = req.headers.authorization; 
    if(!authorization){
        return res.status(401).send({error: true, massage: 'unauthorized access'})
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
        if(error){
            return res.status(401).send({error: true, massage: 'unauthorized access'})
        }
        req.decode = decode;
        next();
    })
}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const servicesCollection = client.db('carDoctor').collection('services');
        const checkOutCollection = client.db('carDoctor').collection('checkouts');

        //jwt
        app.post('/jwt', (req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
            res.send({token})
        })

        //services
        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }

            const options = {
                // Include only the `title` and `imdb` fields in each returned document
                projection: { title: 1, price: 1, service_id: 1, img: 1 },
            };

            const result = await servicesCollection.findOne(query, options);
            res.send(result);
        })

        // checkouts
        app.get('/checkouts', verifyJWT, async (req, res) => {
            let query = {}
            if (req.query?.email) {
                query = { email: req.query.email }
            }
            const result = await checkOutCollection.find(query).toArray();
            res.send(result)
        })

        app.post('/checkouts', async (req, res) => {
            const checkout = req.body;
            console.log(checkout);
            const result = await checkOutCollection.insertOne(checkout);
            res.send(result)
        })

        app.patch('/checkouts/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updatedCheckOut = req.body;
            console.log(updatedCheckOut);
            const updateDoc = {
                $set: {
                    status: updatedCheckOut.status
                }
            };
            const result = await checkOutCollection.updateOne(filter, updateDoc);
            console.log(result);
            res.send(result)

        })

        app.delete('/checkouts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await checkOutCollection.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('car doctor is running')
})

app.listen(port, () => {
    console.log('car doctor ser is running on port', port);
})