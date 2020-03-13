module.exports = toolbox => {
  function hexToDec (num) {
    return parseInt(num, 16);
  }

  toolbox.hexToDec = hexToDec;
};
