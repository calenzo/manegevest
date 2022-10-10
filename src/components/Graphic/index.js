import * as S from "./styles";

export const Graphic = ({
  widthGraphic = 700,
  heightGraphic = 300,
  elements = [],
}) => {
  const amount = elements?.reduce((prev, current) => prev + current.value, 0);

  return (
    <S.Graphic widthGraphic={widthGraphic} heightGraphic={heightGraphic}>
      {elements?.map(({ id, name, value }) => {
        const percentage = (value * 100) / amount;
        const percentageFormatted = `${percentage}`?.slice(0, 4);

        return (
          <S.GraphicElement
            key={id}
            widthGraphic={widthGraphic}
            heightGraphic={heightGraphic}
            value={value}
            length={elements?.length}
            percentage={Math.floor(percentage) / 100}
          >
            <S.GraphicElementText>{`${name}`}</S.GraphicElementText>
            <S.GraphicElementText>
              {`${percentageFormatted}%`}
            </S.GraphicElementText>
          </S.GraphicElement>
        );
      })}
    </S.Graphic>
  );
};
