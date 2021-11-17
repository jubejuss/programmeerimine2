import db from '../../db';
import { Utility, UpdateUtility, NewUtility } from './interfaces';

const utilitiesService = {
  getAllUtilities: (): Utility[] => {
    const { utilities } = db;
    return utilities;
  },

  getUtilityById: (id: number): Utility | undefined => {
    const utility = db.utilities.find((element) => element.id === id);
    return utility;
  },
  removeUtility: (id: number): boolean => {
    const index = db.utilities.findIndex((element) => element.id === id);
    db.utilities.splice(index, 1);
    return true;
  },
  createUtility: async (newUtility: NewUtility) => {
    const id = db.users.length + 1;
    db.utilities.push({
      id,
      ...newUtility,
    });
    return id;
  },
  updateUtility: (utility: UpdateUtility): boolean => {
    const { id, name } = utility;
    const index = db.utilities.findIndex((element) => element.id === id);
    if (name) {
      db.utilities[index].name = name;
    }
    return true;
  },
};

export default utilitiesService;
