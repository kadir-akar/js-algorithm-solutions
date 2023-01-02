// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Green Garden':
      return 1.5
    case 'Energizer':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let total = 0;
  const arrlimes = {
    small: 6,
    medium: 8,
    large: 10,
  };

  for (let i = 0; i < limes.length; i++) {
    for (let key in arrlimes) {
        if(wedgesNeeded > 0){
          if(limes[i] == key){
            wedgesNeeded -= arrlimes[key]
            total += 1;
          }
        }
      }
    }
    return total;
  }

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let remainingOrdersList = [...orders];
  let remainingTime = timeLeft;
  while (remainingTime > 0 && remainingOrdersList.length > 0) {
    remainingTime -= timeToMixJuice(remainingOrdersList.shift());
  }
  return remainingOrdersList;
  throw new Error('Please implement the remainingOrders function');
}
