/**
 * User interface
 */
interface User {
  id: number;
  firstName: string;
  lastName: string;
}

/**
 * Category interface
 */
interface Category {
  id: number;
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
  categories: Category[];
  excuses: Excuse[];
}

export default User;
