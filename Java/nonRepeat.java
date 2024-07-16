package java;

public class nonRepeat {

    public static void main(String[] args) {

        String str = "Tweedle Dum";
        int index = -1;
        char fnc = ' ';

        if (str.length() == 0) {
            System.out.println("Empty");
        }

        for (char i : str.toCharArray()) {
            if (str.indexOf(i) == str.lastIndexOf(i)) {
                fnc = i;
                break;
            } else {
                index += 1;
            }
        }

        if (index == str.length() - 1) {
            System.out.println("Repeating String");
        } else {
            System.out.println("Non-Repeating String");
        }
        // TODO Auto-generated method stub

    }

}
