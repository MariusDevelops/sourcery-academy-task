// The goal is to create a method that compress a string by reducing sequences of repeating characters into the character followed by the number of times it repeats consecutively.

// Task: In your own words, describe the key parts of your solution and the reasoning behind your approach. You can use comments in your code to explain your thought process.
// Input: The input string will contain only lowercase letters. It might be empty.Output :
// "aaabb" → "a3b2"
// "abc" → "a1b1c1"
// "" → ""

// Optionally: Add decompressing method, which reconstructs the original string.
// Input: string will contain characters followed by a number indicating how many times the character repeats consecutively.
// Output:
// "a3b2" → "aaabb"
// "a1b1c1" → "abc"
// "" → ""

const compress = (str) => {
  return str.replace(/(.)\1*/g, (match, char) => `${char}${match.length}`);
};
// I decided to use JavaScript, regular expression and string replace method for a simple and clean code solution. I did not want to have long for loops in a code. It is also good opportunity to practise regex. Now I will explain what each part of the code do:
// str.replace(valueToSearch, valueToChange) - searches a string for a value or a regular expression and returns new string with replaced values.
// /(.)\1*/g, - regex. (.) matches every character and creates group. \1 matches character that was created by group. \1* match zero or more characters of the same captured character.
// (match, char) - calback parameters to change captured value by regex. Match - takes all matched substring by regex. Char = takes first capturing group, first character represented by (.).
// `${char}${match.length}` - with each match it replases string with a character and a length/number of a match.

const decompress = (str) => {
  return str.replace(/([a-z])(\d+)/g, (_, char, num) =>
    char.repeat(Number(num))
  );
};
// Opposite of compress function. Everything basicly a same. Just diferent match, added one more capturing group and used repeat method to print characters for clean code and simplicity. Code description:
// /([a-z])(\d+)/g - ([a-z]) first group captures lower case chars, (\d+) secong group captures number, /g makes sure all matches in a string are replaced
// (match, char, num) - match = "a3" = _ (no need in return), char = "a" (first capturing group), num = "3" (second capturing group)
// char.repeat(Number(num)) - changes type of string num to number and prints repeated character num times.

// compress string test logs
console.log("compress string test logs:");
console.log(`"aaabb" should return "a3b2" => ${compress("aaabb")}`);
console.log(`"abc"should return "a1b1c1" => ${compress("abc")}`);
console.log(`"" should return ""/empty place => ${compress("")}`);
console.log("");

// decompress string test logs
console.log("decompress string test logs:");
console.log(`"a3b2" should return "aaabb" => ${decompress("a3b2")}`);
console.log(`"a1b1c1"should return "abc" => ${decompress("a1b1c1")}`);
console.log(`"" should return ""/empty place => ${decompress("")}`);
