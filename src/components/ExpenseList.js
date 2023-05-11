import React from 'react';
import ExpensesItem from './ExpensesItem';
import {MdDelete} from "react-icons/md";

const ExpenseList = ({expenses}) => {
  return(
    <>
    <ul >
      {expenses.map(expense =>{
        return <ExpensesItem key ={expense.id} expense={expense}/>;
      })}
    </ul>

    {expenses.length > 0 && (
      <button className='btn'>
        Clear Expenses
        <MdDelete className='btn-icon' />
      </button>
    )}
    </>
  )
};

export default ExpenseList;
