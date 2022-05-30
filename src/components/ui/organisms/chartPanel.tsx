import * as React from "react";
import styled from "styled-components";
import { ISimpleChartProps, SimpleChart } from "../atoms/simpleChart";

const ChartSection = styled.section`
  margin: 80px 0;
`;

export type IChartPanelProps = {
  title: string;
  chart: ISimpleChartProps;
  showChart: boolean;
  isLoading: boolean;
};

const ChartPanel = (props: IChartPanelProps): React.ReactElement => {
  return (
    <ChartSection className="col-md-4 col-12">
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          {props.isLoading ? (
            <div className="loader">
              <div className="icon" />
            </div>
          ) : props.showChart ? (
            <SimpleChart {...props.chart}></SimpleChart>
          ) : (
            "Nenhum dado inserido"
          )}
        </div>
      </div>
    </ChartSection>
  );
};

export default ChartPanel;
