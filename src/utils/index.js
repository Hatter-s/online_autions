export * from "./categories";

export const getImageByUrl = (collection_name, record_id, filename) => {
  return `${
    import.meta.env.VITE_FILE_URL
  }/${collection_name}/${record_id}/${filename}`;
};
