
const Paginate = require("../functions/Paginate")
// importing models
const Testdata = require("../models/testdata.model");

async function testdate(req, res) {

    const { PerPage, pageNo } = req.body
    const testdata = await Testdata.find().skip(pageNo > 0 ? ((pageNo - 1) * PerPage) : 0).limit(PerPage)
    if (testdata.length === 0) return res.status(200).json({ error: "There are no records", });
    try {
        res.send(testdata);
    } catch (error) {
        console.log("testdata catch error:", error);
        return res.send(error);
    }
}

module.exports = {
    testdate,
};
