import { hydrate } from "preact";
import { RouterProvider } from "./providers/router";

hydrate(<RouterProvider />, document.getElementById("root"));
