export function formatDate(date) {
  console.log(date);
  return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
}
