const stringLength = (string) => {
    return string.length;
}
const reverseString = (string) => {
    return string.split('').reverse().join('');
}
const capitalize = (string) => {
    return string.toUpperCase();
}

module.exports = { stringLength, reverseString, capitalize }