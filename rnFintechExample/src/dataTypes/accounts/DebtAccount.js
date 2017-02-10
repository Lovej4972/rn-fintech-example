import Account from './index';

export default class DebtAccount extends Account {
  constructor(name, balance) {
    super(name, balance);
    this.icon = 'money-off';
    this.type = 'DEBT';
  }
}
