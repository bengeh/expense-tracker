import { mergeResolvers } from "merge-graphql-schemas";

import Expense from "./Expense/";

const resolvers = [Expense];

export default mergeResolvers(resolvers);