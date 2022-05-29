import * as React from "react";
import BasicInput, { IBasicInputProps } from "../atoms/BasicInput";

export type IInlineInputProps = {
  input: IBasicInputProps;
  feedback?: string;
};

function InlineInput(props: IInlineInputProps): React.ReactElement {
  return (
    <div className="col-md-auto col-12 mt-2">
      <BasicInput
        className={[
          props.feedback ? "is-invalid" : "",
          props.input.className,
        ].join(" ")}
        {...props.input}
      />
      {props.feedback ? (
        <div className="invalid-feedback">{props.feedback}</div>
      ) : null}
    </div>
  );
}

export default InlineInput;
