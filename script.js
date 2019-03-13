// 1) Array.prototype.every

var arrayEvery = [8, 54, 18, 130, 44];
var checkEvery = 0;

var resultEvery = arrayEvery.every(function (element) {
    return typeof element === "number";
});
console.log('Метод "every" - ' + resultEvery);

function every() {
    for (var i = 0; i < arrayEvery.length; i++) {
        if (typeof arrayEvery[i] === "number") {
            checkEvery++;
            if (checkEvery == arrayEvery.length) {
                return true;
            }
        } else {
            return false;
        }
    }
}
console.log('Полифил метода "every" - ' + every());
console.log('');


// 2) Array.prototype.some

var arraySome = ['8', '54', 18, '130', '44'];
var checkSome = 0;

var resultSome = arraySome.some(function (element) {
    return typeof element === "number";
});
console.log('Метод "some" - ' + resultSome);

function some() {
    for (var i = 0; i < arraySome.length; i++) {
        if (typeof arraySome[i] === "number") {
            return true;            
        } else {
            checkSome++;
            if (checkSome == arraySome.length) {
                return false;
            }
        }
    }
}

console.log('Полифил метода "some" - ' + some());
console.log('');


// 3) Array.prototype.map

var arrayMap = [8, 54, 18, 130, 44];

var resultMap = arrayMap.map(function (element) {
    return element * 2;
});
console.log('Метод "map" - ' + resultMap);

function map() {
    var PollMap = [];
    for (var i = 0; i < arrayMap.length; i++) {
        PollMap.push(arrayMap[i] * 2);
    }
    return PollMap;
}

console.log('Полифил метода "map" - ' + map());
console.log('');


// 4) Array.prototype.forEach

var arrayForEach = [8, 54, 18, 130, 44];

console.log('Метод "forEach" - ');
arrayForEach.forEach(function(element) {
    console.log(element);
});

console.log('Полифил метода "forEach" - ');
function forEach() {
    for (var i = 0; i < arrayForEach.length; i++) {
        console.log(arrayForEach[i]);
    }
}
forEach();
console.log('');


// 5) Array.prototype.find

var arrayFind = [8, 54, 18, 'строка', 44, 'строка2'];
var checkFind = 0;

var resultFind = arrayFind.find(function (element) {
    return typeof element === 'string';
});
console.log('Метод "find" - ' + resultFind);

function find() {
    for (var i = 0; i < arrayFind.length; i++) {
        if (typeof arrayFind[i] === 'string') {
            return arrayFind[i];
        } else {
            checkFind++;
            if (checkFind == arrayFind.length) {
                return undefined;
            }
        }
    }
}

console.log('Полифил метода "find" - ' + find());
console.log('');


// 6) Array.prototype.filter

var arrayFilter = [8, 54, 18, 'строка', 44, 'строка2', 'строка 3'];

const resultFilter = arrayFilter.filter(string => typeof string === 'string');

console.log('Метод "filter" - ' + resultFilter);

function filter() {
    var PollFilter = [];
    for (var i = 0; i < arrayFilter.length; i++) {
        if (typeof arrayFilter[i] === 'string') {
            PollFilter.push(arrayFilter[i]);
        }        
    }
    return PollFilter;
}

console.log('Полифил метода "filter" - ' + filter());
console.log('');


// 7) Array.prototype.flat / flatMap

var arrayFlat = [8, 54, 18, 'строка', 44, [1, 34, 28, [9, 23, 5, 0], 54], 'строка3'];
var arrayResult = [];
console.log('Метод "flat" - ');
console.log(arrayFlat.flat(1));

function flat(array, depth) {
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && depth != 0) {
            depth--;
            flat(array[i], depth);
        } else {
            arrayResult.push(array[i]);
        }
    }
}
flat(arrayFlat, 1);

console.log('Полифил метода "flat" - ');
console.log(arrayResult);
console.log('');


// 8) Array.prototype.reduce

var arrayReduce = [1, 2, 3, 4, 5];

console.log('Метод "reduce" - ' + arrayReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 5));

function reduce(array, startValue) {
    var accumulator = 0;
    if (startValue >= 0) {
        accumulator += startValue; 
    }
    for (var i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
}
console.log('Полифил метода "reduce" - ' + reduce(arrayReduce, 5));

