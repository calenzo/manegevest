import React from "react";

import { Graphic, Menu } from "../../components";

import {
  addCategorie,
  deleteCategorie,
  getCategories,
} from "../../services/categories";

import * as S from "./styles";

export const Home = () => {
  const [categories, setCategories] = React.useState([]);
  const [shouldUpdateCategories, setShouldUpdateCategories] = React.useState(
    []
  );

  React.useEffect(() => {
    const response = getCategories();
    setCategories(response);
    setShouldUpdateCategories(false);
  }, [shouldUpdateCategories]);

  const WithoutResult = () => <p>Nenhuma categoria cadastrada!</p>;

  return (
    <S.Home>
      <S.ContentLeft>
        <Menu
          addElement={addCategorie}
          deleteElement={deleteCategorie}
          elements={categories}
          setShouldUpdateCategories={setShouldUpdateCategories}
        />
      </S.ContentLeft>
      <S.ContentRight>
        {!Boolean(categories?.length) && <WithoutResult />}
        {Boolean(categories?.length) && <Graphic elements={categories} />}
      </S.ContentRight>
    </S.Home>
  );
};
