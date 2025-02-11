# Expense Tracker App

## Project Overview
The **Expense Tracker App** is a simple web application that allows users to track their expenses by adding, viewing, and filtering expenses based on categories. Users can persist their expense data using `localStorage`, ensuring that their records remain available even after a page refresh and closing the browser. The app provides a user-friendly interface with responsive design, making it easy to manage expenses efficiently.

## Tech Stack and Libraries used
- **Dev server and build tools**: [vite](https://vite.dev/)
- **Frontend:** [React.js](https://react.dev/) (with [TypeScript](https://www.typescriptlang.org/) as programming language)
- **Package Manager:** Node Pagkage Manager (npm)
- **Routing and navigation:** [React Router](https://reactrouter.com/)
- **State Management:** React useState & Props & Context API
- **Storage:** localStorage
- **Styling:** [SASS](https://sass-lang.com/), [Bootstrap](https://getbootstrap.com/) and [React Bootstrap](https://react-bootstrap.netlify.app/) for styling and responsive layout
- **Forms and Validation:** [Yup](https://www.npmjs.com/package/yup) and [Formik](https://formik.org/)

## Installation Instructions
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)
- [Git](https://git-scm.com/)

### Steps to Install & Run Development server
1. **Clone the repository:**
   ```sh
   git clone https://github.com/omar-elmeteny/expense-tracker.git
   cd expense-tracker
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **The link will appear at the terminal once you run the app, click it to open the app in your default browser**

### Run production build:

1. **Ensure repository is cloned and dependencies are installed as explains in previous section**

2. **Build for production**
   ```sh
   npm run build
   ```

3. **Run production build**
   ```sh
   npm run preview
   ```

4. The link will appear at the terminal once you run the app, click it to open the app in your default browser

## Usage Guide
### Navbar
- The Navbar is present on all pages for easy navigation.
- It contains links to:
  - **Home:** Returns to the homepage.
  - **Add Expense:** Redirects to the expense form.
  - **View Expenses:** Displays all recorded expenses.
- The Navbar is fully responsive and adapts to different screen sizes.

### Homepage
- The homepage contains a list of the top expenses.
- The homepage contains two buttons:
  - **Add Expense:** Redirects to a form where users can add an expense.
  - **View Expenses:** Displays the list of all added expenses.

### Adding an Expense
- Click on **Add Expense**.
- Fill in the form with the expense details (name, amount, category).
- Click **Add Expense** to save the expense.
- Click **Reset** to clear all form fields and start over.

### Viewing & Managing Expenses
- Click on **View Expenses** to see all saved expenses.
- Expenses are displayed in striped table.
- The **Filter by Category** dropdown allows users to filter expenses.
- Clicking the **Delete** button removes an expense.

### Data Persistence
- All expenses are stored in `localStorage`, ensuring they remain available even after refreshing the page and closing the browser.



