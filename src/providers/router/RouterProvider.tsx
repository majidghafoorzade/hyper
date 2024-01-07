import Router from "preact-router";
import About from "../../views/About";
import Home from "../../views/Home";

export const RouterProvider = ({ url }: { url?: string }) => {
  return (
    <Router url={url}>
      <Home path="/" />
      <About path="/about" />
    </Router>
  );
};
