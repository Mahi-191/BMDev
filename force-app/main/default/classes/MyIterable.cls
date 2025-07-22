public class MyIterable implements Iterable<String> {
	private List<String> strings;
	public MyIterable(List<String> strings) {
		this.strings = strings;
    }
	// Iterator method that returns an iterator for the strings list
	public Iterator<String> iterator() {
		return strings.iterator();
    }
}