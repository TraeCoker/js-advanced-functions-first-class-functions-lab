const returnFirstTwoDrivers = function(array) {
    const firstTwo = [array[0], array[1]];
    return firstTwo ;
};

const returnLastTwoDrivers = function(array) {
    const lastTwo = [array[array.length - 2], array[array.length - 1]];
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multplier) {
    return function(fare){
        return fare * multplier;
    }
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(arrayOfDrivers, method){
    return method(arrayOfDrivers);
};
