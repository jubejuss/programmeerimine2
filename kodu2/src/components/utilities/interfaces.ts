interface NewUtility {
  name: string;
}

interface Utility extends NewUtility {
  id: number;
}

interface UpdateUtility {
  id: number;
  name: string;
}

export { Utility, UpdateUtility, NewUtility };
