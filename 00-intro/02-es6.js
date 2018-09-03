// * const & let
let troll = 'MRI';
troll = 'JAV'; // ok

const appleFanboy = 'MRI';
appleFanboy = 'JAV'; // crashes

// * arrow functions
const test = x => x + 8;

var test = function(x) {
  return x + 8;
};

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
