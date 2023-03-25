const letters = new Set()

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

// values() - returns iterator object containing all the values of the set 
// keys() - returns the value, as set has no key
// entries() - returns [value, value] pairs
console.log(letters.entries())