import * as React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { FaTrash } from "react-icons/fa";

export type IIncomeProps = {
  value: string;
  date: string;
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const IncomeStyle = styled.div`
  align-items: center;
`;

const PillStyle = styled.span`
  width: 1px;
  padding: 0.4em;
  margin-right: 0.5em;
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: left;
  width: 37px;
  margin-left: 10px;
`;

function Income(props: IIncomeProps): React.ReactElement {
  return (
    <IncomeStyle className="row">
      <PillStyle className="badge rounded-pill bg-success">
        <span className="visually-hidden">New Income</span>
      </PillStyle>
      {[format(new Date(props.date), "dd-MM-yyyy")]} R$
      {props.value}
      <ActionButton
        className="btn btn-danger"
        onClick={(e) => (props.action ? props.action(e) : {})}
      >
        <FaTrash />
      </ActionButton>
    </IncomeStyle>
  );
}

export default Income;
