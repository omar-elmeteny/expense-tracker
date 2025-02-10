import { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header';
import Footer from './components/Footer';

import Expense from './utils/expense';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExpenseList from './components/ExpenseList';


function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevState: Expense[]) => {
      return [...prevState, expense];
    });
  }

  const deleteExpense = (id: string) => {
    setExpenses((prevState: Expense[]) => {
      return prevState.filter((expense) => expense.id !== id);
    });
  }
  return (
    <>
      <Router>
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path='/' element={<HomePage expenses={expenses} deleteExpense={deleteExpense} />} />
              <Route path='/add-expense' element={<ExpenseForm addNewExpense={addExpense} />} />
              <Route path='/expense-list' element={<ExpenseList expenses={expenses} deleteExpense={deleteExpense} />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App;
