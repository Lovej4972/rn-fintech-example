export default class User {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getPhone() {
    return this.phone;
  }
}
