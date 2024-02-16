const axios = require('axios');
const cheerio = require("cheerio");
const all = require("./mongdodb/models/all");
const tech = require("./mongdodb/models/tech");
const management = require("./mongdodb/models/management");
const law = require("./mongdodb/models/law");
const finance = require("./mongdodb/models/finance");
const logistics = require("./mongdodb/models/logistics");
const construction = require("./mongdodb/models/construction");


const fetchJobs = async (url, cat) => {
    const array = [];
    try {
        const res = await axios.get(url, { timeout: 20000 });
        let $ = await cheerio.load(res.data);
        $(
            "#job_list_table > tbody > :not(:first-child)"
        ).each(async (i, e) => {
            let href;
            let data = {
                title: undefined,
                company: undefined,
                posted: undefined,
                expires: undefined,
                body: undefined,
                companyImage: undefined
            };

            $(e).children(":not(first-child)").each((index, element) => {
                switch (index) {
                    case 1:
                        href = $(element).children("a").attr('href')
                        data.body = `https://jobs.ge${href}`;
                        data.title = $(element).text().replace(/\s+/g, " ").trim()
                        break;
                    case 2:
                        const image = $(element).children("a").children("img").attr('src');
                        image ? data.companyImage = `https://jobs.ge/${image}` : data.companyImage = undefined
                    case 3:
                        data.company = $(element).text().replace(/\s+/g, " ").trim()
                        break;
                    case 4:
                        data.posted = $(element).text().replace(/\s+/g, " ").trim()
                        break;
                    case 5:
                        data.expires = $(element).text().replace(/\s+/g, " ").trim()
                        break;

                }
            })
            // data["body"] = await fetchMainPage(href); // is not working atm 
            array.push(data);
        })
        switch (cat) {
            case "tech":
                await tech.create({
                    "data": array
                })
                break;
            case "all":
                await all.create({
                    "data": array
                })
                break;
            case "management":
                await management.create({
                    "data": array
                })
                break;
            case "finance":
                await finance.create({
                    "data": array
                })
                break;
            case "logistics":
                await logistics.create({
                    "data": array
                })
                break;
            case "construction":
                await construction.create({
                    "data": array
                })
                break;
            case "law":
                await law.create({
                    "data": array
                })
                break;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = fetchJobs
