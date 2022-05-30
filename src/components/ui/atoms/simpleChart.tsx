import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  CoreChartOptions,
  DatasetChartOptions,
  DoughnutControllerChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/types/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

export type ISimpleChartProps = {
  data: ChartData<"pie", number[], unknown>;
  options:
    | _DeepPartialObject<
        CoreChartOptions<"pie"> &
          ElementChartOptions<"pie"> &
          PluginChartOptions<"pie"> &
          DatasetChartOptions<"pie"> &
          ScaleChartOptions<"pie"> &
          DoughnutControllerChartOptions
      >
    | undefined;
};

export const SimpleChart = (props: ISimpleChartProps) => {
  return <Pie options={props.options} data={props.data} />;
};
