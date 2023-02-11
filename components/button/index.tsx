import clsx from "clsx";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  type = "submit",
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "p-2 border border-denim-600 bg-denim-500 text-white rounded ",
        className
      )}
      type={type}
    >
      <span>{children}</span>
    </button>
  );
}
