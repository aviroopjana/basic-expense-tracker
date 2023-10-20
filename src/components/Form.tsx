import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props{
  onSubmit: (data: typeForm) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must contain at least 3 character(s)" }),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(5),
  category: z.enum([
    "Groceries",
    "Utilities",
    "Entertainment",
    "Education",
  ]),
});


type typeForm = z.infer<typeof schema>;

const Form = ({onSubmit}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeForm>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label fw-bold">
          Description
        </label>
        <br />
        <input
          id="Description"
          type="text"
          {...register("description")}
          className="form-control"
        />
        {errors?.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label fw-bold">
          Amount
        </label>
        <br />
        <input
          id="Amount"
          type="number"
          {...register("amount", { valueAsNumber: true })}
          className="form-control"
        />
        {errors?.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="Amount" className="form-label fw-bold">
          Category
        </label>
        <br />
        <select
          {...register("category")}
          id="dropdown"
          className="form-select"
        >
          <option value="">Select Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
        </select>
        {errors?.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <br />
      <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-primary ">Add Expense</button>
      </div>      
    </form>
  );
};

export default Form;
