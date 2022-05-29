import * as React from "react";
import Income, { IIncomeProps } from "../atoms/income";

export type IIncomeListProps = {
  title: string;
  incomeList: IIncomeProps[];
};

function IncomeList(props: IIncomeListProps): React.ReactElement {
  return (
    <>
      <h5>{props.title}</h5>
      {props.incomeList.map((form, i) => (
        <Income key={i} {...form} />
      ))}
    </>
  );
}

export default IncomeList;
