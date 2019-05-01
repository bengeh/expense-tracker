import mongoose from "mongoose";

const { ObjectId } = require('mongodb');
const Schema = mongoose.Schema;

// Create the User Schema.
const ExpenseSchema = new Schema({
  id: {
    type: ObjectId,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense;