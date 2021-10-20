
async function updateProfile(req, res) {
    console.log(req.body);
    res.send("All is well")
}
module.exports = {
    updateProfile,
};