import * as React from "react";
import BasicButton, { IBasicButtonProps } from "../atoms/BasicButton";

export type IInlineFormProps = {
  basicButton: IBasicButtonProps;
  inlineForm: React.ReactNode[];
};

function InlineForm(props: IInlineFormProps): React.ReactElement {
  return (
    <form className="row">
      {props.inlineForm.map((el, i) => (
        <React.Fragment key={i}>{el}</React.Fragment>
      ))}
      <div className="col-auto">
        <BasicButton {...props.basicButton} />
      </div>
    </form>
  );
}

export default InlineForm;
