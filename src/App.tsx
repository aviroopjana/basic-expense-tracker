import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Education" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  ]);

  if (expenses.length === 0) return null;

  const visibleExpense =  selectedCategory ? expenses.filter(e=> e.category === selectedCategory) : expenses;

  return (
    <div>
      <div className="mb-5">
        <Form onSubmit={(data) => console.log(data)} />
      </div>
      <div>
        <h2 className="fw-bold text-center mb-3">Expense list based on different categories</h2>
        <div className="mb-3">
          <ExpenseFilter onSelectCategory={(category)=> setSelectedCategory(category)} />
        </div>
        <ExpenseList
          expenses={visibleExpense}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>      
    </div>
  );
}

export default App;
