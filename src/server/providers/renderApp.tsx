import render from "preact-render-to-string";
import { h } from "preact";

export const renderApp = async () => {
  const App = <div class="foo">content</div>;

  return {
    markup: render(App),
  };
};
