export default function renderSearch(arr, searchQuery) {
  const copyArr = [...arr];
  const filteredArr = copyArr.filter((coin) => {
    return coin.values.n.toLowerCase().startsWith(`${searchQuery}`);
  });
  return filteredArr;
}
