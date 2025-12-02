import type { ITodo } from "@projects/TodoList";
// import { useRef, useState } from "react";

interface ITodoFn {
  onDeleteTodo: (id: string) => void;
}

export const TodoItem = ({ id, text, onDeleteTodo }: ITodo & ITodoFn) => {
  // const editText = useRef(null);
  // const [isEditClicked, setIsEditClicked] = useState<boolean>(false);
  // const [updatedText, setUpdatedText] = useState<string>("");

  return (
    <div
      key={id}
      className="flex w-full items-center justify-between border-b border-gray-100 px-3 py-2 transition-colors hover:bg-gray-50"
    >
      <span className="truncate text-[15px] text-gray-700">{text}</span>

      <div className="flex gap-1">
        <button className="rounded-md border border-blue-300 px-2 py-1 text-xs text-blue-500 transition hover:bg-blue-50 active:scale-95">
          수정
        </button>
        <button
          onClick={onDeleteTodo.bind(null, id)}
          className="rounded-md border border-red-300 px-2 py-1 text-xs text-red-500 transition hover:bg-red-50 active:scale-95"
        >
          삭제
        </button>
      </div>
    </div>
  );
};
