const axios = require('axios');
const cheerio = require("cheerio");

const fetchMainPage = async (href) => {
    try {
        const bodyPage = await axios.get(`https://jobs.ge${href}`);
        const $bodyPage = cheerio.load(bodyPage.data);
        let data;
        $bodyPage(
            "#job > table > tbody > tr > td:nth-child(1) > table.dtable > tbody > tr:nth-child(4)"
        ).each((ind, ele) => {
            data = $bodyPage(ele).text().replace(/\s+/g, " ").trim();
        })
        return data;
    } catch (error) {
        console.log(error)
    }
}

module.exports = fetchMainPage
