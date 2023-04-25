function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    return true;
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I looked up a proper format on how to make a function that would make a palindrome return a true or false value. The first step is making a const called reversedWord
  that takes the word and splits it in half, reverse's it and joins the two words back into one. Then I made an if statement that states that if the word strictly equals 
  the new reversed word it would return true, other wise I made an else statement that would return false. Additionally I could have added an addictional line of code before
  my const that is word = word.toLowerCase().replace(/ /g,'') and that would have removed any spaces and made sure all the letters were lower case before it split, reversed, then rejoined
  the word in order to check for palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
