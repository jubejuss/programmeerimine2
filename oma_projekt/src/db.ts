/**
 * User interface
 */
interface User {
  id: number;
  apartment: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  IBAN: string;
}

/**
 * Category interface
 */
// enne Category
interface teenus {
  UserID: number;
  name: string;
  createdBy: number;
}

/**
 * Excuse interface
 */
interface Excuse {
  id: number;
  description: string;
  createdBy: number;
  category: number;
  visibility: string;
}

/**
 * Database interface
 */
interface Db {
  users: User[];
  teenused: teenus[];
  excuses: Excuse[];
}

const db: Db = {
  users: [
    {
      id: 1,
      apartment: 1,
      firstName: 'Raina',
      lastName: 'Ruven',
      email: 'raina@ruven.ee',
      phone: 67328913,
      IBAN: 'EE642200221020661839',
    },
    {
      id: 2,
      apartment: 2,
      firstName: 'Õie',
      lastName: 'Ester',
      email: 'ester@ester.ee',
      phone: 5102922,
      IBAN: 'EE642200221020661839',
    },
  ],
};

export default db;
