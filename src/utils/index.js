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

export const remainDate = (date) => {
  let compareDate = new Date(date);
  let presentDate = Date.now();
  let differenceInTime = compareDate.getTime() - presentDate;
  if(differenceInTime <= 60000) {
    return '1 minute';
  }

  if(differenceInTime <= 3600000) {
    return Math.round(differenceInTime / 60000) + ' minutes';
  }

  if(differenceInTime <= 86400000) {
    return Math.round(differenceInTime / 3600000) + ' hours';
  }

  let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays + ' days';
}