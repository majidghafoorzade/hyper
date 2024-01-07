import { Link } from "preact-router/match";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
