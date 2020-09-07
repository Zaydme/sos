const sos = require('../src');

console.log('About the USA', sos.countryInfo('US'));
console.log('Is Morocco a member of the 112 group', sos.isMemberOf112('MA'));
console.log('Can you call US emergency numbers internationally', sos.isLocalOnly('US'));
console.log('French police number is', sos.police('FR')[0].value);
console.log('Greece ambulance number is', sos.ambulance('GR')[0].value);
console.log('Japan fire number is', sos.fire('JP')[0].value);
console.log('US dispatch number is', sos.dispatch('US')[0].value);

const updateDataset = async () => {
    let results = await sos.update();
    console.log(results)
}

updateDataset();