const _ = {
	clamp(number, lower, upper){
	  var lowClampedValue = Math.max(number, lower);
	  var clampedValue = Math.min(lowClampedValue, upper)
	  return clampedValue;
	},
  
	inRange(number, start, end){
	  if (end == undefined){
		end = start;
		start = 0;
	  }
	  if (end == start){
		start = 0;
	  }
	  if (start > end) {
		var tmp = end;
		end = start;
		start = tmp;
	  }
	  var isInRange = start <= number && number < end
		return isInRange;
	},
  
	words(string){
	  var words = string.split(' ');
	  return words;
	},
  
	pad(string, length){
	  if (string.length >= length){
		return string
	  };
	  const startPaddingLength = Math.floor((length - string.length) / 2); 
	  const endPaddingLength = length - string.length - startPaddingLength;
	  const paddedString =' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
	  return paddedString;
	},
  
	has(object, key){
	  const hasValue = object[key];
	  if (hasValue != undefined){
		return true;
	  }return false;
	},
  
	invert(object){
	  let invertedObject = {};
	  for(let key in object){
		let originalValue = object[key];
		invertedObject = {[originalValue] : key};
	  }
	return invertedObject;
	},
  
	findKey(object, predicate){
	  for (let key in object){
		let value = object[key];
		let predicateReturnValue = predicate(value);
		if (predicateReturnValue){
		  return key;
		};
	  };
	  undefined
	  return undefined;
	},
  
	drop(array, n){
	  if (!n){
		n = 1;
	  }
	  let droppedArray = array.slice(n);
	  return droppedArray;
	},
  
	dropWhile(array, predicate){
	  const cb = (element, index) => {
		return !predicate(element, index, array);
	  };
	  let dropNumber = array.findIndex(cb);
	  let droppedArray = this.drop(array, dropNumber);
	  return droppedArray;
	},
  
	chunk(array, size){
	  if (!size){
		size = 1;
	  }
	  let arrayChunks = [];
	  for (let i = 0; i < array.length; i += size){
		let arrChunk = array.slice(i, i + size);
		arrayChunks.push(arrChunk);
		}
		return arrayChunks;
	}
  }




// Do not write or modify code below this line.
module.exports = _;