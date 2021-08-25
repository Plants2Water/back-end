function trimProperties(obj) {
    const result = {};
    for (let prop in obj) {
        console.log('typeof obj[prop] :>> ', typeof obj[prop]);
        if (typeof obj[prop] === 'string') {
            result[prop] = obj[prop].trim();
        } else {
            result[prop] = obj[prop];
        }
    }
    return result;
    // return Object.keys(obj).map(k => obj[k] = obj[k].trim());
  }

module.exports = { trimProperties };