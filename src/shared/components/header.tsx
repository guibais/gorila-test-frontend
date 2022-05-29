import BasicButton, {
  IBasicButtonProps,
} from "../../components/ui/atoms/BasicButton";
import React from "react";

export type IHeaderProps = {
  image: string;
  alt: string;
  title: string;
  actionButton: IBasicButtonProps;
};

export function Header(props: IHeaderProps) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={props.image}
            alt={props.alt}
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          {props.title}
        </a>
        <BasicButton {...props.actionButton} />
      </div>
    </nav>
  );
}
