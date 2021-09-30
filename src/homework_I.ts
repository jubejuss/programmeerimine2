import express, { Request, Response, Application } from "express"; // import muutuja-nimi kust. Node otsib automaatselt node_modules kaustast
const app = express(); // importisime ekspressi nagu funktsioonina
app.use(express.json());

const port = 3000;
const ok = 200;
const created: number = 201;

const db = {
  schoolSubject: [
    {
      id: 1,
      name: "Programming II",
      volume: 4,
    },
    {
      id: 2,
      name: "Databases II",
      volume: 4,
    },
  ],

  group: [
    {
      id: 1,
      name: "RIF I",
    },
    {
      id: 2,
      name: "RIF II",
    },
    {
      id: 2,
      name: "RIF III",
    },
  ],

  lecturer: [
    {
      id: 1,
      name: "Martti Raavel",
    },
    {
      id: 2,
      name: "Laura Hein",
    },
  ],

  event: [
    {
      id: 1,
      name: "Programmeerimine II",
      startDate: 11.21,
      endDate: 11.21,
    },
    {
      id: 2,
      name: "Disaini alused",
      startDate: 11.21,
      endDate: 11.21,
    },
  ],

  room: [
    {
      id: 1,
      name: 201,
    },
    {
      id: 2,
      name: 202,
    },
  ],

};

app.get("/rooms", (req: Request, res: Response) => {
  res.status(ok).json({
    users: db.schoolSubject,
  });
});

app.get("/rooms/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const room = db.schoolSubject.find((element) => element.id === id);
  res.status(ok).json({
    room,
  });
});

app.listen(port, () => {
  console.log("Server is running");
});
