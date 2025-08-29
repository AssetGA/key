export const findType = (type: string) => {
  const findElem = abouts.find((elem) => {
    return elem.type === name;
  });
  return findElem?.name;
};
