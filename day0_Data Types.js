/**
*   Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below.

Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.


*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).

**/


function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';


    console.log(firstInteger + Number(secondInteger));

    console.log(firstDecimal + Number(secondDecimal));

    console.log(firstString + secondString);

}

