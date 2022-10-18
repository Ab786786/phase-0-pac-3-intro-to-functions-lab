function shout(string){
    return string.toUpperCase();

}

shout("hello")

// this function will return a string in lowercase, unlike the above function that returns a string in uppercase.

  function whisper(string){
    return string.toLowerCase();
  }

whisper("HELLO")

//

  function logShout(aString){
    console.log(aString.toUpperCase());
  }

  logShout("hello")

//

  function logWhisper(someWords){
    console.log(someWords.toLowerCase());
  }

  logWhisper("HELLO")

  //

  function sayHiToHeadphonedRoommate(simpleString) {
    const cantHear = "I can't hear you!"
    const upperCase = "YES INDEED!"
    const iWouldLoveTo = "I would love to!"
  
  
  
    if (simpleString.toLowerCase(simpleString) === simpleString) {
      return cantHear;
    } else if (simpleString.toUpperCase(simpleString) === simpleString) {
      return upperCase;
    } else if (simpleString === "Let's have dinner together!") {
      return iWouldLoveTo;
    }
  }
  
 