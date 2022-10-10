import styled from "styled-components";

export const Graphic = styled.div`
  border: 2px solid black;
  width: ${({ widthGraphic }) => `${widthGraphic}px`};
  height: ${({ heightGraphic }) => `${heightGraphic}px`};
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 10px;
`;

export const GraphicElement = styled.div`
  background-color: black;
  opacity: 50%;
  width: ${({ length, widthGraphic }) => `${widthGraphic / length}%`};
  height: ${({ heightGraphic, percentage }) => `${(percentage * heightGraphic)}px`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const GraphicElementText = styled.div`
  color: white;
  font-weight: bolder;
  font-size: larger;
  padding: 0 0 5px 0;
`;