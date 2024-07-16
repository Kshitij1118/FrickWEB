public class reversestr {

    public static void main(String[] args) {

        String str = "Flexo", nstr = "";
        char ch;

        System.out.print("Actual: ");
        System.out.println("Flexo");

        for (int i = 0; i < str.length(); i++) {
            ch = str.charAt(i);
            nstr = ch + nstr;
        }

        System.out.println("reverse: " + nstr);
    }

}