const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const connectDB=require("./config/db");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
connectDB();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to AuthDatabase");});

// const shoeSchema=new mongoose.Schema({
//   brand: String,
//   name: String,
//   price: String,
//   image: String,
// });

// const cartDB=mongoose.createConnection(process.env.MONGO_URI_CART, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const Shoe=cartDB.model("cart", shoeSchema);

// app.post("/api/cart/add", (req, res) => {
//   const shoeData=req.body;
//   const newShoe=new Shoe(shoeData);
//   newShoe.save((err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Error saving to database");
//     } else {
//       res.status(200).send("Shoe added to cart successfully");
//     }
//   });
// });


const userSchema=new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String
});

const JWT_SECRET=process.env.JWT_SECRET;

const User=mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.json("hello its me your backend");
});

app.post("/login", async (req, res) => {
  const { email, password }=req.body;
  try {
    const user=await User.findOne({ email: email });
    if (user) {
      if (password===user.password) {
        const token=jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.send({ message: "login success", token: token });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not registered");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
app.get("/api/cart/items", async (req, res) => {
  try {
    const cartItems=await Cart.find();
    res.json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/register", async (req, res) => {
  const { fullname, username, email, password }=req.body;
  try {
    const existingUser=await User.findOne({ email: email });
    if (existingUser) {
      res.send({ message: "User already exists" });
    } else {
      const newUser=new User({ fullname, username, email, password });
      await newUser.save();
      const token=jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
      res.send({ message: "Registration successful", token: token });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie('token');
  res.send({ message: "Logout successful" });
});

const PORT=process.env.PORT||6969;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
