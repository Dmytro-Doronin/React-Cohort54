export const replaceFake = (str: string) => {
  return str.replace(/^fake:\s*/i, "");
};
