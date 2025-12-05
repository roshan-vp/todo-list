import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function TodoInput({ todo, setTodo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const copyTodo = [...todo];

    const newTodo = {
      todo: data.todo,
      completed: false,
    };

    copyTodo.push(newTodo);

    setTodo(copyTodo);
    reset();
  };


useEffect(() => {
  const welcome = localStorage.getItem('welcome');
  if(welcome) return
  const copyTodo = [...todo];
  const newTodo = {
    todo: todo,
    completed: false,
  }

  localStorage.setItem('welcome', 'done');

  newTodo.todo = 'Welcome to Todo App';
  copyTodo.push(newTodo);
  setTodo(copyTodo);
}, [])


  return (
    <div className="py-5 px-10">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex justify-center items-center flex-col gap-5 "
      >
        <h1 className="text-5xl font-bold text-amber-500">Todo List</h1>

        <input
          {...register("todo", { required: "Todo is required" })}
          type="text"
          placeholder="Add Todo"
          className="py-3 px-13 lg:w-3/11 focus:outline-amber-500 rounded outline-2 transition duration-200 ease-in-out"
        />
        <p className="text-red-600 -mt-3 font-bold font-mono">{errors.todo?.message}</p>
        <button className="py-3 px-10 bg-amber-500 text-black font-bold rounded-2xl active:scale-95 cursor-pointer">
          Add Todo
        </button>
      </form>
      <div></div>
    </div>
  );
}
