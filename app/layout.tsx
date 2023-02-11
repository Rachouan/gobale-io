import Navigation from "@/structures/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
