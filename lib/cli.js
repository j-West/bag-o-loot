
const operation = require('./operation');

const results = operation(require('./parse-args')(process.argv.splice(2)));

if (results === undefined) {
  console.log("Great Success!");
} else {
  results.then((rows) => {
    console.log(rows);
  });
}
