export interface CashFlowData {
  source: string;
  amount: number;
  date: string;
}

export interface CashFlowProps {
  onSubmit: Function;
  cashFlows: CashFlowData[];
}
