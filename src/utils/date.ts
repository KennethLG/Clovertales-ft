export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript
  const day = date.getDate();

  const formattedDate = `${year}-${month
    .toString()
    .padStart(2, "0")}-${day.toString()}`;
  return formattedDate;
};
