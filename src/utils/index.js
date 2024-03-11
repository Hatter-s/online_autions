export * from "./categories";
export * from "./users";

export const getImageByUrl = (collection_name, record_id, filename) => {
  return `${
    import.meta.env.VITE_FILE_URL
  }/${collection_name}/${record_id}/${filename}`;
};

export const changeDateFormat = (date) => {
  const newDate = new Date(date);
  const dateD = newDate.getDate();
  let month = newDate.getMonth() + 1;
  if (month < 10) {
    month = '0' + month  
  }
  const year = newDate.getFullYear();
  return `${year}-${month}-${dateD}`;
}