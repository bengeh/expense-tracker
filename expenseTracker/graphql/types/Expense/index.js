export default `
  type Expense {
    id: String!
    name: String!
    price: String!
  }
  type Query {
    expenseByName(name: String!): Expense
    expenses: [Expense]
  }
  type Mutation {
    addExpense(name: String!, price: String!): Expense
    editExpense(name: String, price: String): Expense
    deleteExpense(name: String, price: String): Expense
  }
`;