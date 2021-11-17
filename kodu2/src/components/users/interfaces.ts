interface NewUser {
  apartment: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  IBAN: string;
}

interface User extends NewUser {
  id: number;
}

interface UpdateUser {
  id: number;
  apartment: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  IBAN: string;
}

export { User, UpdateUser, NewUser };
