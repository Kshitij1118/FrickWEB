package java;

public class CountVowelsStr {

    public static void main(String[] args) {

        int vCount = 0, cCount = 0;

        String str = "I am Kshitij Singh";
        str = str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o'
                    || str.charAt(i) == 'u') {
                vCount++;
            }

            else if (str.CharAt(i) >= 'a' && str.charAt(i) <= 'z') {
                cCount++;
            }
        }

        System.out.println("Vowels : " + vCount);
        System.out.println("Consonants : " + cCount);
        // TODO Auto-generated method stub
    }
}