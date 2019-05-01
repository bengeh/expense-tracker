import Expense from "../../../models/Expense";
const { ObjectId } = require('mongodb');

require('dotenv').config()


export default {
  Query: {
    expenseByName: (root, args) => {
      console.log("inside expense by name...")
      return new Promise((resolve, reject) => {
        Expense.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    expenses: () => {
      return new Promise((resolve, reject) => {
        Expense.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addExpense: (root, { name, price }) => {
      const id = ObjectId()
      console.log(id)
      const newExpense = new Expense({ id, name, price });

      return new Promise((resolve, reject) => {
        newExpense.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editExpense: (root, { name, price }) => {
      return new Promise((resolve, reject) => {
        Expense.findOneAndUpdate({ name }, { $set: { name, price } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteExpense: (root, args) => {
      return new Promise((resolve, reject) => {
        Expense.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};