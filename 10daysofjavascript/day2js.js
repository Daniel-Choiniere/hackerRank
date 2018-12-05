
function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here
    if ((score > 25) && (score <= 30)) {
        grade = 'A';
    } else if ((score > 20) && (score <= 25)) {
        grade = 'B';
    } else if ((score > 15) && (score <= 20)) {
        grade = 'C';
    } else if ((score > 10) && (score <= 15)) {
        grade = 'D';
    } else if ((score > 5) && (score <= 10)) {
        grade = 'E';
    } else if ((score > 0) && (score <= 5)) {
        grade = 'F';
    }
    return grade;
}

// SECOND ALGORITHM SOLUTION DAY 2, 10 DAYS OF JAVASCRIPT


function getLetter(s) {
    let letter = "";
    // Write your code here
    s = s[0];
    if ("a e i o u".includes(s)) {
        letter = 'A';
    } else if ("b, c, d, f, g".includes(s)) {
        letter = 'B';
    } else if ("h, j, k, l, m".includes(s)) {
        letter = 'C';
    } else if ("n, p, q , r, s, t, v, w, x, y, z") {
        letter = 'D';
    }
    return letter;
}

// THIRD ALGORITHM SOLUTION DAY 2, 10 DAYS OF JAVASCRIPT

