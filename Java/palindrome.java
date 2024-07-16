public class palindrome {

    public static void main(String[] args) {

        String str = "Kshitij", reverseStr = "";

        int strLength = str.length();

        for (int i = (strLength - 1); i >= 0; --i) {
            reverseStr = reverseStr + str.charAt(i);
        }

        if (str.toLowerCase().equals(reverseStr.toLowerCase())) {
            System.out.println(str + " is a Palindrom string");
        }

        else {
            System.out.println(str + " is not a Palindrom string");
        }

    }

}
