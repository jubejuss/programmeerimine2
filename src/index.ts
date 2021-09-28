import express, { Request, Response, Application } from "express"; // import muutuja-nimi kust. Node otsib automaatselt node_modules kaustast
const app = express(); // importisime ekspressi nagu funktsioonina
app.use(express.json());

const port = 3000;
const ok = 200;
const created: number = 201;

const db = {
  users: [
    {
      id: 1,
      firstName: "Juku",
      lastName: "Juurikas",
    },
    {
      id: 2,
      firstName: "Mari",
      lastName: "Maasikas",
    },
  ],
};

app.get("/ping", (req: Request, res: Response) => {
  //tee, request, response. Req on kliendipoolt apile ja res on vastus api poolt.
  res.status(ok).json({
    // siin on response status ja response json, milline on sisuga         hello world
    message: "Hello world!",
  });
});

app.get("/users", (req: Request, res: Response) => {
  res.status(ok).json({
    users: db.users,
  });
});

app.get("/users/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const user = db.users.find((element) => element.id === id); // võtabe db users massiivi, võtame iga elemendi ja vaatame kas selle elemendi id on võrdne mis saama ja kui on siis tagastab leitud
  res.status(ok).json({
    user,
  });
});

app.post("/users", (req: Request, res: Response) => {
  const { firstName, lastName } = req.body; // otsib body seest sama nimkujuga väärtuse ja teeb muutujaks või siis lisab
  const id = db.users.length + 1; // rehkendab olemasolevate hulga järgi uue ID nr
  db.users.push({
    id,
    firstName,
    lastName,
  });
  res.status(ok).json({
    id,
  });
});

app.listen(port, () => {
  console.log("Server is running");
});
