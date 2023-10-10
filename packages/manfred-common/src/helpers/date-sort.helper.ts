export const convertToDate = (date: string): Date =>
  isNaN(Date.parse(date)) ? new Date('1900-01-01') : new Date(date);

export const getTimeStamp = (date: string): number => convertToDate(date).getTime();
