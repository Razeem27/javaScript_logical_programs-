// Pig Latin
// Questions
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
// ---------------------------------------------------------------------------------------------

// test case1
// translatePigLatin("california") should return the string aliforniacay.

// translatePigLatin("paragraphs") should return the string aragraphspay.

// translatePigLatin("glove") should return the string oveglay.

// translatePigLatin("algorithm") should return the string algorithmway.

//------------------------------------------------------------------------------------------
function translatePigLatin(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/g) && i == 0) {
      str += "way";
      break;
    } else {
      if (str[i].match(/[aeiou]/g)) {
        str=str.substr(i)+str.substr(0,i)+"ay"
        break;
      }    
    }
  }

  return str;
}

let result = translatePigLatin("paragraphs");
console.log(result);
