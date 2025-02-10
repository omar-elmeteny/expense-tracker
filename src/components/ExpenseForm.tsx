import expenseCategories from "../utils/categories";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";


function ExpenseForm({ addNewExpense }: any) {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required()
            .min(2)
            .max(100)
            .label("Name")
            ,
        amount: Yup.number().required()
            .typeError("Amount must be a number")
            .min(0.1)
            .max(9_999_999.99)
            .label("Amount"),
        category: Yup.string().oneOf(expenseCategories).required().label("Category")
    });

    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ name: "", amount: "", category: "" }}
            validationSchema={validationSchema}
            validateOnMount
            onSubmit={(values, { resetForm }) => {
                addNewExpense({
                    id: uuidv4(),
                    ...values
                });
                resetForm();
                navigate("/expense-list");
            }}
        >
            {({ isSubmitting, isValid }) => (
                <Form className="form-horizontal">
                    <h1 className="text-center mt-4">Add Expense</h1>
                    <div className="form-group my-1">
                        <label className="form-label" htmlFor="name">Name</label>
                        <Field type="text" name="name" className="form-control" placeholder="Enter name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label" htmlFor="amount">Amount</label>
                        <Field type="number" name="amount" className="form-control" placeholder="Enter amount" />
                        <ErrorMessage name="amount" component="div" className="error" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label" htmlFor="category">Category</label>
                        <Field className="form-select" id="category" name="category" as="select">
                            <option value="" disabled>Select Category</option>
                            {expenseCategories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="category" component="div" className="error" />
                    </div>
                    <div className="form-group mt-3 d-flex justify-content-end">
                        <button className="btn btn-secondary me-2" type="reset">Reset</button>
                        <button type="submit" className="btn btn-primary" disabled={!isValid || isSubmitting}>Add Expense</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ExpenseForm;