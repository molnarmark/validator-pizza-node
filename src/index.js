const https = require("https");

function ValidatorPizzaResponse(data) {
  this.data = JSON.parse(data);
  this.field = fieldName => this.data[fieldName];
  this.successful = () => this.data.status == 200;
  this.valid = () => !this.data["disposable"];
}

function ValidatorPizzaClient() {
  this.validate = (validationType, validationData, apiKey) => {
    if(apiKey){
      const endpoint = `https://www.validator.pizza/${validationType}/${validationData}?key={apiKey}`;
    }else{
      const endpoint = `https://www.validator.pizza/${validationType}/${validationData}`;
    let response = "";
    return new Promise((resolve, reject) => {
      https.get(endpoint, res => {
        res.on("data", data => response += data);
        res.on("end", () => resolve(new ValidatePizzaResponse(response)));
      });
    });
  }
}

module.exports.ValidatorPizzaClient = ValidatorPizzaClient;
