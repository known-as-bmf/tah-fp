import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Java8 {

    public static void main(String[] args) {
        List<String> lines = Arrays.asList("spring", "node", "js");

        List<String> result = lines.stream()             // convert list to stream
                .filter(line -> !"spring".equals(line))  // we dont like spring
                .map(line -> line + " is cool")
                .collect(Collectors.toList());           // collect the output and convert streams to a List

        result.forEach(System.out::println);             //output : node, js
    }

}
