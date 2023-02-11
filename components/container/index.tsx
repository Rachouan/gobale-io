export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto px-2 md:px-4 max-w-screen-sm">{children}</div>;
}
