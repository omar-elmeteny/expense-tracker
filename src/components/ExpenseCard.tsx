// import React from "react";

import { useExpenseContext } from "../utils/expenseContext";

function ExpenseCard(props: { id: string, name: string, amount: number, category: string, isDelete: boolean }) {
    const expenseContext = useExpenseContext();
    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        expenseContext.deleteExpense(props.id);
    }
    return (
        <div className="card-custom"> 
            <h1 className="card-header-custom">{props.name}</h1>
            <p className="card-body-custom">Amount: E£{props.amount}</p>
            <div className="card-footer-custom">
                <span className="text-muted">Category: {props.category}</span>
                <button className="btn btn-outline-danger" onClick={handleDelete} style={{visibility: props.isDelete ? "visible" : "hidden"}}>Delete</button>
            </div>
        </div>
    );
}

export default ExpenseCard;