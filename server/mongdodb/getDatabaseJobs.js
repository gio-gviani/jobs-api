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
                initializeArray = await tech.find({});
                return initializeArray;
            case "all":
                initializeArray = await all.find({});
                return initializeArray;
            case "management":
                initializeArray = await management.find({});
                return initializeArray;
            case "finance":
                initializeArray = await finance.find({});
                return initializeArray;
            case "logistics":
                initializeArray = await logistics.find({});
                return initializeArray;
            case "construction":
                initializeArray = await construction.find({});
                return initializeArray;
            case "law":
                initializeArray = await law.find({});
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
