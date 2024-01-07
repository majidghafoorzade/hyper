import render from "preact-render-to-string";
import { RouterProvider } from "./router";

export const renderApp = async ({ url }: { url: string }) => {
  return {
    markup: render(<RouterProvider url={url} />),
  };
};
