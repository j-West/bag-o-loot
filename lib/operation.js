
const add = require('../lib/add');
const remove = require('../lib/remove');
const update = require('../lib/update');
const showAll = require('../lib/show-all');
const showChild = require('../lib/show-child');

module.exports = (args) => {
  const [operation, name, toy] = args;
  switch (operation) {
    case "add": name === 0 || toy === 0 ? process.exit() : add(name, toy);
    break;
    case "remove": name === 0 || toy === 0 ? process.exit() : remove(name, toy);
    break;
    case "delivered": name === 0 ? process.exit() : update(name);
    break;
    case "ls":
      if(name === 0) {
        return showAll()
      } else return showChild(name);
    break;
    default: process.exit();
  };
};
