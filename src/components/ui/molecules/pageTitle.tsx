import * as React from "react";

export type IPageTitleProps = {
  title: string;
};

function PageTitle(props: IPageTitleProps): React.ReactElement {
  return <h1>{props.title}</h1>;
}

export default PageTitle;
