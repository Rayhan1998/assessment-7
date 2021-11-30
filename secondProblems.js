// 1.

function addToZero(arr) {
  let result = undefined;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == 0) {
      result = true;
      break;
    } else {
      result = false;
    }
  }

  return result;
}

addToZero([1, -1, 3]);

// runtime is O(n)

// 2

function hasUniqueCharecters(str) {
  let uniqueWord = "";
  let result = undefined;
  for (var i = 0; i < str.length; i++) {
    if (!uniqueWord.includes(str[i])) {
      uniqueWord += str[i];
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

// runtime is O(n)

// 3

function isPangram(sentence) {
  let lowerCasedSentence = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!lowerCasedSentence.includes(char)) {
      return false;
    }
  }
  return true;
}

// runtime is O(n)

// 4
function longestWord(arr) {
  let longestWord = "";

  for (var i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }

  return longestWord.length;
}

console.log(longestWord(["walk", "running", "run"]));

// runtime is O(n)
