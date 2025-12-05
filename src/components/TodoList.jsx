import { Trash, Circle } from "lucide-react";


export default function TodoList({ todo, setTodo }) {
  const deleteTodo = (idx) => {
    const copyTodo = [...todo];
    copyTodo.splice(idx, 1);

    setTodo(copyTodo);
  };

  const checkTodo = (idx) => {
    const copyTodo = [...todo];    
    copyTodo[idx].completed = !copyTodo[idx].completed;
    
    setTodo(copyTodo);    
  }

  return (
    <div id="todo-list" className="lg:w-1/2 flex flex-col items-center m-auto">
      {todo.map((todo, idx) => {
        return (
          <div key={idx} id="todo-list" className="flex border-2 border-amber-500 overflow-auto m-2 w-3/4 md:w-1/2 sm:w-1/2 lg:w-full rounded-lg justify-between">
            <div className="flex flex-wrap gap-5">
              <label className="inline-flex items-center cursor-pointer">
                <input onChange={() => {
                  checkTodo(idx)
                }} checked={todo.completed} className="sr-only peer" type="checkbox" />
                <div id="animation" className="ml-3 w-8 h-8 items-center flex  border-2 rounded-full peer-checked:bg-amber-500 peer-checked:border-amber-500">
                  <Circle size={30} />
                </div>
                <h1 id={todo.completed ? "todo-mark" : ''} className="cursor-pointer px-5 py-3">
                  {todo.todo}
                </h1>
               </label>
            </div>
            <button
              className="text-red-600 cursor-pointer px-3 active:scale-95 hover:scale-105 hover:text-red-800"
              onClick={() => {
                deleteTodo(idx);
              }}
            >
              <Trash />
            </button>
          </div>
        );
      })}
    </div>
  );
}
