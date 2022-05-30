import * as React from "react";
import styled from "styled-components";

export enum ButtonType {
  BUTTON = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export type IBasicButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: ButtonType;
  isLoading?: boolean;
  isOutlined?: boolean;
};

const BasicButtonStyle = styled.button<{ isOutlined?: boolean }>`
  &:focus {
    box-shadow: none;
  }
  &:hover {
    background-color: #1ec0c6;
    border-color: #1ec0c6;
  }
  ${(props) => (props.isOutlined ? "color:" : "background-color:")} #168f93;
  border-color: #168f93;
  &:disabled {
    ${(props) => (props.isOutlined ? "color:" : "background-color:")} #18686b;
    border-color: #18686b;
  }
`;

const BasicButton = (props: IBasicButtonProps): React.ReactElement => {
  return (
    <BasicButtonStyle
      isOutlined={props.isOutlined}
      type={props.type}
      onClick={(e) => (props.onClick ? props.onClick(e) : {})}
      className={[
        "btn",
        props.isOutlined ? "btn-outline-primary" : "btn-primary",
        props.className,
      ].join(" ")}
      disabled={props.isLoading ? true : props.disabled}
    >
      {props.isLoading ? (
        <div className="loader">
          <div className="icon" />
        </div>
      ) : (
        props.children
      )}
    </BasicButtonStyle>
  );
};
BasicButton.defaultProps = {
  className: "",
  disabled: false,
  type: ButtonType.BUTTON,
  isLoading: false,
};

export default BasicButton;
