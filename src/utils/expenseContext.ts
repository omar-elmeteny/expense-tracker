import{ createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Expense from '../utils/expense';

export interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  expenseToDelete: string | null;
  setExpenseToDelete: (id: string | null) => void;
  actualDeleteExpense: () => void;
}

export const ExpenseContext = createContext<ExpenseContextType|undefined>(undefined);

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseProvider');
  }
  return context;
};

