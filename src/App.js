import React, {useState} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';

import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id:"1",charge:"Rent",amount:1000},
  {id:"1",charge:"Car payemnt",amount:500},
  {id:"1",charge:"Credit card",amount:600}
];

console.log(initialExpenses);

function App() {

const [expenses,setExpense] = useState(initialExpenses);


  return (
  
  
  <>
   <Alert />
   <h1>Budget Caculator</h1>
   <main className='App'>
    <ExpenseForm />
    <ExpenseList expenses={expenses}/>


   </main>

   <h1>
    Total Amount: 
    <span className='total'>
      Rs {" "}
      {expenses.reduce((acc,curr)=>{
        return (acc += curr.amount)
      }, 0 )}

    </span>
   </h1>
  
  </>
  
  
  );
}

export default App;
