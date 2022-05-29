import styled from "styled-components";
import * as React from "react";
import NumberFormat from "react-number-format";

const Input = styled.input`
  border-radius: 2px;
  background-color: #f8f7f8;
  &:focus {
    background-color: #fff;
    box-shadow: none;
  }
`;

const InputCurrency = styled(NumberFormat)`
  border-radius: 2px;
  background-color: #f8f7f8;
  &:focus {
    background-color: #fff;
    box-shadow: none;
  }
`;

export type IBasicInputProps = {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onValueChange?: (value: string) => any;
  currency?: string;
};

const BasicInput = (props: IBasicInputProps): React.ReactElement =>
  props.currency ? (
    <InputCurrency
      thousandSeparator
      prefix={props.currency}
      className={["form-control", props.className].join(" ")}
      inputMode="numeric"
      decimalScale={2}
      onChange={(e) => (props.onChange ? props.onChange(e) : {})}
      onValueChange={(values) => {
        const { value } = values;
        if (props.onValueChange) {
          props.onValueChange(value);
        }
      }}
    />
  ) : (
    <Input
      type={props.type}
      onChange={(e) => (props.onChange ? props.onChange(e) : {})}
      className={["form-control", props.className].join(" ")}
      placeholder={props.placeholder}
      disabled={props.disabled}
      name={props.name}
    />
  );
BasicInput.defaultProps = {
  className: "",
  placeholder: "",
  disabled: false,
  type: "text",
  onChange: () => {},
};

export default BasicInput;
