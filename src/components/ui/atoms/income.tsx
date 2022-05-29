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
const IncomeStyle = styled.li`
  align-items: center;
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

const Income = (props: IIncomeProps): React.ReactElement => {
  if (props.isLoading) {
    return (
      <SkeletonStyle>
        <Skeleton />
      </SkeletonStyle>
    );
  }

  return (
    <div className="list-group-item">
      <IncomeStyle className="d-flex w-100 justify-content-between">
        {props.date ? (
          <PillStyle className="badge rounded-pill bg-success">
            <span className="visually-hidden"></span>
          </PillStyle>
        ) : null}
        {props.date ? [format(new Date(props.date), "dd-MM-yyyy")] : null}{" "}
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
      </IncomeStyle>
    </div>
  );
};

export default Income;
