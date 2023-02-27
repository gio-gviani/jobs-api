const MAX = 25;
    const UserSchema = require("../mongdodb/models/user");

const genKey = () => {
    //create a base-36 string that is always 30 chars long a-z0-9 - 'an0qrr5i9u0q4km27hv2hue3ywx3uu'
    return [...Array(30)]
      .map((e) => ((Math.random() * 36) | 0).toString(36))
      .join('');
};

const createUser = async (_email, req) => {
    let today = new Date().toISOString().split('T')[0];
    const newUser = await UserSchema.create({
        id: Date.now().toString(),
        api_key: genKey(),
        email: _email,
        host: req.headers.host,
        usage: [{ date: today, count: 0 }],
    });
    console.log(newUser)
    return newUser;
};

const validateKey = async (req, res, next) => {
    const usersDB = await UserSchema.find({});
    //Where is the API key expected to be?
    let host = req.headers.host;
    let api_key = req.header('x-api-key'); //version 3 using a header
    let account = await usersDB.find((user) => user.api_key == api_key);
    // find() returns an object or undefined
    if (account) {
        //check the usage
        let today = new Date().toISOString().split('T')[0];
        let usageIndex = account.usage.findIndex((day) => day.date == today);
        if (usageIndex >= 0) {
            //already used today
            if (account.usage[usageIndex].count >= MAX) {
                //stop and respond
                res.status(429).send({
                error: {
                    code: 429,
                    message: 'Max API calls exceeded.',
                },
                });
            } else {
                //have not hit todays max usage
                account.usage[usageIndex].count++;
                next();
            }
        } else {
            //not today yet
            account.usage.push({ date: today, count: 1 });
            //ok to use again
            next();
        }
    } else {
        //stop and respond
        res.status(403).send({ error: { code: 403, message: 'You not allowed.' } });
    }
    };

module.exports = { createUser, validateKey };
