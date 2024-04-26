const express=require("express");
const app=express();
const cors=require("cors");

require("dotenv").config();


const AuthDB=require("./config/db");
const ItemDB=require("./config/Itemdb");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const Item=require("./models/itemsModel.js")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

AuthDB();
ItemDB();
const shoeSchema=new mongoose.Schema({
  brand: String,
  name: String,
  price: String,
  image: String,
});

const Shoe=mongoose.model("Shoe", shoeSchema);

app.post("/api/cart/add", (req, res) => {
  const shoeData=req.body;
  const newShoe=new Shoe(shoeData);
  newShoe.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving to database");
    } else {
      res.status(200).send("Shoe added to cart successfully");
    }
  });
});


app.get("/userdata", async (req, res) => {
  try {
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token, JWT_SECRET);
    const userId=decoded.userId;
    const user=await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/updateuserdata", async (req, res) => {
  try {
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token, JWT_SECRET);
    const userId=decoded.userId;
    await User.findByIdAndUpdate(userId, req.body);
    res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const verifyToken=async (req, res, next) => {
  const token=req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
  try {
    const decoded=jwt.verify(token, JWT_SECRET);
    req.user=decoded.user;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

app.delete('/deleteuser/:userId', verifyToken, async (req, res) => {
  const userId=req.params.userId;
  try {
    const user=await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await User.findByIdAndDelete(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(userId);
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
const JWT_SECRET=process.env.JWT_SECRET;

const userSchema=new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String
});

const User=mongoose.model("User", userSchema);

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
    console.error("Error registering user", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
app.post("/login", async (req, res) => {
  const { email, password }=req.body;
  try {
    const user=await User.findOne({ email: email });
    if (user) {
      if (password===user.password) {
        const token=jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.send({ message: "Login success", token: token });
      } else {
        res.send({ message: "Wrong credentials" });
      }
    } else {
      res.send("Not registered");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


app.get('/api/items', async (req, res) => {
  try {
    const items=await Item.find();
    res.json(items);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/", (req, res) => {
  res.json("Hello, this is your backend server");
});



app.post("/logout", (req, res) => {
  res.clearCookie('token');
  res.send({ message: "Logout successful" });
});

const PORT=process.env.PORT||6969;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
