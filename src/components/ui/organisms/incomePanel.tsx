import * as React from "react";
import IncomeList, { IIncomeListProps } from "../molecules/incomeList";

type IIncomePanelProps = {
  list: IIncomeListProps[];
};

function IncomePanel(props: IIncomePanelProps): React.ReactElement {
  return (
    <div className="row">
      {props.list.map((form, i) => (
        <div key={i} className="col-6">
          <IncomeList {...form} />
        </div>
      ))}
    </div>
  );
}

export default IncomePanel;
