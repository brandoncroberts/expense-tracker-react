// @decs Get all transcations
// @route GET /api/v1/transactions
// @access Public

exports.getTransactions = (req, res, next) => {
  res.send("GET Transactions");
};

// @decs Add transcation
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = (req, res, next) => {
  res.send("POST Transaction");
};

// @decs Delete all transcations
// @route DELETE /api/v1/transaction
// @access Public

exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE Transaction");
};
