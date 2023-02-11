import Navigation from "@/structures/navigation";
import "mapbox-gl/dist/mapbox-gl.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-dark-900">
        <main>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
