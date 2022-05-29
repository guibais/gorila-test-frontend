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
      <div className="col-md-auto col-12 mt-2">
        <BasicButton className="w-100" {...props.basicButton} />
      </div>
    </form>
  );
}

export default InlineForm;
