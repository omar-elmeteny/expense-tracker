import { useEffect, useState } from "react";
import Expense from "../utils/expense";
import ExpenseContextType from "../utils/expenseContext";

function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function ExpenseList(props: ExpenseContextType) {
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    useEffect(() => {
        setIsEmpty(props.expenses.length === 0);
    }, [props.expenses]);

    const categories = ["All", ...new Set(props.expenses.map(expense => expense.category))];

    const filteredExpenses = selectedCategory === "All"
        ? props.expenses
        : props.expenses.filter(expense => expense.category === selectedCategory);


    return (
        <div className="container">
            <h1 className="text-center mt-4">Expenses List</h1>
            {!isEmpty && <div className="d-flex justify-content-end">
                <label className="text-dark me-2 mt-1 form-label">Filter by Category:</label>
                <select
                    className="form-select w-auto d-inline"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((category) => (
                        <option className="text-dark bg-light fw-bold" key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>}
            {/* <div style={styles.gridContainer}>
                {filteredExpenses.map((expense: Expense) =>
                    <ExpenseCard key={expense.id} id={expense.id} name={expense.name} amount={expense.amount} category={expense.category} isDelete={false} deleteExpense={props.deleteExpense} />
                )}
            </div> */}
            {!isEmpty && <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="w-50">Name</th>
                        <th className="text-end">Amount</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenses.map((expense: Expense, index: number) => (
                        <tr key={expense.id}>
                            <td>{index + 1}</td>
                            <td>{expense.name}</td>
                            <td className="text-end">E£{formatCurrency(expense.amount)}</td>
                            <td>{expense.category.charAt(0).toUpperCase() + expense.category.slice(1).toLowerCase()}</td>
                            <td>
                                <button className="btn btn-outline-danger" onClick={() => props.deleteExpense(expense.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
            {isEmpty ? <h3 className="text-center text-secondary mt-5 p-5">List is Empty</h3> : <h3 className="text-center fw-bold text-secondary mt-4">Total amount: E£{formatCurrency(filteredExpenses.reduce((sum, expense) => Number(sum + expense.amount), 0.0))}</h3>}
        </div>

    );
}

export default ExpenseList;