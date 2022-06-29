
import java.util.Collections;
import java.util.PriorityQueue;

public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int minDeletions(String inputString) {
        int[] frequency = new int[ALPHABET_SIZE];
        for (int i = 0; i < inputString.length(); ++i) {
            ++frequency[inputString.charAt(i) - 'a'];
        }

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            if (frequency[i] > 0) {
                maxHeap.add(frequency[i]);
            }
        }

        int countDeletions = 0;
        while (maxHeap.size() > 1) {
            int maxFrequency = maxHeap.poll();

            if (maxFrequency == maxHeap.peek()) {
                ++countDeletions;
                if (maxFrequency - 1 > 0) {
                    maxHeap.add(maxFrequency - 1);
                }
            }
        }
        return countDeletions;
    }
}
