import React from "react";
import styled from "styled-components";
import PageTitle, { IPageTitleProps } from "../molecules/pageTitle";
import IncomePanel, { IIncomePanelProps } from "../organisms/incomePanel";
import InlineForm, { IInlineFormProps } from "../organisms/inlineForm";
import ChartPanel, { IChartPanelProps } from "../organisms/chartPanel";

const HomeStyle = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Incomes = styled.section`
  margin-top: 80px;
`;

export type IHomeTemplateProps = {
  pageTitle: IPageTitleProps;
  form: IInlineFormProps;
  incomes: IIncomePanelProps;
  chartSection: IChartPanelProps;
};

const HomeTemplate = (props: IHomeTemplateProps) => (
  <HomeStyle className="container">
    <PageTitle {...props.pageTitle} />
    <InlineForm {...props.form} />
    <Incomes className="incomes w-100">
      <IncomePanel {...props.incomes} />
    </Incomes>
    <ChartPanel {...props.chartSection} />
  </HomeStyle>
);

export default HomeTemplate;
