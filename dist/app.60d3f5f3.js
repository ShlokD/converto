parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Gc3g":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t(this,e),this.input=i,this.process()}return i(e,[{key:"process",value:function(){var t=this;if(this.isAString()){var e=this.input.split(/\r|\n/);this.headers=e[0].split(","),this.data=e.slice(1).map(function(t){return t.split(",").map(function(t){return t||""})}).filter(function(e){return e.length===t.headers.length})}}},{key:"setInput",value:function(t){this.input=t,this.process()}},{key:"isAString",value:function(){return"string"==typeof this.input}},{key:"isNotEmpty",value:function(){return this.input.trim().length>0}},{key:"isValidCSV",value:function(){if(!!!this.input.match(","))return!1;if(0===this.data.length)return!1;for(var t=0;t<this.data.length;++t)if(this.data[t].length!==this.headers.length)return!1;return!0}},{key:"checkValidity",value:function(){return this.isAString()&&this.isNotEmpty()&&this.isValidCSV()}},{key:"toJSON",value:function(){for(var t=[],e=0;e<this.data.length;++e){for(var i={},n=0;n<this.headers.length;++n)i[this.headers[n]]=this.data[e][n];t.push(i)}return JSON.stringify(t)}}]),e}();exports.default=n;
},{}],"kOXE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./csv.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var r=function(){function t(){n(this,t),this.inputTextArea=document.querySelector("#csv-input"),this.output=document.querySelector("#output"),this.convertButton=document.querySelector("#convert"),this.warningsMessageContainer=document.querySelector("#warning"),this.uploadCSV=document.querySelector("#csv-upload"),this.csv=new e.default,this.reader=new FileReader,this.handleConversion=this.handleConversion.bind(this),this.handleUpload=this.handleUpload.bind(this),this.handleFileLoad=this.handleFileLoad.bind(this),this.reader.onload=this.handleFileLoad}return a(t,[{key:"setWarning",value:function(e){this.warningsMessageContainer.textContent=e}},{key:"setOutput",value:function(e){this.output.textContent=e}},{key:"printJSON",value:function(e){this.csv.setInput(e),this.csv.checkValidity()?(this.setWarning(""),this.setOutput(this.csv.toJSON())):this.setWarning("Incorrect CSV")}},{key:"handleFileLoad",value:function(e){var t=e.target.result;this.printJSON(t)}},{key:"handleConversion",value:function(e){e.preventDefault();var t=this.inputTextArea.value;this.printJSON(t)}},{key:"handleUpload",value:function(e){var t=e.target.files[0];t&&this.reader.readAsText(t)}},{key:"init",value:function(){this.convertButton.addEventListener("click",this.handleConversion),this.uploadCSV.addEventListener("change",this.handleUpload,!1)}}]),t}();exports.default=r;
},{"./csv.js":"Gc3g"}],"cW+T":[function(require,module,exports) {
"use strict";var e=n(require("./classes/controller.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t=function(){(new e.default).init()};window.addEventListener("load",t);
},{"./classes/controller.js":"kOXE"}]},{},["cW+T"], null)
//# sourceMappingURL=https://shlokd.github.io/converto/app.60d3f5f3.js.map