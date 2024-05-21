function filterBy(array, dataType) {
    const result = [];
    array.forEach(item => {
        let itemType = typeof item;
        if (item === null) itemType = 'null';
        if (Array.isArray(item)) itemType = 'array';

        if (itemType !== dataType) {
            result.push(item);
        }
    });
    return result;
}

function promptArray(message) {
    const input = prompt(message);
    if (!input) return [];
    return input.split(",").map(item => item.trim());
}

function convertStringToType(item) {
    if (item === 'null') return null;
    if (item === 'true') return true;
    if (item === 'false') return false;
    if (!isNaN(item) && item.trim() !== '') return Number(item);
    return item;
}

// Пример использования
const dataString = promptArray("Введите элементы массива через запятую");
const dataType = prompt("Введите тип данных, который хотите исключить");
const convertedArray = dataString.map(convertStringToType);
const filteredData = filterBy(convertedArray, dataType);

console.log(filteredData);