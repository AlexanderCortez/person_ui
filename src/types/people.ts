export type IPerson = {
  name: string;
  favoriteMovie: string;
  date: Date;
};

export type IPersonQueryParams = {
  sortBy: keyof IPerson;
  sortDir: 'asc' | 'desc';
};
