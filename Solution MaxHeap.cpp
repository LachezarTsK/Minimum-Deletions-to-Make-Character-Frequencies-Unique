
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

        int countDeletions = 0;
        while (maxHeap.size() > 1) {
            int maxFrequency = maxHeap.top();
            maxHeap.pop();

            if (maxFrequency == maxHeap.top()) {
                ++countDeletions;
                if (maxFrequency - 1 > 0) {
                    maxHeap.push(maxFrequency - 1);
                }
            }
        }
        return countDeletions;
    }
};
