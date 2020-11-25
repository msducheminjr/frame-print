const print = require('msducheminjr-frame-print');
const originalConsole = console.log;
let outputData = '';
storeLog = inputs => (outputData += inputs + '\n');
console.log('Print is ' + print);
test('frame-print prints message with stars above and below', () => {
  console['log'] = jest.fn(storeLog);
  print('You da boss.');
  expect(outputData).toBe('**********\nYou da boss.\n**********\n');
  console['log'] = originalConsole;
});
