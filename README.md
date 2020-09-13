![sos](https://img.shields.io/badge/SOS-red?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAEb0lEQVQ4T3XUS2xUVRzH8e8599yZudPp4/YxdkqbAoWWBhIRSmLBkFCgSMGChg2JCbowJiaK+AgQhQ2vKBgkPqIxceNCEeUVLJhKCYS0rqokLAoJlUIDSV8z7czcmblPFzxsoP5353/y++Qs/v8j+J86mYgv0GCLErTqUtaqd95V3pKWEdfz+h3HOdO5ceOVmXLiycapRNXcsBBH44bRWV1aRmlREUrXcd//ALt1BZl0mrHxccYnJv4uFApvv7Rhw9XpeTn9cDYR31yph64tq63rXFRfT2XUQHdsRHoKzfMIh3RMs4w5s2fTvKBpcblpXv7t/PldM4LnXmjdHA+HTjw7a1YspklIpwlyFoVMBiubwfU8hBDouk44HKa0pIT58+bJyoqKQ13TUAVw/vcLc0tjxT/M6+lW6sxppIBsJkM2n6PgB9gBhDJpIskkkYiBYRjouo4Qktn19diOfeBcV1fvxo6OKwogpIeO1tbVxULb30MuXMTU3o9IWRajns99zyPl+a5+a5Bys1IlahI8E49jmiZKaRiGQU2iRubz+WPAc1rXhQsLzLKyLxKJavSQjjenganGRm719HAtnb4+6Ljb7rveGxNLW/ZPTExcnJxMNWuaVhuNRjGMKCII0G8MkDxzurrTcy4ppbQtZWVlaJpCCkmuYDFaneDmq9uu3z1yeMWR1NQUAAcOAlz5eM+eVUEQXDLu3nm++OYNIn29MD5OSTJJMpffpDRNazWMCFJKgiAgl8tx7949Rjzvw8fYtNq/b19+b23NzgrXvlxXUU6kKIaUgqhSKMESKYWsVZpCCIAA27ZJJpOuZVk9T2KPyspkelO+7zq+DzwYZiUFEuISUEEQPLgQ/825lNKfwQLAfThuStMe93w/AHCl7/sjtuPwwBREIgZmmamKokXLZ9SA4tWr2yoqq1RxKAxAAORdFx+Gpeu5/dlsFv/h84uLY1QP/YP5/Xef7DRLIk9iu3bvLqles/Zw84lf0fYdJFi6FNcPSDsOXkCfONfVtbLcNC83zp9PVEq0L4+ROv4T11JJbtjun2Oet9MKgl755lsyGo22VVVVHV7W0rKoqakRXQ/hBz7JgQEGT/xM8tTJZgHQffGPv2phcd03XxEaGgIgUyhwO53mdi5H0vNdbW07Na+9rhoaGohXVaGUDgTk8wXuDg8zOjZ6dvWqtk0KINffv334268vhTVNVhfHUFIjFgmzMBqlWddxXFeJ5mbk8hVI+Wj9A2zbYXR0lMnJyYxt2zsANIAfu7uHXgnrds5x1kjfJxrSEQhkECA9F11KtEQCVrUB4Ps++XyBkdERxsbG3Ww2u/XFdev6HoMAxzPW1Zdj0ULWcdqsQkHIIEDTJEIIfN8jME3cte3kC3lSkylGRkYYH5/IWJa1dV17++lHzlMf7C/VVSvDQhyLSrHYEAJD09ClRDQ1EXz2ObZtY1k58vn8Wdu2d3SsXz84Pf8UOB1Wgk0KsUQK4qK2zleHPr3jeV6f57q/bOjoGJgp9y+zNOAnu33djAAAAABJRU5ErkJggg==)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?style=for-the-badge)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![Issues](https://img.shields.io/github/issues-raw/Zaydme/sos.svg?maxAge=25000&style=for-the-badge)](https://github.com/Zaydme/sos/issues)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
![Stars](https://img.shields.io/github/stars/Zaydme/sos?style=for-the-badge)

![logo](https://i.imgur.com/cT0QPzY.png)
# SOS
Worldwide Emergency Services Numbers, with self-updater.


#### Installing

```
npm install sos
```

### Usage
```js
const sos = require('sos');

// .countryInfo('ISO_code') gives you details about the country
console.log('About the USA', sos.countryInfo('US'));

// .isMemberOf112('ISO_code') true if the country is part 
// of the 112 emergency number group
console.log('Is Morocco a member of the 112 group', sos.isMemberOf112('MA'));

// .isLocalOnly('ISO_code') true if you can call their 
// emergency numbers internationally
console.log('Can you call US emergency numbers internationally', sos.isLocalOnly('US'));
```

to get emegergency numbers of a country:
```js
sos.police('ISO_code')
sos.ambulance('ISO_code')
sos.fire('ISO_code')
sos.dispatch('ISO_code')
```

Each returns an array of emergency numbers,
each is an object:

**exp:** `{ "type": "All", "value": "911" }`

**type can be:**
- "All": you can call from GSM and Fixed phones.
- "GSM": you can call from GSM only.
- "Fixed": you can call from a landline only.
 
**or to get numbers of all departements:**
```js
.all('ISO_code')
```
---
```js
// examples
console.log('French police number is', sos.police('FR')[0].value);
console.log('Greece ambulance number is', sos.ambulance('GR')[0].value);
console.log('Japan fire number is', sos.fire('JP')[0].value);
console.log('US dispatch number is', sos.dispatch('US')[0].value);
// output
/*
Is Morocco a member of the 112 group false
Can you call US emergency numbers internationally false
French police number is 17
Greece ambulance number is 166
Japan fire number is 119
US dispatch number is 911
*/
```
**To update the emergency numbers dataset**
```js
sos.update() //returns a promise.
```
example:
```js
const updateDataset = async () => {
    let results = await sos.update();
    console.log(results)
}

// run the updateDataset function every day
cont dayInMilliseconds = 1000 * 60 * 60 * 24;
setInterval(function() { updateDataset() }, dayInMilliseconds);
```

### Contribute
Please help us keep the emergency numbers dataset up to date

You can make a pull request adding your country's emergency numbers

or if you have some time, you can update the dataset from this [WikiPedia page](https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers) and add what's messing.
