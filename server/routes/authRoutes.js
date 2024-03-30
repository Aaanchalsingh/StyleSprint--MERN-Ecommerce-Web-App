const express = require("express");
const { googleLogin } = require('../controllers/auth.js');

const authRoutes = express.Router();

authRoutes.post('/googlelogin', googleLogin);

module.exports = authRoutes;
