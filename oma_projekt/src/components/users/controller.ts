import { Request, Response } from 'express';
import responseCodes from '../general/responseCodes';
import db from '../../db';

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

export default usersController;
