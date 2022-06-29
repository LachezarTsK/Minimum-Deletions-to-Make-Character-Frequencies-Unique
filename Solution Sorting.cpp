
#include <string>
#include <vector>
using namespace std;

class Solution {
    
    inline static const int ALPHABET_SIZE = 26;

public:
    int minDeletions(const string& inputString) {

        array<int, ALPHABET_SIZE> frequency{};
        for (int i = 0; i < inputString.length(); ++i) {
            ++frequency[inputString[i] - 'a'];
        }

        priority_queue<int> maxHeap;
        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            if (frequency[i] > 0) {
                maxHeap.push(frequency[i]);
            }
        }

        sort(frequency.begin(), frequency.end());
        int maxFrequency = inputString.length();
        int countDeletions = 0;

        for (int i = ALPHABET_SIZE - 1; i >= 0; --i) {
            if (frequency[i] > maxFrequency) {
                countDeletions += frequency[i] - maxFrequency;
                frequency[i] = maxFrequency;
            }
            maxFrequency = max(0, frequency[i] - 1);
        }
        return countDeletions;
    }
};
