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
};

app.get("/users", (req: Request, res: Response) => {
  res.status(ok).json({
    users: db.schoolSubject,
  });
});

app.get("/users/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const user = db.schoolSubject.find((element) => element.id === id);
  res.status(ok).json({
    user,
  });
});

app.listen(port, () => {
  console.log("Server is running");
});
