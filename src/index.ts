import express from "express";
import { notes as mockedNotes } from "./repositories/mockData";
require("express-async-errors");

// import custom middleware
import errorHandlerMiddleware from "./middleware/errorHandler";
import notFoundMiddleware from "./middleware/notFound";

// routes
import notesRouter from "./routes/notesRoute";

const port = 3000;
const app = express();

// notes array accessible everywhere in the app
app.locals.notes = [...mockedNotes];

// middleware
app.use(express.json());

// routes
app.use("/notes/", notesRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// start server
try {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
} catch (error) {
  console.log(error);
}
