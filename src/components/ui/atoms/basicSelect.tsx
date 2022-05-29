import * as React from "react";
import styled from "styled-components";

const BasicSelectStyle = styled.select`
  border-radius: 2px;
  background-color: #f8f7f8;
`;

export type IBasicInputOptionsProps = {
  value: string;
  title: string;
};

export type IBasicSelectProps = {
  className?: string;
  options: IBasicInputOptionsProps[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => any;
};

function BasicSelect(props: IBasicSelectProps): React.ReactElement {
  return (
    <BasicSelectStyle
      className="form-select"
      onChange={(e) => (props.onChange ? props.onChange(e) : {})}
    >
      {props.options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.title}
        </option>
      ))}
    </BasicSelectStyle>
  );
}
BasicSelect.defaultProps = {
  className: "",
};

export default BasicSelect;
