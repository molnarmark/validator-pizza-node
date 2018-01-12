🍕 Validator Pizza Node
=======

Validator Pizza Node is a tiny *(552kb)* promise based library for [http://validator.pizza](http://validator.pizza) which helps you verify if an email or domain is a disposable email service provider.

## Install
`
npm install -save validator-pizza-node
`
## Usage
```javascript
const ValidatorPizzaClient = require("validator-pizza-node");

const client = new ValidatorPizzaClient();
client.validate("domain", "yopmail.com")
  .then(response => {
    console.log(response.valid());
    console.log(response.field("mx")); // Available fields: status, email, domain, mx, disposable, alias, did_you_mean, remaining_requests
    console.log(response.successful());
  });

```

## Developer

 - Mark Molnar

## License
[MIT](https://opensource.org/licenses/mit-license.php)