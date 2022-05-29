import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export type ISimpleChartProps = {
  data: ChartData<"pie", number[], unknown>;
};

export const SimpleChart = (props: ISimpleChartProps) => {
  return <Pie data={props.data} />;
};
