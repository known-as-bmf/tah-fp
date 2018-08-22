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
  if (x < 0) {
    return -x;
  }
  return x;
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

// * property shorthand
var x = 0;
var y = 0;

const obj = { x, y };

var obj = { x: x, y: y };

// * object destructuring
const { x, y } = obj;

var x = obj.x;
var y = obj.y;

// * object spreading
var clone = { ...obj };
var clone = Object.assign({}, obj);

var clone = {};
Object.keys(obj).forEach(function(k) {
  clone[k] = obj[k];
});

// * classes
class Hello {
  constructor(message) {
    this.message = message;
  }

  hello() {
    return 'Hello, ' + this.message;
  }
}

var Hello = (function() {
  function Hello(message) {
    this.message = message;
  }
  Hello.prototype.hello = function() {
    return 'Hello, ' + this.message;
  };
  return Hello;
})();
