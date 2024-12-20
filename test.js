var tests = [
    "$1,530,602.24", "1,530,602.24", "$1,666.24$", ",1,666,88,", "1.6.66,6", ".1555."
];

var regex = /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;

for (i = 0; i < tests.length; i++) { 
  console.log(tests[i] + ' // ' + regex.test(tests[i]));
  document.write(tests[i] + ' // ' + regex.test(tests[i]) + '<br/>');
}