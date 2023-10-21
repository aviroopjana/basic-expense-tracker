interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <select className="form-select w-50 dropdown-center" onChange={((event)=> onSelectCategory(event.target.value))} >
        <option value="">All Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
      </select>
    </div>
    
  );
};

export default ExpenseFilter;
