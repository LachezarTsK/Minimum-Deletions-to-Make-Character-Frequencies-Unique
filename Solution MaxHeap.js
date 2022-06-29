
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

    const {MaxPriorityQueue} = require('@datastructures-js/priority-queue');
    const maxHeap = new MaxPriorityQueue({compare: (x, y) => y - x});
    for (let i = 0; i < ALPHABET_SIZE; ++i) {
        if (frequency[i] > 0) {
            maxHeap.enqueue(frequency[i]);
        }
    }

    let countDeletions = 0;
    while (maxHeap.size() > 1) {
        let maxFrequency = maxHeap.dequeue();

        if (maxFrequency === maxHeap.front()) {
            ++countDeletions;
            if (maxFrequency - 1 > 0) {
                maxHeap.enqueue(maxFrequency - 1);
            }
        }
    }
    return countDeletions;
};
