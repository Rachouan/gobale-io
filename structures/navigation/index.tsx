import Container from "@/components/container";

export default function Navigation() {
  return (
    <header className="fixed top-0 w-full">
      <Container>
        <nav className="py-4 border-b">
          <a href="/">Globale</a>
        </nav>
      </Container>
    </header>
  );
}
