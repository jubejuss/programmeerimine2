import { Request, Response } from 'express';
import responseCodes from '../general/responseCodes';
import utilitiesService from './service';

const utilitiesController = {
  getAllUtilities: (req: Request, res: Response) => {
    const utilities = utilitiesService.getAllUtilities();
    return res.status(responseCodes.ok).json({
      utilities,
    });
  },
  getUtilityById: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    if (id === res.locals.utility.id || res.locals.utility.role === 'Admin') {
      const utility = utilitiesService.getUtilityById(id);
      if (!utility) {
        return res.status(responseCodes.badRequest).json({
          error: `No utility found with id: ${id}`,
        });
      }
      return res.status(responseCodes.ok).json({
        utility,
      });
    }
    return res.status(responseCodes.notAuthorized).json({
      error: 'You have no permission for this info',
    });
  },
  removeUtility: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    if (!id) {
      return res.status(responseCodes.badRequest).json({
        error: 'No valid id provided',
      });
    }
    const utility = utilitiesService.getUtilityById(id);
    if (!utility) {
      return res.status(responseCodes.badRequest).json({
        message: `Utility not found with id: ${id}`,
      });
    }
    utilitiesService.removeUtility(id);
    return res.status(responseCodes.noContent).json({});
  },
};

export default utilitiesController;
