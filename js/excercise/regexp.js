var str1 = 'ab*cdefghij';

//Matches the preceding expression 0 or more times. Equivalent to {0,}.
console.log(str1.replace(/b\*/, "0"));  //a0cdefghij
console.log(str1.replace(/b*/, "0"));  //0ab*cdefghij

//+ Matches the preceding expression 1 or more times. Equivalent to {1,}
console.log(str1.replace(/b+/, "0"));  //a0*cdefghij

var str2 = "foo bar foo barr Tim";
console.log(str2.replace(/(foo) (bar) \1 \2/, "0")); // 0r Tim

//^ Matches beginning of input.
var str3 = "Anett A";
console.log(str3.replace(/^A/, "0")); //0nett A

//$ Matches end of input.
var str4 = "eat tt";
console.log(str4.replace(/t$/gi, "0")); //eat t0

var str5 = "123abc";
console.log(str5.replace(/\d+/, "0")); //0abc  - matches digits [0-9]
console.log(str5.replace(/\d+?/, "0")); //023abc
console.log(str5.replace(/\D/, "0")); // 1230bc- matches non digits [^0-9]
console.log(str5.replace(/\D/gi, "0")); // 123000
console.log(str5.replace(/\D+/, "0")); //12340

//. matches any single character except the newline character
var str6 = "nay, an apple is on the tree";
console.log(str6.replace(/.n/gi, "0")); //nay, 0 apple is 0 the tree

//x(?=y) Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead
var str7 = "Jack Frost";
console.log(str7.replace(/Jack(?= Sprat| Frost)/, "0")); //0 Frost

//x(?!y) Matches 'x' only if 'x' is not followed by 'y'
var str8 = "2.99";
console.log(str8.replace(/\d+(?!\.)/, "0")); //2.0  matches a number only if it is not followed by a decimal 
var str9 = "129.99";
console.log(str9.replace(/\d+(?!\.)/, "0")); //09.99

// \b word boundary - é, ü  accented characters also treated as word breaks
var str10 = "moon";
console.log(str10.replace(/\bm/, "0")); //0oon
console.log(str10.replace(/\boo/, "0")); //moon
console.log(str10.replace(/oon\b/, "0")); //m0

// \B Matches a non-word boundary
console.log(str10.replace(/\B../ , "0")); //m0n

/* \s Matches a single white space character, including space, tab, form feed, line feed
\S Matches a single character other than white space. E
*/
var str11 = "foo bar";
console.log(str11.replace(/\s\w*/, "0")); //foo0
console.log(str11.replace(/\S\w*/, "0")); //0 bar

var str12 = "3.14";
console.log(str12.replace(/\w/gi, "a")); // a.aa

var str13 = "foo bar";
console.log(str13.replace(/(?:foo):{1,2}/, "0")); //0 bar
console.log(str13.replace(/foo:{1,2}/, "0")); //0 bar
console.log(str13.replace(/(?:bar):{1,2}/, "0")); //foo 0

var str14 = "1st, 2nd, 3rd, 4th,";
console.log(str14.replace(/([0-9]+)(?:st|nd|rd|th)?/g, "0")); //0, 0, 0, 0,
console.log(str14.replace(/([0-9]+)/g, "0")); //0st, 0nd, 0rd, 0th,

// \B Matches a non-word boundary

/*
? Matches the preceding expression 0 or 1 time. Equivalent to {0,1}
/x|y/  or
/(?:x){1,2}/ - non-capturing parentheses - Matches 'x' but does not remember the match.
{n} - Matches exactly n occurrences of the preceding expression. N must be a positive integer
For example, /a{2}/ doesn't match the 'a' in "candy," but it does match 
all of the a's in "caandy," and the first two a's in "caaandy."


{n,} - Matches at least n occurrences of the preceding expression. N must be a positive integer
{n,m} - Where n and m are positive integers and n <= m. Matches at least n and at most m occurrences 
of the preceding expression. When m is omitted, it's treated as ∞
[xyz] - This pattern type matches any one of the characters in the brackets
[^xyz] - That is, it matches anything that is not enclosed in the brackets
[\b] - backspace
\w  = [A-Za-z0-9_] - Matches any alphanumeric character including the underscore
\W = [^A-Za-z0-9_] - Matches any non-word character % &
*/

//The exec() method executes a search for a match in a specified string. 
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.log("result: -1 "+result[0]+" -2 "+result[1]+" -3 "+ result[2]+" --4 "+ result[3]);













