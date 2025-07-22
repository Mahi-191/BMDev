@isTest
public class MyIterableTest {
    @isTest
    static void testIterableForLoop() {
        List<String> strings = new List<String> {'Hello', 'World'};
        MyIterable objMyIterable = new MyIterable(strings);
        System.debug('Running the for loop...');
        for (String str : objMyIterable) {
                System.debug('String: '+str);
        }
    }
}