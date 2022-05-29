import * as React from "react";
import BasicSelect, { IBasicSelectProps } from "../atoms/basicSelect";

export type IInlineSelectProps = {
  select: IBasicSelectProps;
  feedback?: string;
};

function InlineSelect(props: IInlineSelectProps): React.ReactElement {
  return (
    <div className="col-md-auto col-12 mt-2">
      <BasicSelect
        className={[
          props.feedback ? "is-invalid" : "",
          props.select.className,
        ].join(" ")}
        {...props.select}
      />
      {props.feedback ? (
        <div className="invalid-feedback">{props.feedback}</div>
      ) : null}
    </div>
  );
}

export default InlineSelect;
