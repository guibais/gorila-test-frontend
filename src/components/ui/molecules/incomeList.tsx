import * as React from "react";
import styled from "styled-components";
import Income, { IIncomeProps } from "../atoms/income";

export type IIncomeListProps = {
  title: string;
  incomeList: IIncomeProps[];
  isLoading?: boolean;
};

const IncomeListStyle = styled.div`
  width: 18rem;
`;

function IncomeList(props: IIncomeListProps): React.ReactElement {
  return (
    <IncomeListStyle className="card w-100">
      <div className="card-header">{props.title}</div>
      <ul className="list-group list-group-flush">
        {props.isLoading ? (
          [1, 2, 3, 4, 5].map((x, i) => (
            <Income key={i} value={""} isLoading={true} />
          ))
        ) : props.incomeList.length == 0 ? (
          <Income key={0} value={"Nenhum dado cadastrado"} />
        ) : null}
        {props.incomeList.map((form, i) => (
          <Income key={i} {...form} currency="R$" />
        ))}
      </ul>
    </IncomeListStyle>
  );
}

export default IncomeList;
