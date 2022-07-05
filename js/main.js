import './array-generating.js';
import './cards.js';
import {listOfBookingObjects} from './data.js';
import {disableForms} from './form.js';
import {enableForms} from './form.js';
import {createObject} from './cards.js';
import {bookingObjectArray} from './cards.js';

createObject(bookingObjectArray[1]);

/*eslint-disable */
console.log(listOfBookingObjects());
console.log(createObject(bookingObjectArray[1]));
/*eslint-enable */

export {listOfBookingObjects};

disableForms();
enableForms();
