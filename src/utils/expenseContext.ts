import Expense from "./expense";

type ExpenseContextType = { 
    expenses: Expense[];
    deleteExpense: (id: string) => void;
}

export default ExpenseContextType;