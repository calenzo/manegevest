import { v4 as uuidv4 } from "uuid";

export const getCategories = () => {
  const categories = localStorage.getItem("categories");
  const categoriesFormatted = categories ? JSON.parse(categories) : [];
  return categoriesFormatted;
};

export const addCategorie = (categorie) => {
  const categories = getCategories();
  const newCategorie = {
    ...categorie,
    id: uuidv4(),
  };
  const newCategories = [...categories, newCategorie];
  const categoriesInString = JSON.stringify(newCategories);

  localStorage.setItem("categories", categoriesInString);
  return newCategories;
};

export const deleteCategorie = ({ id }) => {
  const categories = getCategories();
  const newCategories = categories?.filter((categorie) => categorie?.id !== id);
  const categoriesInString = JSON.stringify(newCategories);

  localStorage.setItem("categories", categoriesInString);
  return newCategories;
};
