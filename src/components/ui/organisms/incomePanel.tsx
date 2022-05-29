import * as React from "react";
import IncomeList, { IIncomeListProps } from "../molecules/incomeList";

type IIncomePanelProps = {
  list: IIncomeListProps[];
};

function IncomePanel(props: IIncomePanelProps): React.ReactElement {
  return (
    <div className="row">
      {props.list.map((form, i) => (
        <div key={i} className="col-md-6 col-12 my-3">
          <IncomeList {...form} />
        </div>
      ))}
    </div>
  );
}

export default IncomePanel;
