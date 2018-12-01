function Person(intialAge){
    // Add some more code to run some checks on initialAge
    if (intialAge < 0) {
        var age = intialAge;
        console.log("Age is not valid, setting age to 0."); 
        age = 0; 
    };


  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      if (intialAge < 13) {
          console.log("You are young.");
      } else if (intialAge >= 13 && intialAge < 18) {
          console.log("You are a teenager.");
      } else {
          console.log("You are old.");
      }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       intialAge += 1;
   };
}


