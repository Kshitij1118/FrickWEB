import java.util.*;

public class sortValue {
    static Map<String, Integer> map = new HashMap<>();
    
    public static void sortbyValue() {
        List<Map.Entry<String, Integer>> list = new ArrayList<>(map.entrySet());
        
        Collections.sort(list, new Comparator<Map.Entry<String, Integer>>() {
            public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                return o2.getValue().compareTo(o1.getValue());
            }
        });
        
        for (Map.Entry<String, Integer> entry : list) {
            System.out.println(entry.getKey());
        }
    }
    
    public static void main(String[] args) {
        map.put("apple", 2);
        map.put("banana", 3);
        map.put("cherry", 2);
        map.put("date", 5);
        map.put("elderberry", 5);
        map.put("fig", 1);

        sortbyValue();
    }
}
