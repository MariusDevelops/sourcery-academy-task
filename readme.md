# Sourcery Academy Task

## Task Description

The goal is to create a method that compress a string by reducing sequences of repeating characters into the character followed by the number of times it repeats consecutively.

Task: In your own words, describe the key parts of your solution and the reasoning behind your approach. You can use comments in your code to explain your thought process.
Input: The input string will contain only lowercase letters. It might be empty. Output :

"aaabb" → "a3b2"<br>
"abc" → "a1b1c1"<br>
"" → ""

Optionally: Add decompressing method, which reconstructs the original string.
Input: string will contain characters followed by a number indicating how many times the character repeats consecutively. Output:

"a3b2" → "aaabb"<br>
"a1b1c1" → "abc"<br>
"" → ""

## To run task

1. Make sure you have installed [node](https://nodejs.org/en)
2. Clone repository `git clone https://github.com/MariusDevelops/sourcery-academy-task.git`
3. Open project folder `cd sourcery-academy-task`
4. Run script `node task.js`
5. You should be able to see compress and decompress test logs
