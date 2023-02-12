import Container from "@/components/container";
import Logo from "@/components/logo";

export default function Navigation() {
  return (
    <header className="w-full fixed top-0 z-10">
      <Container>
        <nav className="py-4 flex justify-center w-full">
          <a href="/">
            <Logo className="text-teal-500 h-10" />
            <span className="sr-only">Globale</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
