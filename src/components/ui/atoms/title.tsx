import * as React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: lighter;
  }
  img {
    height: 50px;
    width: fit-content;
  }
`;

export type ITitleProps = {
  image?: string;
  alt?: string;
  children?: React.ReactNode;
};

function Title(props: ITitleProps): React.ReactElement {
  return (
    <TitleStyle>
      <img src={props.image} alt={props.alt} />
      <h1>{props.children}</h1>
    </TitleStyle>
  );
}
Title.defaultProps = {
  image: "",
  alt: "",
};

export default Title;
