
export const isArrayEmpty = (arr) => {
    return arr.length === 0;
};

export const isArrayNotEmpty = (arr) => {
    return arr.length > 0;
};

export const isIncludes = (array, value) => {
    return array.includes(value);
};
export const arraySplice = (array, spliceAt) => {
    return array.splice(spliceAt, 0);
};

export const arraySlice = (array, spliceAt, limit) => {
    return array.slice(spliceAt, limit);
};

export const arrayPush = (array, data) => {
    return array.push(data);
};

export const arrayConcat = (array, data) => {
    return array.concat(data);
};

export const arrayPop = (array) => {
    return array.pop();
};
