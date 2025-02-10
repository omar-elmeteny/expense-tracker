// import { React } from "react";

import { useNavigate } from "react-router-dom";
import Expense from "../utils/expense";
import ExpenseCard from "./ExpenseCard";
import ExpenseContextType from "../utils/expenseContext";
import styles from "../utils/styles";

function HomePage(props: ExpenseContextType) {
    const navigate = useNavigate();

    const topExpenses = [...props.expenses]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 4);
    return (
        <div className="container mt-4">
            <h1 className="display-3 text-center fw-bold text-secondary">Welcome to Expense Tracker!</h1>
            <h3 className="text-start fw-bold text-dark mt-5">Most Expensive</h3>
            <div style={styles.gridContainer}>
                {topExpenses.map((expense: Expense) =>
                    <ExpenseCard key={expense.id} id={expense.id} name={expense.name} amount={expense.amount} category={expense.category} isDelete={false} deleteExpense={props.deleteExpense} />
                )}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5" >
                <button className="btn btn-primary w-50 btn-lg mx-5 px-20 py-4 fs-3" onClick={() => navigate("/add-expense")}>Add Expense</button>
                <button className="btn btn-secondary w-50 btn-lg mx-5 px-20 py-4 fs-3" onClick={() => navigate("/expense-list")}>View Expenses</button>
            </div>
        </div>
    );
}

export default HomePage;