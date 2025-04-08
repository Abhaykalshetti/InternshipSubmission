import express from "express";
import bcrypt  from "bcryptjs";
import createUser from "../methods/CreateUser.js";
import findUser from "../methods/findUser.js";
const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  
  try {                                           //  For creating the user  i crate the route for optional
    const {  email, password } = req.body;
    let user = await createUser(email,password);
    if (user) return res.status(400).json({ message: "User already exists" });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Login User
router.post("/login", async (req, res) => {
 
  try {
    const { email, password } = req.body;
    
    const user = await findUser(email);
   
    
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
   
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
   
    res.json({ message:"Success Login" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
