interface ITodoValue {
  text: string;
  onchangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ text, onchangeFn }: ITodoValue) => {
  return (
    <input
      className="h-10 w-80 border-2 border-amber-500 pl-3 focus:border-amber-900 focus:outline-none"
      value={text}
      onChange={(e) => onchangeFn(e)}
      type="text"
      placeholder="할 일을 입력하세요."
    />
  );
};
