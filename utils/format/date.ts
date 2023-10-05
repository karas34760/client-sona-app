export const getDaysInMonth = (year: any, month: any) => {
  return new Date(year, month, 0).getDate();
};

export const genDaysFrom = (N: any) => {
  return [...Array(N).keys()].map(i => i + 1);
};
