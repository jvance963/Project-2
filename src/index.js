/* eslint-disable no-console */
const logger = require("./logger");
const app = require("./app");
const port = app.get("port");
const server = app.listen(port);
const hbs = require("hbs");

app.set("view engine", "hbs");

process.on("unhandledRejection", (reason, p) =>
  logger.error("Unhandled Rejection at: Promise ", p, reason)
);

server.on("listening", () =>
  logger.info(
    "Hand-E-Jobs application started on http://%s:%d",
    app.get("host"),
    port
  )
);
