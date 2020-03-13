module.exports = {
  name: 'hex-to-rgb',
  alias: ['htr'],
  run: async toolbox => {
    const {
      parameters,
      print: { info },
      hexToDec,
      separateColors,
    } = toolbox;

    const hex = parameters.first.toString();
    const r = separateColors(hex, 0);
    const g = separateColors(hex, 1);
    const b = separateColors(hex, 2);

    const rgb = `${hexToDec(r)}, ${hexToDec(g)}, ${hexToDec(b)}`;

    info(`Your rgb color: rgb(${rgb}) or rgba(${rgb}, 1)`);
  }
}
