const express = require("express");
const {
  getOverview,
  getTour,
  getLoginFrom,
  
} = require("../controllers/viewsController");

const { isLoggedIn } = require("./../controllers/authController");
const router = express.Router();

router.use(isLoggedIn);

router.get("/", getOverview);
router.get("/tour/:slug", getTour);
router.get("/login", getLoginFrom);

module.exports = router;
