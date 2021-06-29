const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const {verifyToken, verifyRefreshToken} = require('../middleware/checkAuth');
const {verifyAdmin} = require('../middleware/checkAdmin');

router.post("/login", userController.login);
router.post("/signup", userController.signUp);
router.post("/refresh", verifyRefreshToken, userController.refreshToken);
router.post("/", verifyToken, verifyAdmin, userController.create);
router.put("/:id", verifyToken, verifyAdmin, userController.edit);
router.get("/page/:pageId", userController.getPerPage);
router.get("/count", userController.getQuantity);

module.exports = router;