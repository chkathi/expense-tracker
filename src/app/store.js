import { configureStore } from "@reduxjs/toolkit";
import ExpensesReducer from "./ExpensesReducer";

export const store = configureStore({
  reducer: {
    expenseReducer: ExpensesReducer,
  },
});
