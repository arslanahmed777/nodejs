// importing models
const Users = require("../models/users.model");

async function signup(req, res) {
  let { name, email, password } = req.body;
  const user = await Users.findOne({ email: email });
  if (user)
    return res
      .status(200)
      .json({ error: "This Email already exist in database" });
  try {
    const newuser = new Users({
      name: name,
      email: email,
      password: password,
    });
    const newUser = await newuser.save();
    email = newUser.email;
    password = newUser.password;
    res.send({ email, password });
  } catch (error) {
    console.log("Signup catch error:", error);
    return res.send(error);
  }
}

// router.post("/signup", (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         bcrypt.hash(password, 10).then((hash) => {
//             const user = new users({
//                 name: username,
//                 email: email,
//                 password: hash,
//             });
//             user
//                 .save()
//                 .then((result) => {
//                     jwt.sign(
//                         { email: email },
//                         "asdfsasadfasdfse",
//                         { expiresIn: "1h" },
//                         (err, token) => {
//                             res.status(201).json({
//                                 message: "User added successfully!",
//                                 user: result,
//                                 token,
//                             });
//                         }
//                     );
//                 })
//                 .catch((error) => {
//                     console.log("Signup catch error:", error);
//                     res.status(404).json({
//                         error: error,
//                     });
//                 });
//         });
//     } catch (error) {
//         console.log("Signup catch error:", error);
//         return res.send(error);
//     }
// });

module.exports = {
  signup,
};
