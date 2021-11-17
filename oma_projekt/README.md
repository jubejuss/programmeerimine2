# Housekeeping API

## Controllers

First i make `users`catalogue in components folder and controller.ts into that.
Then i put into that:

```javascript
const usersController = {
  getAllUsers: (req: Request, res: Response) => {
    const { users } = db;
    return res.status(responseCodes.ok).json({
      users,
    });
  },
  getUserById: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    const user = db.users.find((element) => element.id === id);
    if (!user) {
      return res.status(responseCodes.badRequest).json({
        error: `No user found with id: ${id}`,
      });
    }
    return res.status(responseCodes.ok).json({
      user,
    });
  },
};
```

Thats all is connected with getting users.  
Now i had some errors – i dont have database (db). So i must make db into source folder – db.ts.

Now i miust import db to index.ts to use it: `import db from './db';`
and also that users controller: `import usersController from './components/users/controller';`

Then i want to get from users controller function get all users. So i add this to index.ts:

```javascript
app.get('/users', usersController.getAllUsers);

app.get('/users/:id', usersController.getUserById);
```

To allow db usage in controller i must import db to user/controller.ts  
Also i must import: `import { Request, Response } from 'express';`
and: `import responseCodes from '../general/responseCodes';`
And for that reason i crate new ts file `responseCodes.ts` into general folder.  


