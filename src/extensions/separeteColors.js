module.exports = toolbox => {
  function separateColors (hexColor, index) {
    return hexColor.substr(index * 2, 2);
  }

  toolbox.separateColors = separateColors;
};
