// 1) Array.prototype.every

var arrayEvery = [8, 54, 18, 130, 44];

var resultEvery = arrayEvery.every(function (element) {
    return typeof element === "number";
});
console.log('Метод "every" - ' + resultEvery);

Array.prototype.myEvery = function (array) {
    var check = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            check++;
            if (check == array.length) {
                return true;
            }
        } else {
            return false;
        }
    }
};

console.log('Полифил метода "every" - ' + Array.prototype.myEvery(arrayEvery));
console.log('');


// 2) Array.prototype.some

var arraySome = ['8', '54', '18', '130', '44'];

var resultSome = arraySome.some(function (element) {
    return typeof element === "number";
});
console.log('Метод "some" - ' + resultSome);

Array.prototype.mySome = function (array) {
    var check = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            return true;            
        } else {
            check++;
            if (check == array.length) {
                return false;
            }
        }
    }
};


console.log('Полифил метода "some" - ' + Array.prototype.mySome(arraySome));
console.log('');


// 3) Array.prototype.map

var arrayMap = [8, 54, 18, 130, 44];

var resultMap = arrayMap.map(function (element) {
    return element * 2;
});
console.log('Метод "map" - ' + resultMap);

Array.prototype.myMap = function (array) {
    var pull = [];
    for (var i = 0; i < array.length; i++) {
        pull.push(array[i] * 2);
    }
    return pull;
}

console.log('Полифил метода "map" - ' + Array.prototype.myMap(arrayMap));
console.log('');


// 4) Array.prototype.forEach

var arrayForEach = [8, 54, 18, 130, 44];

console.log('Метод "forEach" - ');
arrayForEach.forEach(function(element) {
    console.log(element);
});

console.log('Полифил метода "forEach" - ');
Array.prototype.myForEach = function (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
Array.prototype.myForEach(arrayForEach);
console.log('');


// 5) Array.prototype.find

var arrayFind = [8, 54, 18, 'строка', 44, 'строка2'];

var resultFind = arrayFind.find(function (element) {
    return typeof element === 'string';
});
console.log('Метод "find" - ' + resultFind);

Array.prototype.myFind = function (array) {
    var check = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            return array[i];
        } else {
            check++;
            if (check == array.length) {
                return undefined;
            }
        }
    }
}

console.log('Полифил метода "find" - ' + Array.prototype.myFind(arrayFind));
console.log('');


// 6) Array.prototype.filter

var arrayFilter = [8, 54, 18, 'строка', 44, 'строка2', 'строка 3'];

var resultFilter = arrayFilter.filter(string => typeof string === 'string');

console.log('Метод "filter" - ' + resultFilter);

Array.prototype.myFilter = function (array) {
    var pull = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            pull.push(array[i]);
        }        
    }
    return pull;
}

console.log('Полифил метода "filter" - ' + Array.prototype.myFilter(arrayFilter));
console.log('');


// 7) Array.prototype.flat / flatMap

var arrayFlat = [8, 54, 18, 'строка', 44, [1, 34, 28, [9, 23, 5, 0], 54], 'строка3'];
var arrayResult = [];
console.log('Метод "flat" - ');
console.log(arrayFlat.flat(1));

Array.prototype.myFlat = function (array, depth) {
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && depth != 0) {
            depth--;
            Array.prototype.myFlat(array[i], depth);
        } else {
            arrayResult.push(array[i]);
        }
    }
}

Array.prototype.myFlat(arrayFlat, 1);

console.log('Полифил метода "flat" - ');
console.log(arrayResult);
console.log('');


// 8) Array.prototype.reduce

var arrayReduce = [1, 2, 3, 4, 5];

console.log('Метод "reduce" - ' + arrayReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 5));

Array.prototype.myReduce = function (array, startValue) {
    var accumulator = 0;
    if (startValue >= 0) {
        accumulator += startValue; 
    }
    for (var i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
}
console.log('Полифил метода "reduce" - ' + Array.prototype.myReduce(arrayReduce, 5));