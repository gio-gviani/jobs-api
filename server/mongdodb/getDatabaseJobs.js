const all = require("./models/all");
const tech = require("./models/tech");
const management = require("./models/management");
const law = require("./models/law");
const finance = require("./models/finance");
const logistics = require("./models/logistics");
const construction = require("./models/construction");

const getJobByCat = async (cat) => {
    try {
        let initializeArray;
        switch (cat) {
            case "tech":
                initializeArray = await tech.findOne({});
                return initializeArray;
            case "all":
                initializeArray = await all.findOne({});
                return initializeArray;
            case "management":
                initializeArray = await management.findOne({});
                return initializeArray;
            case "finance":
                initializeArray = await finance.findOne({});
                return initializeArray;
            case "logistics":
                initializeArray = await logistics.findOne({});
                return initializeArray;
            case "construction":
                initializeArray = await construction.findOne({});
                return initializeArray;
            case "law":
                initializeArray = await law.findOne({});
                return initializeArray;
        }
        return initializeArray;
    } catch (error) {
        console.log(error)
    }
}

const deleteCollections = async () => {
    try {
        await all.deleteMany({});
        await tech.deleteMany({});
        await management.deleteMany({});
        await law.deleteMany({});
        await finance.deleteMany({});
        await logistics.deleteMany({});
        await construction.deleteMany({});
    } catch (error) {
        console.log(error)
    }
}

module.exports = getJobByCat, deleteCollections;
