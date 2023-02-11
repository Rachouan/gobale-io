"use client";
export interface InputProps {
  onChange: (value: string) => void;
  value: string | undefined;
}

export default function Input({ value = "", onChange }: InputProps) {
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);
  return (
    <input
      type="text"
      value={value}
      className="p-2 border rounded focus:outline-none"
      onChange={onHandleChange}
    />
  );
}
