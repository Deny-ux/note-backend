import express, { Express, Response, Request } from "express";
import { notes as mockedNotes } from "./repositories/mockData";
import { SingleNote } from "./types/noteTypes";
import notesRouter from "./routes/notesRoute";

const port = 3000;
const app = express();

let notes: SingleNote[] = [];
// use mocked data
notes = [...mockedNotes];

// middleware
app.use(express.json());

// routes
app.use("/notes/", notesRouter);

// start server
try {
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
} catch (error) {
  console.log(error);
}
