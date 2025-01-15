// Import module for coloring random hex color strings
import kuler from 'kuler';
// Import module for random color generation
import randomColor from 'randomcolor';

// const varLum = argv[3];
const test = process.argv;
const hueVal = test[2];
const luminosityVal = test[3];

// Extract random hex-code based on user input
const color = randomColor({
  luminosity: luminosityVal,
  hue: hueVal,
});

// Coloring box elements
const elHashColorLang = kuler('#'.repeat(31), color);
const elHashColorKurz = kuler('#'.repeat(5), color);
const elEmptyLang = kuler(' '.repeat(19), color);
const elEmptyKurz = kuler(' '.repeat(5), color);
const elHexColor = kuler(color, color);

// Print box elements to console
console.log(`
  ${elHashColorLang}
  ${elHashColorLang}
  ${elHashColorLang}
  ${elHashColorKurz} ${elEmptyLang} ${elHashColorKurz}
  ${elHashColorKurz} ${elEmptyKurz} ${elHexColor} ${elEmptyKurz} ${elHashColorKurz}
  ${elHashColorKurz} ${elEmptyLang} ${elHashColorKurz}
  ${elHashColorLang}
  ${elHashColorLang}
  ${elHashColorLang}
  `);
