const all = require("./models/all");
const tech = require("./models/tech");
const management = require("./models/management");
const law = require("./models/law");
const finance = require("./models/finance");
const logistics = require("./models/logistics");
const construction = require("./models/construction");

const getData = async (cat) => {
    try {
        let initializeArray;
        switch(cat) {
            case "tech":
                initializeArray = await tech.find({}); 
                return initializeArray;
                break;
            case "all":
                initializeArray = await all.find({}); 
                return initializeArray;
                break;
            case "management":
                initializeArray = await management.find({}); 
                return initializeArray;
                break;
            case "finance":
                initializeArray = await finance.find({}); 
                return initializeArray;
                break;
            case "logistics":
                initializeArray = await logistics.find({}); 
                return initializeArray;
                break;
            case "construction":
                initializeArray = await construction.find({}); 
                return initializeArray;
                break;
            case "law":
                initializeArray = await law.find({}); 
                return initializeArray;
                break;
        }
        return initializeArray()
    } catch(error) {
        console.log(error)
    }
}

module.exports = getData;
