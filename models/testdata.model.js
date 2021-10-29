const mongoose = require("mongoose");


const testdataSchema = new mongoose.Schema(
    {
        _id: {
            type: Number,
        },
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        email: {
            type: String,
        },
        gender: {
            type: String,
        },
        ip_address: {
            type: String,
        },

    },
    { timestamps: true }
);

const Testdata = mongoose.model("Testdata", testdataSchema);
module.exports = Testdata;