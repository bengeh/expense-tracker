import { mergeTypes } from "merge-graphql-schemas";

import Expense from "./Expense/";

const typeDefs = [Expense]; //add here for more types

export default mergeTypes(typeDefs, { all: true });