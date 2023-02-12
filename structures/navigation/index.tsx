import Container from "@/components/container";

export default function Navigation() {
  return (
    <header className="w-full fixed top-0 z-10">
      <Container>
        <nav className="py-4">
          <a href="/">Globale</a>
        </nav>
      </Container>
    </header>
  );
}
