import CSV from './csv.js';

export default class {
  constructor() {
    this.inputTextArea = document.querySelector("#csv-input");
    this.output = document.querySelector("#output");
    this.convertButton = document.querySelector("#convert");
    this.warningsMessageContainer = document.querySelector("#warning")
    this.uploadCSV = document.querySelector("#csv-upload");

    this.csv =  new CSV();
    this.reader = new FileReader();


    this.handleConversion = this.handleConversion.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleFileLoad = this.handleFileLoad.bind(this);


    this.reader.onload = this.handleFileLoad;

  }

  setWarning(warnMessage) {
    this.warningsMessageContainer.textContent = warnMessage;
  }

  setOutput(outputStr) {
    this.output.textContent = outputStr;
  }

  printJSON(text) {
    this.csv.setInput(text);
    const isValid = this.csv.checkValidity();
    if(isValid) {
      this.setWarning('')
      this.setOutput(this.csv.toJSON())
    } else {
      this.setWarning('Incorrect CSV');
    }
  }

  handleFileLoad(ev) {
    const text = ev.target.result;
    this.printJSON(text);
  }

  handleConversion(ev) {
    ev.preventDefault();
    const text = this.inputTextArea.value
    this.printJSON(text);
  }

  handleUpload(ev) {
    const file = ev.target.files[0];
    if(file) {
      this.reader.readAsText(file);
    }
  }

  init() {
    this.convertButton.addEventListener('click', this.handleConversion)
    this.uploadCSV.addEventListener("change", this.handleUpload, false);
  }
}