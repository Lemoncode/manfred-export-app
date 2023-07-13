
// TOD: move this to common library
// TODO: Fix this right now is removing \n of the inner string fields
export const removeInvalidChars = (json: string): string => {
  return json.replace(/\n/g, '');
};
