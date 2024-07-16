package java;

public class countupprlow {

    public static void main(String[] args) {

        String str = "Tweedle Dum";
        int upper = 0, lower = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'A' && ch <= 'Z')
                upper++;
            else
                lower++;
        }

        System.out.println("UpperCase Letter: " + upper);
        System.out.println("LowerCase Letter: " + lower);
        // TODO Auto-generated method stub
    }
}