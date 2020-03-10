const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require("../controllers/transactions");

router
  .route("/")
  .get(getTransactions)
  .post(addTransaction);

// This needs a seperate router call because it requires an ID
router.route("/:id").delete(deleteTransaction);

module.exports = router;
