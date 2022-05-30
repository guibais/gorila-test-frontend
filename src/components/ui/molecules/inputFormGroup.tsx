import * as React from "react";
import BasicLabel, { IBasicLabelProps } from "../atoms/basicLabel";
import BasicInput, { IBasicInputProps } from "../atoms/basicInput";

export type IInputFormGroupProps = {
  label: IBasicLabelProps;
  input: IBasicInputProps;
  feedback?: string;
};

function InputFormGroup(props: IInputFormGroupProps): React.ReactElement {
  return (
    <div className="form-group my-2">
      <BasicLabel {...props.label} />
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

export default InputFormGroup;
