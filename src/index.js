const fs = require('fs');
const updater = require('./updater');
const countriesData = require('../data/country_data.json');
let numbersData = require('../data/numbers_data.json');

const DEPARTEMENTS = ['Police', 'Fire', 'Ambulance', 'Dispatch'];

const validateISOCode = (ISOCode) => {
  if (!ISOCode) throw new Error('ISO country code is required');
  if (typeof ISOCode !== 'string') throw new Error('ISO country code must be a string');
  if (ISOCode.length > 2) throw new Error('ISO country code must be two-letters in length');
  if (/\d/.test(ISOCode)) throw new Error('ISO country code must contain only alphabets');
};

const getCountryInfo = (ISOCode) => {
  validateISOCode(ISOCode);
  const countryData = countriesData[ISOCode.toUpperCase()];
  if (!countryData) throw new Error('Invalid ISO country code');
  return countryData;
};

const getEmergencyNumbers = (ISOCode) => {
  validateISOCode(ISOCode);
  const countryNumbers = numbersData[ISOCode.toUpperCase()];
  if (!countryNumbers) throw new Error('Invalid ISO country code');
  return countryNumbers;
};

exports.countryInfo = ISOCode => getCountryInfo(ISOCode);

exports.isMemberOf112 = ISOCode => getCountryInfo(ISOCode).member_of_112;

exports.isLocalOnly = ISOCode => getCountryInfo(ISOCode).local_only;

exports.all = ISOCode => getEmergencyNumbers(ISOCode);

DEPARTEMENTS.forEach((dep) => {
  exports[dep.toLowerCase()] = (ISOCode) => {
    const numbers = getEmergencyNumbers(ISOCode);
    return numbers[dep];
  };
});

exports.update = () => new Promise((resolve, reject) => {
  updater.download('https://raw.githubusercontent.com/Zaydme/sos/master/data/numbers_data.json', '../data/numbers_data.json').catch((err) => {
    reject(err);
  }).then(() => {
    numbersData = JSON.parse(fs.readFileSync('../data/numbers_data.json'));
    resolve('Successfully updated emergency numbers dataset');
  });
});
