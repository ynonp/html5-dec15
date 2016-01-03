export default class Summer {
  constructor() {
    this.sum = 0;
  }

  add(n) {
    this.sum += n;
  }

  get currentSum() {
    return this.sum;
  }
}