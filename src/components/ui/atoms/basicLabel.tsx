import * as React from "react";

export type IBasicLabelProps = {
  for?: string;
  className?: string;
  children?: React.ReactNode;
};

function BasicLabel(props: IBasicLabelProps): React.ReactElement {
  return (
    <label htmlFor={props.for} className={props.className}>
      {props.children}
    </label>
  );
}
BasicLabel.defaultProps = {
  className: "",
  for: "",
};

export default BasicLabel;
