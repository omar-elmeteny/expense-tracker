import { ReactNode, useEffect, useState } from "react";
import Expense from "../utils/expense";
import { ExpenseContext } from "../utils/expenseContext";

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
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
    };
  
    const deleteExpense = (id: string) => {
      setExpenseToDelete(id);
    };
  
    const actualDeleteExpense = () => {
      setExpenses((prevState: Expense[]) => {
        return prevState.filter((expense) => expense.id !== expenseToDelete);
      });
      setExpenseToDelete(null);
    };
  
    return (
      <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, expenseToDelete, setExpenseToDelete, actualDeleteExpense }}>
        {children}
      </ExpenseContext.Provider>
    );
  };