/* eslint-disable */
const print = require('msducheminjr-frame-print');
/* eslint-enable */

const originalConsole = console.log;
let outputData = '';
const storeLog = (inputs) => {
  (outputData += `${inputs}\n`);
  return null;
};
console.log(`Print is ${print}`);
test('frame-print prints message with stars above and below', () => {
  console.log = jest.fn(storeLog);
  print('You da boss.');
  expect(outputData).toBe('**********\nYou da boss.\n**********\n');
  console.log = originalConsole;
});
