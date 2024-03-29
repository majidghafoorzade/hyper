import dotEnv from "dotenv";
import express, { Request, Response } from "express";
import { renderApp } from "./providers/renderApp";

// Config env vars
dotEnv.config();
const PORT = parseInt(process.env.APP_PORT ?? "3000");

// Create Express server
const app = express();

// Config static files directories
app.use(express.static("public"));
app.use("/static", express.static("build/client"));

// Configure template engine
app.set("view engine", "hbs");
app.set("views", "./src/templates");

// Create wildcard route
app.get("*", async function (req: Request, res: Response) {
  const { markup } = await renderApp({
    url: req.url,
  });

  return res.render("application.hbs", {
    markup,
  });
});

// Start Express server
app.listen(PORT, function () {
  console.log(`App is running on http://localhost:${PORT}`);
});
