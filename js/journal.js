function Journal(title, entry){
  this.title = title;
  this.entry = entry;
}

Journal.prototype.countWords = function(entry) {
  arrayOfWords = entry.split(" ");
  numOfWords = arrayOfWords.length;
  return numOfWords;
}

Journal.prototype.countVowels = function(entry) {
  debugger;
  numOfVowels = 0;
  arrayOfVowels = ["a", "e", "i", "o", "u"];
  concatString = entry.split(" ").join("");
  arrayOfChars = concatString.split("");
  for(i=0 ; i < arrayOfChars.length ; i++){
    if(arrayOfVowels.includes("a") == true){
      currentLetter = i;
      console.log(currentLetter);
      numOfVowels += 1;
    }
  }
  return numOfVowels;
}

Journal.prototype.countConsonants = function(entry) {
  numOfConsonants = 0;
  numOfVowels = 0;
  arrayOfVowels = ["a", "e", "i", "o", "u"];
  concatString = entry.split(" ").join("");
  arrayOfChars = concatString.split("");
  for(i=0 ; i < arrayOfChars.length ; i++){
    if(arrayOfVowels.includes(i) == true){
      numOfVowels += 1;
    } else {
      numOfConsonants += 1;
        debugger;
    }
  }
  return numOfConsonants;
}

Journal.prototype.teaser = function(entry) {
  arrayOfWords = entry.split(" ");
  teaserString = "";
  numOfWords = arrayOfWords.length;
  if (arrayOfWords > 8){
    for(i=0; i=7; i++){
      teaserString = teaserString+ i ;
        debugger;
    }
  }
}

    // return arrayOfWords[1]+arrayOfWords[2]+arrayOfWords[3]+ arrayOfWords[4]+ arrayOfWords[5]+ arrayOfWords[6]+ arrayOfWords[7]+ arrayOfWords[8];
