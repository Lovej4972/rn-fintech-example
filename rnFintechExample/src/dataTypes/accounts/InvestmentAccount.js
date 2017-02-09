import Account from './index';

export default class InvestmentAccount extends Account {
  constructor(name, balance, holdings) {
    super(name, balance);
    this.holdings = holdings;
    this.icon = 'show-chart';
  }
  getHoldings() {
    return this.holdings;
  }
  setHoldings() {
    this.holdings = holdings;
  }
}
