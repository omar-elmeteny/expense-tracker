import { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header';
import Footer from './components/Footer';

import Expense from './utils/expense';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExpenseList from './components/ExpenseList';
import { Modal } from 'react-bootstrap';
import { useExpenseContext } from './utils/expenseContext';


function App() {
  const expenseContext = useExpenseContext();

  return (
    <>
      <Router>
        <Header />

        <Modal show={expenseContext.expenseToDelete !== null} onHide={() => expenseContext.setExpenseToDelete(null)}>
          <Modal.Header>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this expense? This action cannot be undone.
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => expenseContext.setExpenseToDelete(null)}>Cancel</button>
            <button className="btn btn-danger" onClick={expenseContext.actualDeleteExpense}>Delete Expense</button>
          </Modal.Footer>
        </Modal>
        <main>
          <div className="container">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/add-expense' element={<ExpenseForm />} />
              <Route path='/expense-list' element={<ExpenseList />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App;
