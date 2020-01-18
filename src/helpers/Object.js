
export const isKeyExist = (obj, key) => {
    return obj.hasOwnProperty(key);
};

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const isObjectNotEmpty = (obj) => {
    return Object.keys(obj).length > 0;
};
