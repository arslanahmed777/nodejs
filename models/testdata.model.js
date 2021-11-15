const mongoose = require("mongoose");


const testdataSchema = new mongoose.Schema(
    {
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
        access_date: {
            type: Date,
        },

    },
    { timestamps: true }
);

const Testdata = mongoose.model("Testdata", testdataSchema);
module.exports = Testdata;