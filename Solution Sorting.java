
import java.util.Arrays;

public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int minDeletions(String inputString) {
        int[] frequency = new int[ALPHABET_SIZE];
        for (int i = 0; i < inputString.length(); ++i) {
            ++frequency[inputString.charAt(i) - 'a'];
        }

        Arrays.sort(frequency);
        int maxFrequency = inputString.length();
        int countDeletions = 0;

        for (int i = ALPHABET_SIZE - 1; i >= 0; --i) {
            if (frequency[i] > maxFrequency) {
                countDeletions += frequency[i] - maxFrequency;
                frequency[i] = maxFrequency;
            }
            maxFrequency = Math.max(0, frequency[i] - 1);
        }
        return countDeletions;
    }
}
