if (false) {
  let re;
  re = /hello/;
  re = /hello/i; // i = case insensitive
  re = /hello/g; // global search for all instance instead of the first one found

  console.log(re); // /hello/

  console.log(re.source); // hello

  // exec() - Return result in a an array if match otherwise returns null
  const result = re.exec("hello world");

  console.log(result); // returns ["Hello", index: 0, input: "hello world"]
  console.log(result[0]); // returns hello
  console.log(result.index); // returns result index -> 0
  console.log(result.input); // returns search string

  // test() - Returns true or false if there is a match
  const result = re.test("Hello");
  console.log(result);

  // match() - Returns result array or null
  const str = "Hello There";
  const result = str.match(re);
  console.log(result);

  // search() - Returns the index of the first match if not found returns -1
  const str = "Hello There";
  const result = str.search(re);
  console.log(result); // returns index, 0 in this case

  // replace() - Returns a new string with some or all matches of a pattern
  const str = "Hello There";
  new newStr() = str.replace(re, "Hi");
  console.log(newStr);
}

if (false) {
  /**
   * Metacharacter Symbols
   */
  let re;

  // Literal Characters
  re = /hello/;
  re = /hello/i;

  // Metacharacter Symbols
  re = /^h/i; // ^ means must start with
  re = /d$/i; // $ means must ends with
  re = /^hello$/i; // means must start with and end with
  re = /^h.llo$/i; // . means matches any ONE character
  re = /^h*llo$/i; // * means any character 0 or more times
  re = /gre?a?y/i; // ? means optional character
  re = /gre?a?y\?/i; // Escape character

  // string to match
  const str = "Hello World";

  // log Results
  const result = re.exec(str);
  console.log(result);

  function reTest(re, str) {
    if (str.test(str)) {
      console.log(`${str} matches ${re.source}`);
    } else {
      console.log(`${str} does not match ${re.source}`);
    }
  }

  reTest(re, str);
}

if (false) {
  /**
   * Character Sets & Quantifiers
   */

  let re;

  // Brackets [] - Chaarcter Sets

  re = /gr[ae]y/i; // Must be an a or e
  re = /[GF]ray/; // Must be a G or F
  re = /[^GF]ray/i; // Matches anything but a G or F
  re = /^[GF]ray/; // Must starts with a G or F
  re = /^[A-Z]ray/; // Match any uppercase letter
  re = /^[a-z]ray/; // Match any lowercase letter
  re = /^[A-Za-z]ray/; // Match any letter
  re = /[0-9]/; // Match any digit

  // Barces {} - Quantifiers

  re = /Hel{2}o/i; // Must occur exactly 'x' times
  re = /Hel{2,4}o/i; // Can occur at least 2 time to 4 times max
  re = /Hel{2,}o/i; // Must occur at least 2 times

  // Parentheses () - Grouping

  re = /([0,9]x){3}/; // group within parenthese must occur 3 times

  // log Results
  const result = re.exec(str);
  console.log(result);
}

if (true) {
  /**
   * Shorthand Character
   */

  let re;

  re = /\w/; // Word character - alphanumeric or _
  re = /\w+/; // + = one or more
  re = /\W+/; // Non-word character
  re = /\d/; // match any digit
  re = /\d+/; // Match any digit
  re = /\D/; // Match any non-digit
  re = /\s/; // Match whitespace character
  re = /\S/; // match Non space character
  re = /Hell\b/i; // word boundary

  // Assertions
  re = /x(?=y)/; // Match x only if followed by y 
  re = /(?!y)/; // Match x only if not followed by y 

  // log Results
  const result = re.exec(str);
  console.log(result);
}
