import { Link } from "preact-router/match";

export default function About() {
  return (
    <div>
      <h1>This is About Page</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
