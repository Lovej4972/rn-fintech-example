import Account from './index';

export default class CashAccount extends Account {
  constructor(name, balance) {
    super(name, balance);
    this.icon = 'attach-money';
  }
}
