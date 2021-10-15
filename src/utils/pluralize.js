export const pluralize = (n, arr = ["год", "года", "лет"]) =>
  arr[
    n % 100 > 4 && n % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][n % 10 < 5 ? n % 10 : 5]
  ];