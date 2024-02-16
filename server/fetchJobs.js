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
        let initializeArray;
        switch (cat) {
            case "tech":
                initializeArray = async () => {
                    const data = await tech.create({
                        data: array
                    })
                    return data;
                };
                break;
            case "all":
                initializeArray = async () => {
                    const data = await all.create({
                        data: array
                    })
                    return data;
                }
                break;
            case "management":
                initializeArray = async () => {
                    data = await management.create({
                        data: array
                    })
                    return data;
                }
                break;
            case "finance":
                initializeArray = async () => {
                    data = await finance.create({
                        data: array
                    })
                    return data;
                }
                break;
            case "logistics":
                initializeArray = async () => {
                    data = await logistics.create({
                        data: array
                    })
                    return data;
                }
                break;
            case "construction":
                initializeArray = async () => {
                    data = await construction.create({
                        data: array
                    })
                    return data;
                }
                break;
            case "law":
                initializeArray = async () => {
                    data = await law.create({
                        data: array
                    })
                    return data;
                }
                break;
        }
        return initializeArray;
    } catch (error) {
        console.log(error);
    }
}

module.exports = fetchJobs
