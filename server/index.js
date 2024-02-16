const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cron = require('node-cron');
const getData = require("./mongdodb/getDatabaseJobs").getJobByCat;
const connectDB = require('./mongdodb/connect');
const API = require("./middleware/apikeys")
const fetchMainPage = require('./fetchBody')
const fetchJobs = require("./fetchJobs")
const port = process.env.PORT || 5000;
const url = 'https://jobs.ge/en/';
const deleteCollections = require("./mongdodb/getDatabaseJobs").deleteCollections;

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "*"
    }
));

// scrape data function to get the data from the webpage - not working atm
const scrapeData = async () => {
    deleteCollections();
    await fetchJobs(url, "all");
    console.log("\u001b[1;32m finished all fetch")
    await fetchJobs(`${url}?cid=6`, "tech");
    console.log("\u001b[1;32m finished tech fetch")
    await fetchJobs(`${url}?cid=1`, "management");
    console.log("\u001b[1;32m finished management fetch")
    await fetchJobs(`${url}?cid=3`, "finance");
    console.log("\u001b[1;32m finished finance fetch")
    await fetchJobs(`${url}?cid=5`, "logistics");
    console.log("\u001b[1;32m finished logistics fetch")
    await fetchJobs(`${url}?cid=11`, "construction"); // construction repari 11
    console.log("\u001b[1;32m finished construction fetch")
    fetchJobs(`${url}?cid=7`, "law"); // law 7
    console.log("\u001b[1;32m finished law fetch")

}

// Cron schedule to fetch new data every month
cron.schedule('0 0 1 * *', async () => {
    const result = await deleteCollections();
    scrapeData();
});

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

app.post("/register", async (req, res) => {
    let email = req.body.email;
    let user = await API.createUser(email, req);
    res.status(201).send({ success: true, data: user });
})

app.get("/:cat", API.validateKey, async (req, res) => {
    const cat = req.params.cat;
    data = await getData(cat) || { request: "success", data: "no data found or no category." };
    res.status(200).send(JSON.stringify(data));
})

app.get('*', API.validateKey, (req, res) => {
    res.send({ error: "No routes found" });
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log('Server started on port 8080'));
        scrapeData();
    } catch (error) {
        console.log(error);
    }
}

startServer();

