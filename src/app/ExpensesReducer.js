const initialState = {
  expenses: [],
};

export const ActionType = {
  SET_EXPENSES: "SET_EXPENSES",
  NEW_EXPENSE: "NEW_EXPENSE",
  DELETE_EXPENSE: "DELETE_EXPENSE",
  EDIT_EXPENSE: "EDIT_EXPENSE",
};

export const ActionCreators = {
  setExpenses: (payload) => ({
    type: ActionType.SET_EXPENSES,
    payload,
  }),
  newExpense: (payload) => ({
    type: ActionType.NEW_EXPENSE,
    payload,
  }),
  editExpense: (payload) => ({
    type: ActionType.EDIT_EXPENSE,
    payload,
  }),
  deleteExpense: (payload) => ({
    type: ActionType.DELETE_EXPENSE,
    payload,
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_EXPENSES:
      return { ...state, expenses: [...action.payload] };
    case ActionType.NEW_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case ActionType.EDIT_EXPENSE:
      var expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          expense = action.payload;
        }

        return expense;
      });

      return { ...state, expenses: [...expenses] };
    case ActionType.DELETE_EXPENSE:
      var expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );

      return { ...state, expenses: [...expenses] };
    default:
      return state;
  }
};
