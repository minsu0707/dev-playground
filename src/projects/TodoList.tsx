import { Input } from "@components/todo/Input";
import { TodoItem } from "@components/todo/TodoItem";
import { useState } from "react";
import { toast } from "react-toastify";

export interface ITodo {
  id: string;
  text: string;
}

const createUniqueID = () => crypto.randomUUID();

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const onClickAddTodo = () => {
    if (!inputValue.trim()) return;
    const newTodo: ITodo = {
      id: createUniqueID(),
      text: inputValue,
    };
    setTodos((prev) => [newTodo, ...prev]);
    toast.success("할 일 추가 완료!");
    setInputValue("");
  };

  const onDeleteTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
    toast.success("할 일 삭제 완료!");
  };

  const upDateTodo = (id: string) => {
    const editText = prompt("할 일을 수정하세요.")?.trim();
    if (!editText) return;

    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo,
      );
    });
    toast.success("할 일이 수정 완료!");
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start px-4 py-10">
      <div className="flex w-full max-w-md items-center gap-2">
        <Input text={inputValue} onchangeFn={onChangeInputValue} />
        <button
          onClick={onClickAddTodo}
          className="h-10 w-14 cursor-pointer rounded-[5px] bg-amber-500 transition-colors duration-150 hover:bg-amber-700"
        >
          Add
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            upDateTodo={upDateTodo}
            onDeleteTodo={onDeleteTodo}
            id={item.id}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
