
import express, { Request, Response, Application } from 'express'; // import muutuja-nimi kust. Node otsib automaatselt node_modules kaustast
const app = express(); // importisime ekspressi nagu funktsioonina

const port = 3000;
const ok = 200;

const db = {
    users: [
        {
            firstName: 'Juku',
            lastName: 'Juurikas',
        },
        {
            firstName: 'Mari',
            lastName: 'Maasikas',
        }
    ]
}

app.get('/ping', (req: Request, res: Response) => { //tee, request, response. Req on kliendipoolt apile ja res on vastus api poolt.
    res.status(ok).json({ // siin on response status ja response json, milline on sisuga         hello world
        message: 'Hello world!',
    });
});

app.get('/users', (req: Request, res: Response) => {
    res.status(ok).json({
        users: db.users,
    });
});

app.post('/users', (req: Request, res: Response) => {

    res.status(ok).json({
        message: 'post users',
    });
});

app.listen(port, () => {
    console.log('Server is running');
});
