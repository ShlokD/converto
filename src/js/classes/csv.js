export default class {
  constructor(input = '') {
    this.input = input
    this.process();
  }

  process() {
    if(this.isAString()) {
      const entries = this.input.split(/\r|\n/)
      this.headers = entries[0].split(',');
      this.data = entries
      .slice(1)
      .map(
        entry => entry.split(',').map(elem => elem || "") // set empty entries to empty string
      ).filter(entry => entry.length === this.headers.length) // remove all singular arrays
    }
  }

  setInput(input) {
    this.input = input
    this.process();
  }

  isAString() {
    return typeof this.input === "string"
  }

  isNotEmpty() {
    return this.input.trim().length > 0
  }

  isValidCSV() {
    const hasCommas = !!this.input.match(',');
    if (!hasCommas) return false;

    if(this.data.length === 0) return false;

    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i].length !== this.headers.length) {
        return false;
      }
    }

    return true;
  }

  checkValidity() {
    return this.isAString() && this.isNotEmpty() && this.isValidCSV()
  }

  toJSON() {
    const output = []
    for (let i = 0; i < this.data.length; ++i) {
      const outry = {}
      for (let j = 0; j < this.headers.length; ++j) {
        outry[this.headers[j]] = this.data[i][j]
      }
      output.push(outry);
    }
    return JSON.stringify(output);
  }
}