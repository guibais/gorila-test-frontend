import * as React from "react";
import styled from "styled-components";

export type IPageTitleProps = {
  title: string;
};

const Title = styled.h1`
  font-weight: bold;
  padding-top: 50px;
  padding-bottom: 20px;
`;

function PageTitle(props: IPageTitleProps): React.ReactElement {
  return <Title>{props.title}</Title>;
}

export default PageTitle;
