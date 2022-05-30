import * as React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { FaTrash } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

export type IIncomeProps = {
  value: string;
  date?: string;
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  currency?: string;
  isLoading?: boolean;
};
const IncomeStyle = styled.div`
  border: none;
  li {
    align-items: center;
  }
`;

const PillStyle = styled.span`
  width: 1px;
  height: 1px;
  padding: 0.4em;
  margin-right: 0.5em;
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: left;
  width: 37px;
  margin-left: 10px;
`;

const SkeletonStyle = styled.div`
  margin: 10px;
  span {
    span {
      height: 30px;
    }
  }
`;

const SpanActionStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Income = (props: IIncomeProps): React.ReactElement => {
  if (props.isLoading) {
    return (
      <SkeletonStyle>
        <Skeleton />
      </SkeletonStyle>
    );
  }

  return (
    <IncomeStyle className="list-group-item">
      <li className="d-flex w-100 justify-content-between">
        <span>
          {props.date ? (
            <PillStyle className="badge rounded-pill bg-success">
              <span className="visually-hidden"></span>
            </PillStyle>
          ) : null}
          {props.date ? [format(new Date(props.date), "dd-MM-yyyy")] : null}{" "}
        </span>
        <SpanActionStyle>
          {props.currency ? props.currency : ""}
          {props.value}
          {props.action ? (
            <ActionButton
              className="btn btn-danger"
              onClick={(e) => (props.action ? props.action(e) : {})}
            >
              <FaTrash />
            </ActionButton>
          ) : null}
        </SpanActionStyle>
      </li>
    </IncomeStyle>
  );
};

export default Income;
