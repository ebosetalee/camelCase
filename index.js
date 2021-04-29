// pascalCase converts the first letter to caps
// CamelCase converts the first letter of the second word to caps
// Uppercase converts the second word to all caps

function camelCase(value, cases = { pascalCase: false, upperCase: false }) {
    const pascalCase = cases.pascalCase;
    const upperCase = cases.upperCase;
    value = value.replace(/[^(a-z|A-Z)]/g, " ").trim();

    let caps = "";
    if (value.search(" ") !== -1) {
        value = value.split(" ")
        caps = value
            .slice(1)
            .map((val) => val[0].toUpperCase() + val.substr(1)); 
        caps.unshift(value[0].toLowerCase());
    } else {
        splitIndex = value.indexOf(value.substr(1).match(/[A-Z]/g));
        caps = [value.slice(0, splitIndex), value.substr(splitIndex)];
    }

    const convertToPascalCase = (param) => {
        param = upperCase ? convertToUpperCase(param) : param.join("");
        return param[0].toUpperCase() + param.substr(1);
    };

    const convertToUpperCase = (val) => {
        const allCaps = val.slice(1).map((v) => v.toUpperCase());
        allCaps.unshift(val[0]);
        return allCaps.join("");
    };

    if (pascalCase) {
        return convertToPascalCase(caps);
    } else if (upperCase) {
        return convertToUpperCase(caps);
    } else {
        return caps.join("");
    }
}

module.exports = camelCase;
