import clsx from "clsx";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto px-2 md:px-4 max-w-screen-sm", className)}>
      {children}
    </div>
  );
}
