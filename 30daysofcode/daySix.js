function alternativeCase(string) {
    var output = "";
    for (var i = 0; i < string.length; i++) {
        if (i % 2 != 0) {
            output += string[i].toUpperCase();
        }
        else {
            output += string[i].toLowerCase();
        }
    }
    return output;
}


function processData(input) {
    //Enter your code here
    var oddOutput = "";
    var evenOutput = "";
    for (var i = 0; i < input.length; i++) {
        if (i % 2 != 0) {
            oddOutput += input[i];
        } else {
            if (i % 2 == 0) {
                evenOutput += input[i];
            }
        }
      
    }
    console.log(oddOutput);
    console.log(evenOutput);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});