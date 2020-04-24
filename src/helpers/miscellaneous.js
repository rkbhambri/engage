
export const isMobileView = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const getCapitalizeText = (text) => {
    return text.replace(/\b\w/g, l => l.toUpperCase());
}

export const isEmpty = (item) => {
    return item.trim() === '';
};

export const isEqual = (item1, item2) => {
    if (typeof (item1) === 'number' && typeof (item2) === 'number') {
        return item1 === item2;
    }
    if (typeof (item1) === 'string' && typeof (item2) === 'string') {
        return item1.toLowerCase() === item2.toLowerCase();
    }
};

export const containsOnlyNumber = (item) => {
    let regex = /^[0-9]*$/;
    return regex.test(item);
};

export const isGreaterThan = (item1, item2) => {
    return item1 > item2;
};

export const isGreaterThanOrEqualTo = (item1, item2) => {
    return item1 >= item2;
};

export const isLessThan = (item1, item2) => {
    return item1 < item2;
};

export const isLessThanOrEqualTo = (item1, item2) => {
    return item1 <= item2;
};

export const create_UUID = (name) => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });
    return uuid.concat(name);
};

export const getDateTime = (timeStamp) => {
    const date = new Date(timeStamp);
    const dateTime = (
        date.getUTCFullYear() +
        '-' + ('0' + date.getUTCMonth()).slice(-2) +
        '-' + ('0' + date.getUTCDate()).slice(-2) +
        ' ' + ('0' + date.getUTCHours()).slice(-2) +
        ':' + ('0' + date.getUTCMinutes()).slice(-2) +
        ':' + ('0' + date.getUTCSeconds()).slice(-2)
    );
    return dateTime;
};

export const getDate = (timeStamp) => {
    const date = new Date(timeStamp);
    const updatedDate = (
        date.getUTCFullYear() +
        '-' + ('0' + date.getUTCMonth()).slice(-2) +
        '-' + ('0' + date.getUTCDate()).slice(-2)
    );
    return updatedDate;
};

export const convertDateFormat = (date, customDateFormat) => {
    date = new Date(date);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    if (customDateFormat) {
        return `${day}/${month}/${date.getFullYear()}`
    }
    return `${date.getFullYear()}-${month}-${day}`;
};

export const convertToTimestamp = (date) => {
    return new Date(date).getTime();
};

export const isAndroid = () => {
    // var ua = navigator.userAgent;
    return !navigator.userAgent.match(/Android/i);
    // if (!(ua.match(/Android/i))) {
    //     //this code will run only when there is any non-android client.
    // }
};
