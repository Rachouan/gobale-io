import Container from "@/components/container";
import { GithubIcon, RachouanIcon } from "@/components/icons";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="w-full py-2 text-xs bg-gray-50">
      <Container className="flex items-center justify-between text-gray-400">
        <nav className="">
          <p className="items-center inline-flex gap-1">
            Built by
            <a
              href="https://rachouan.com"
              target="_blank"
              className="items-center inline-flex gap-1 hover:text-gray-600"
            >
              <RachouanIcon />
              <span>Rachouan</span>
            </a>
          </p>
        </nav>
        <nav>
          <p className="items-center inline-flex gap-1">
            Wanna check the source?{" "}
            <a
              href="https://github.com/Rachouan/gobale-io"
              target="_blank"
              className="items-center inline-flex gap-1 hover:text-gray-600"
            >
              <GithubIcon />
              <span>Github</span>
            </a>
          </p>
        </nav>
      </Container>
    </footer>
  );
}
