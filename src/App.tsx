import { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header';
import Footer from './components/Footer';

import Expense from './utils/expense';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExpenseList from './components/ExpenseList';
import { Modal } from 'react-bootstrap';


function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [expenseToDelete, setExpenseToDelete] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevState: Expense[]) => {
      return [...prevState, expense];
    });
  }

  const deleteExpense = (id: string) => {
    setExpenseToDelete(id);
  }

  const actualDeleteExpense = () => {
    setExpenses((prevState: Expense[]) => {
      return prevState.filter((expense) => expense.id !== expenseToDelete);
    });
    setExpenseToDelete(null);
  }
  return (
    <>
      <Router>
        <Header />

        <Modal show={expenseToDelete !== null} onHide={() => setExpenseToDelete(null)}>
          <Modal.Header>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this expense? This action cannot be undone.
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => setExpenseToDelete(null)}>Cancel</button>
            <button className="btn btn-danger" onClick={actualDeleteExpense}>Delete Expense</button>
          </Modal.Footer>
        </Modal>
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
