function trimProperties(obj) {
    const result = {};
    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            result[prop] = obj[prop].trim();
        } else {
            result[prop] = obj[prop];
        }
    }
    return result;
    // return Object.keys(obj).map(k => obj[k] = obj[k].trim());
}

function validateDateFormat(testdate) {
    var date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    return date_regex.test(testdate);
}
  
function validatePasswordFormat(password) {
const pwd_regex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/ ;
return pwd_regex.test(password);
}

module.exports = { 
    trimProperties,
    validateDateFormat,
    validatePasswordFormat,
};