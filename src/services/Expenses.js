import { ActionCreators } from "../app/ExpensesReducer";

/* Dispatch is an action that triggers a state change */
/* Reducer is a function that determines chages to application state */
export const GetExpenses = async (dispatch) => {
  try {
    const expenses = [
      { id: 1, description: "Food", amount: 12.99 },
      { id: 2, description: "Groceries", amount: 51.99 },
      { id: 3, description: "Drinks", amount: 101.99 },
    ];

    dispatch(ActionCreators.setExpenses(expenses));
  } catch (err) {
    console.log("error");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    dispatch(
      ActionCreators.newExpense({
        id: 10,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch (err) {
    console.log("Error!");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(ActionCreators.editExpense(expense));
  } catch (err) {
    console.log("Error!");
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(ActionCreators.deleteExpense(expense));
  } catch (err) {
    console.log("Error!");
  }
};
