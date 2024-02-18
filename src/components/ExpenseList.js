import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { GetExpenses } from "../services/Expenses";
import ExpenseForm from "./ExpenseForm";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenseReducer.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return expenses.map((e) => {
    return (
      <div key={e.id}>
        <ListRow expense={e} />
      </div>
    );
  });
};

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>$ {expense.amount}</Col>
        <Col>
          <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default ExpenseList;
