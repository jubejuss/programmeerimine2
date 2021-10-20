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
  teenused: Teenus[];
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
  // enne Categories
  teenused: [
    {
      id: 1,
      name: 'Koolitööd',
      createdBy: 1,
    },
    {
      id: 2,
      name: 'Kodu',
      createdBy: 2,
    },
  ],
  excuses: [
    {
      id: 1,
      description: 'Ei viitsinud teha',
      category: 1,
      createdBy: 1,
      visibility: 'Public',
    },
    {
      id: 2,
      description: 'Ei tahtnud teha',
      category: 1,
      createdBy: 1,
      visibility: 'Public',
    },
    {
      id: 3,
      description: 'Ei jõudnud teha',
      category: 1,
      createdBy: 1,
      visibility: 'Public',
    },
    {
      id: 4,
      description: 'Ei osanud teha',
      category: 1,
      createdBy: 1,
      visibility: 'Public',
    },
    {
      id: 5,
      description: 'Ei tahtnud koristada',
      category: 2,
      createdBy: 1,
      visibility: 'Public',
    },
  ],
};

export default db;
