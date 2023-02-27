const axios = require('axios');
const cheerio = require("cheerio");

const fetchJobs = async (url, array) => {
    try {
        const res = await axios.get(url, { timeout: 20000});   
        let $ = await cheerio.load(res.data);
        $(
            "#job_list_table > tbody > :not(:first-child)"       
        ).each(async (i, e) => {
            let href;
            let data = {
                title : undefined,
                company : undefined,
                posted : undefined,
                expires : undefined,
                body: undefined,
                companyImage: undefined
            };

            $(e).children(":not(first-child)").each((index, element) => {
                switch(index) {
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
        console.log(array)
    } catch (error) {
        console.log(error);
    }
}

module.exports = fetchJobs
