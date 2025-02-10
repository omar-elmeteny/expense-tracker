import expenseCategories from "../utils/categories";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";


function ExpenseForm({ addNewExpense }: any) {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(20, "Name must not exceed 20 characters"),
        amount: Yup.number().required("Amount is required")
        .min(0.1, "Amount must be greater than 0")
        .typeError("Amount must be a number")
        .positive("Amount must be greater than 0"),
        category: Yup.string().required("Category is required")
    });

    const navigate = useNavigate();

    return (
        <Formik 
        initialValues={{name:"", amount:"", category:""}}
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
        {({ isSubmitting , isValid }) => (
            <Form className="container mt-4 mx-auto p-4">
                <h1 className="display-5 text-center fw-bold text-secondary">Add Expense</h1>
                    <div className="mb-3 container">
                        <Field type="text" name="name" className="form-control form-control-lg mt-5" placeholder="Enter name"/>
                        <ErrorMessage name="name" component="div" className="error"/>
                    </div>
                    <div className="mb-3 container">
                        <Field type="number" name="amount" className="form-control form-control-lg mt-5" placeholder="Enter amount"/>
                        <ErrorMessage name="amount" component="div" className="error" />
                    </div>
                    <div className="mb-3 container">
                        <Field className="form-select form-select-lg mt-5" id="category" name="category" as="select">
                            <option className="text-secondary bg-light fw-bold" value="" disabled>Select Category</option>
                            {expenseCategories.map((cat) => (
                                <option className="bg-light text-dark fw-bold" key={cat} value={cat}>{cat}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="category" component="div" className="error" />
                    </div>
                    <div className="mb-3 container">
                        <button className="btn btn-primary btn-lg my-5 w-50 px-10 py-2 fs-3" disabled={!isValid || isSubmitting}>Add Expense</button>
                    </div>
                </Form>
                )}
        </Formik>
    );
}

export default ExpenseForm;