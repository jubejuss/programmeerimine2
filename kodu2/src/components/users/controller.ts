import { Request, Response } from 'express';
import responseCodes from '../general/responseCodes';
import usersService from './service';

const usersController = {
  getAllUsers: (req: Request, res: Response) => {
    const users = usersService.getAllUsers();
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
    if (id === res.locals.user.id || res.locals.user.role === 'Admin') {
      const user = usersService.getUserById(id);
      if (!user) {
        return res.status(responseCodes.badRequest).json({
          error: `No user found with id: ${id}`,
        });
      }
      return res.status(responseCodes.ok).json({
        user,
      });
    }
    return res.status(responseCodes.notAuthorized).json({
      error: 'You have no permission for this info',
    });
  },
  removeUser: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    const user = usersService.getUserById(id);
    if (!user) {
      return res.status(responseCodes.badRequest).json({
        message: `User not found with id: ${id}`,
      });
    }
    usersService.removeUser(id);
    return res.status(responseCodes.noContent).json({});
  },
};

export default usersController;
