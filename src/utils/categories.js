export const getCategoryById = (categories, categoryId) => {
  const category = categories.find((category) => category.id === categoryId);

  if (!category) {
    return;
  }
  return category.name;
};
