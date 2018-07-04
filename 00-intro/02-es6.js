// * const & let
let troll = 'MRI';
troll = 'JAV'; // ok

const appleFanboy = 'MRI';
appleFanboy = 'JAV'; // crashes

// * arrow functions
var test = function(x) {
  return x + 8;
};

const test = x => x + 8;
const test = x => {
  return x + 8;
}

// * rest params
const test = (a, b, ...rest) => {
  // do stuff
};

const test = function(a, b) {
  var rest = Array.prototype.slice.call(arguments, 2);
  // do stuff
};

// * spread operator
func(...arr);

func(arr[0], arr[1], arr[2] /* , ... */);

// * property shorthand
var x = 0;
var y = 0;

var obj = { x, y };

var obj = { x: x, y: y };

// * object destructuring
var clone = { ...obj };
var clone = Object.assign({}, obj);

var clone = {};
Object.keys(obj).forEach(function(k) {
  clone[k] = obj[k];
});
