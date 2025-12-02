import { Input } from "@components/todo/Input";
import { TodoItem } from "@components/todo/TodoItem";
import { useState } from "react";
// import {
//   getYear,
//   getMonth,
//   getDay,
//   getHour,
//   getMinute,
//   getSecond,
// } from "@constants/dateContents";
import { toast } from "react-toastify";

export interface ITodo {
  id: string;
  text: string;
}

const createUniqueID = () => {
  const uniqueId = crypto.randomUUID();
  return uniqueId;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const onClickAddTodo = () => {
    const newTodo: ITodo = {
      // id: `${getYear}-${getMonth}-${getDay}-${getHour}-${getMinute}-${getSecond}`,
      id: createUniqueID(),
      text: inputValue,
    };
    setTodos((prev) => [newTodo, ...prev]);
    toast.success("☘️ 할 일 추가 완료!");
    setInputValue("");
  };

  const onDeleteTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
    toast.success("🗑️ 할 일 삭제 완료!");
  };

  // const updateTodo = (id) => {

  // };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start px-4 py-10">
      <div className="flex w-full max-w-md items-center gap-2">
        <Input text={inputValue} onchangeFn={(e) => onChangeInputValue(e)} />
        <button
          onClick={onClickAddTodo}
          className="h-10 w-14 cursor-pointer rounded-[5px] bg-amber-500 transition-colors duration-150 hover:bg-amber-700"
        >
          Add
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        {todos.map((item) => (
          <TodoItem onDeleteTodo={onDeleteTodo} id={item.id} text={item.text} />
        ))}
      </div>
    </div>
  );
};
