import { getServerSession } from "next-auth";
import { use } from "react";

export default function Home() {
  const session = use(getServerSession());

  console.log(session);
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
