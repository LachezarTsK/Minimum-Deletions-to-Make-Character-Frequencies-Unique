
/**
 * @param {string} inputString
 * @return {number}
 */
var minDeletions = function (inputString) {

    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let i = 0; i < inputString.length; ++i) {
        ++frequency[inputString.codePointAt(i) - ASCII_SMALL_CASE_A];
    }

    frequency.sort((x, y) => x - y);
    let maxFrequency = inputString.length;
    let countDeletions = 0;

    for (let i = ALPHABET_SIZE - 1; i >= 0; --i) {
        if (frequency[i] > maxFrequency) {
            countDeletions += frequency[i] - maxFrequency;
            frequency[i] = maxFrequency;
        }
        maxFrequency = Math.max(0, frequency[i] - 1);
    }
    return countDeletions;
};
