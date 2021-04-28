// ParcelCase converts the first letter to caps
// CamelCase converts the first letter of the second word to caps
// Uppercase converts the second word to all caps

function camelCase(value, cases = { parcelCase: false, upperCase: false }) {
    const parcelCase = cases.parcelCase;
    const upperCase = cases.upperCase;
    value = value.replace(/[^(a-z|A-Z)]/g, " ").trim().split(" ");
    console.log(value);

    const caps = value
        .slice(1)
        .map((val) => val[0].toUpperCase() + val.substr(1));

    const convertToParcelCase = (param) => {
        param = upperCase ? convertToUpperCase(param) : param.join("");
        return param[0].toUpperCase() + param.substr(1);
    };

    const convertToUpperCase = (val) => {
        const allCaps = val.slice(1).map((v) => v.toUpperCase());
        allCaps.unshift(val[0]);
        return allCaps.join("");
    };

    caps.unshift(value[0]);

    if (parcelCase) {
        return convertToParcelCase(caps);
    } else if (upperCase) {
        return convertToUpperCase(caps);
    } else {
        return caps.join("");
    }
}

console.log(camelCase("-_foo bar.", { pascalCase: false}));

module.exports = camelCase;
