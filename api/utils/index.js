function trimProperties(obj) {
    // ✨ implement
    const result = {};
    for (let prop in obj) {
      result[prop] = obj[prop].trim();
    }
    return result;
    // return Object.keys(obj).map(k => obj[k] = obj[k].trim());
  }

module.exports = { trimProperties };