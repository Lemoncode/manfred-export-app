export const dateExtractor = <T>(item: T, path: keyof T): number => {
  const date = item[path];
  if (typeof date === 'string') {
    return new Date(date).getTime();
  }
  throw new Error(`Invalid path: ${path.toString()}`);
};

export const sortByDate = <T>(array: T[], path: keyof T): T[] =>
  array.sort((a: T, b: T) => dateExtractor(b, path) - dateExtractor(a, path));
