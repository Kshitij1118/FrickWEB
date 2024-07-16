package java;

public class frequencystr {

    public static void main(String[] args) {

        String str = "This is June-7 code running";
        char ch = 'n';
        int frequency = 0;

        for (int i = 0; i < str.length(); i++) {
            if (ch == str.charAt(i)) {
                ++frequency;
            }
        }

        System.out.println("Frequency (" + ch + ") : " + frequency);
        // TODO Auto-generated method stub
    }

}