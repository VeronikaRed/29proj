const express = require("express");
const router = express.Router();
const cardController = require('../controllers/cardController');
const {verifyToken} = require('../middleware/checkAuth');
const {verifyAdmin} = require('../middleware/checkAdmin');

router.get("/page/:pageId", cardController.getPerPage);
router.get("/count", cardController.getQuantity);
router.get("/:id", cardController.card);
router.post("/", verifyToken, verifyAdmin, cardController.create);
router.put("/:id", verifyToken, verifyAdmin, cardController.edit);

module.exports = router;