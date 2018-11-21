/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(power === 0) {
        return 1;
    }

    if(power === 1) {
        return base;
    }

    if(power === 2) {
        return base*base;
    }

    return pow(base, power-1) * base;
}

module.exports = pow;
