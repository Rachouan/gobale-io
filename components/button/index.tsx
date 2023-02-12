import clsx from "clsx";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  type = "submit",
  disabled,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "transition-all p-2 border border-teal-600 bg-teal-500 text-white rounded disabled:bg-gray-50 disabled:text-gray-300 disabled:border-gray-50 disabled:cursor-not-allowed",
        className
      )}
      type={type}
    >
      <span>{children}</span>
    </button>
  );
}
