// Enter arguments in the command line

import argv from 'node:process';
// Import module for coloring random hex color strings
import kuler from 'kuler';
// Import module for random color generation
import randomColor from 'randomcolor';

// Extract random hex-code based on user input
const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

// Coloring box elements
const elHashColorLang = kuler('#'.repeat(31), color);
const elHashColorKurz = kuler('#'.repeat(5), color);
const elEmptyLang = kuler(' '.repeat(19), color);
const elEmptyKurz = kuler(' '.repeat(5), color);
const elHexColor = kuler(`${color}`, color);

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
