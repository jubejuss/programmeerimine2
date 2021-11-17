import { User } from './components/users/interfaces';
import { Utility } from './components/utilities/interfaces';

interface Db {
  users: User[];
  utilities: Utility[];
}

const db: Db = {
  users: [
    {
      id: 1,
      apartment: 1,
      firstName: 'Aina',
      lastName: 'Mari',
      email: 'mail@mail.ee',
      phone: 67000000,
      IBAN: 'EExxxxxxxx',
    },
    {
      id: 2,
      apartment: 2,
      firstName: 'Maie',
      lastName: 'Jaan',
      email: 'mail@mail.ee',
      phone: 5100000,
      IBAN: 'EExxxxxxxxx',
    },
  ],
  utilities: [
    {
      id: 1,
      name: 'Eesti Gaas',
    },
    {
      id: 2,
      name: 'Tallinna Vesi',
    },
  ],
};

export default db;
