


module.exports = (results) => {
  results.then((results) => {
    results.forEach(({ child_name, child_toy, delivered }) => {
      if(delivered === '1') {
        delivered = 'True';
      }
      else if(delivered === '0') {
        delivered = 'False';
      }
      console.log(`Name: ${child_name} | Toy: ${child_toy} | Delivered: ${delivered}`);
    });
  })
};
