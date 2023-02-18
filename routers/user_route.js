const express=require("express");
const register=require("../controllers/signup_ctrl");
const form=require("../controllers/form");
const login=require("../controllers/login_ctrl");
const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.post("/form",form);

module.exports= router;