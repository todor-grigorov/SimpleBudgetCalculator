import React from 'react';
import './expenseItem.css';

// interface ParentProps {}

// type Props = ParentProps;

const ExpenseItem: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="expense-item">
      <div>March 28th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
