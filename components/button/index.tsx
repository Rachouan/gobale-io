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
        "p-2 border border-denim-600 bg-denim-500 text-white rounded disabled:bg-gray-50 disabled:text-gray-300 disabled:border-gray-50 disabled:cursor-not-allowed transition-colors",
        className
      )}
      type={type}
    >
      <span>{children}</span>
    </button>
  );
}
