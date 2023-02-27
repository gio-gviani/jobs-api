const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cron = require('node-cron');
const connectDB = require('./mongdodb/connect');
const API = require("./middleware/apikeys")
const fetchMainPage = require('./fetchBody')
const fetchJobs = require("./fetchJobs")
const port = process.env.PORT || 5000;
const url = 'https://jobs.ge/en/';  
const api = require("./middleware/apikeys");

// host validation from the github repo 
// error 404 page
const app = express();
app.use(express.json());
app.use(cors());

let jobs = []
let techJobs = []
let management = []
let finance = []
let logistics = []
let construction = []
let law = []
let medicine = []
let security = []

fetchJobs(url, jobs); // initializing the function on startup
fetchJobs(`${url}?cid=6`, techJobs);
fetchJobs(`${url}?cid=1`, management);
fetchJobs(`${url}?cid=3`, finance);
fetchJobs(`${url}?cid=5`, logistics);
fetchJobs(`${url}?cid=11`, construction); // construction repari 11
fetchJobs(`${url}?cid=7`, law); // law 7

cron.schedule('0 0 * * *', () => { // function reruns every day
    fetchJobs(url, jobs); 
    // fetchJobs(`${url}?cid=8`, medicine); // medicine 8 
    fetchJobs(`${url}?cid=6`, techJobs);
    fetchJobs(`${url}?cid=1`, management);
    fetchJobs(`${url}?cid=3`, finance);
    fetchJobs(`${url}?cid=5`, logistics);
    fetchJobs(`${url}?cid=11`, construction); // construction repari 11
    fetchJobs(`${url}?cid=7`, law); // law 7
});

// fetchJobs(`${url}?cid=17`, security); // security safety 17
// fetchJobs(`${url}?cid=2`, techJobs); // sales procurement 2
// fetchJobs(`${url}?cid=4`, techJobs); // pr marketing 4
// fetchJobs(`${url}?cid=18`, techJobs); // general technical staff 18
// fetchJobs(`${url}?cid=16`, techJobs); // cleaning 16
// fetchJobs(`${url}?cid=13`, techJobs); // media, publishing 13
// fetchJobs(`${url}?cid=21`, techJobs); // education 21
// fetchJobs(`${url}?cid=14`, techJobs); // beauty fashion 14
// fetchJobs(`${url}?cid=10`, techJobs); // food 10
// fetchJobs(`${url}?cid=9`, techJobs); // other 9
// fetchJobs(`${url}?cid=17`, security); // security safety 17
// fetchJobs(`${url}?cid=8`, medicine); // medicine 8 

app.get('/', (req, res) => {
    res.status(200).send({ data: { message: 'Everything works fine.' } });
});

app.post("/jobs/register", async (req, res) => {
    console.log(req);
    
    let email = req.body.email;
    let user = await API.createUser(email, req);
    res.status(201).send({success: true, data: user});
})

app.get("/jobs/:cat", API.validateKey, (req, res) => {
    const cat = req.params.cat;
    let data = {request: "success", data: "no data found or no category."};
    switch(cat) {
        case "tech":
            data = techJobs;
            break;
        case "all": 
            data = jobs;
            break;
        case "management":
            data = management;
            break;
        case "finance": 
            data = finance;
            break;
        case "logistics":
            data = logistics
            break;  
        case "construction":
            data = construction
            break;
        case "law":
            data = law;
            break;
    }
    
    res.status(200).send(JSON.stringify(data));
})

app.get('*', API.validateKey, (req, res) => {
    res.send({error: "No routes found"});
  })

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error);
    }
}

startServer();

