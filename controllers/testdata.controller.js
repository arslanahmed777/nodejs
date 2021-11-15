const { FormatDate } = require("../functions/functions");
// importing models
const Testdata = require("../models/testdata.model");

async function gettestdata(req, res) {
  const { PerPage, pageNo, param_list } = req.body;
  const fromdate = param_list[0]["value"]
    ? param_list[0]["value"]
    : FormatDate(new Date(), "yyyy-mm-dd");
  const todate = param_list[1]["value"]
    ? param_list[1]["value"]
    : FormatDate(new Date(), "yyyy-mm-dd");
  try {
    const total_records = await Testdata.countDocuments({
      access_date: { $gte: new Date(fromdate), $lte: new Date(todate) },
    }).exec();
    const testdata = await Testdata.find({
      access_date: { $gte: new Date(fromdate), $lte: new Date(todate) },
    })
      .skip(pageNo > 0 ? (pageNo - 1) * PerPage : 0)
      .limit(PerPage);
    let updated_data = [];

    testdata.forEach(
      ({ first_name, last_name, email, gender, access_date, _id }) => {
        let obj = {
          first_name,
          last_name,
          email,
          gender,
          access_date,
          total_records,
          _id,
        };
        updated_data.push(obj);
      }
    );
    res.send(updated_data);
  } catch (error) {
    console.log("testdata catch error:", error);
    return res.send(error);
  }
}

async function addtestdata(req, res) {
  const { first_name, last_name, email, gender, access_date } = req.body;
  const single_Testdata = new Testdata({
    first_name,
    last_name,
    email,
    gender,
    access_date: new Date(access_date),
  });
  single_Testdata.save(function (err, results) {
    console.log(results._id);
  });
}

async function deletetestdata(req, res) {
  const id = req.params.id;

  try {
    const response = await Testdata.findByIdAndRemove({ _id: id });
    console.log("response", response);
    res.send(response);
  } catch (error) {
    console.log("testdata catch error:", error);
    return res.send(error);
  }
}

module.exports = {
  gettestdata,
  addtestdata,
  deletetestdata,
};
