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

function BasicButton(props: IBasicButtonProps): React.ReactElement {
  const BasicButtonStyle = styled.button`
    &:focus {
      box-shadow: none;
    }
    &:hover {
      ${props.isOutlined ? "" : "background-color: #4c88e2;"}
    }
    ${props.isOutlined ? "" : "background-color: #174994;"}
  `;

  return (
    <BasicButtonStyle
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
}
BasicButton.defaultProps = {
  className: "",
  disabled: false,
  type: ButtonType.BUTTON,
  isLoading: false,
};

export default BasicButton;
