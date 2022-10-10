import React from "react";

import * as S from "./styles";

export const Menu = ({
  elements = [],
  addElement = () => {},
  deleteElement = () => {},
  setShouldUpdateCategories = () => {},
}) => {
  const [categorie, setCategorie] = React.useState({});

  return (
    <S.Menu>
      <S.MenuAddElement>
        <S.MenuInput
          type="text"
          value={categorie.name || ""}
          onChange={(e) =>
            setCategorie((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Digite aqui o nome..."
        />
        <S.MenuInput
          type="number"
          value={categorie.value || ""}
          onChange={(e) =>
            setCategorie((prev) => ({ ...prev, value: Number(e.target.value) }))
          }
          placeholder="Digite aqui o valor..."
        />
        <S.MenuButton
          type="button"
          value="Adicionar"
          onClick={(e) => {
            addElement(categorie);
            setShouldUpdateCategories(true);
            setCategorie({});
            e.stopPropagation();
          }}
        />
      </S.MenuAddElement>

      {elements?.map(({ id, name, value }, index) => {
        return (
          <S.MenuElement key={id}>
            <S.MenuElementText>
              {index + 1} - {name} - R${value}
            </S.MenuElementText>
            <S.MenuElementText
              onClick={(e) => {
                deleteElement({ id });
                setShouldUpdateCategories(true);
                e.stopPropagation();
              }}
            >
              ❌
            </S.MenuElementText>
          </S.MenuElement>
        );
      })}
    </S.Menu>
  );
};
