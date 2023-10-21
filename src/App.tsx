import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Grocery" },
    { id: 2, description: "bbb", amount: 10, category: "Grocery" },
    { id: 3, description: "ccc", amount: 10, category: "Grocery" },
    { id: 4, description: "ddd", amount: 10, category: "Grocery" },
  ]);

  if (expenses.length === 0) return null;

  return (
    <div>
      <div className="mb-5">
        <Form onSubmit={(data) => console.log(data)} />
      </div>
      <div>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>      
    </div>
  );
}

export default App;
