// import React from "react";

function ExpenseCard(props: { id: string, name: string, amount: number, category: string, isDelete: boolean, deleteExpense: (id: string) => void }) {
    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.deleteExpense(props.id);
    }
    return (
        <div className="card-custom"> 
            <h1 className="card-header-custom">{props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}</h1>
            <p className="card-body-custom">Amount: E£{props.amount}</p>
            <div className="card-footer-custom">
                <span className="text-muted">Category: {props.category.charAt(0).toUpperCase() + props.category.slice(1).toLowerCase()}</span>
                <button className="btn btn-primary" onClick={handleDelete} style={{visibility: !props.isDelete ? "visible" : "hidden"}}>Delete</button>
            </div>
        </div>
    );
}

export default ExpenseCard;