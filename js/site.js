// Get the values from the user
function getValues(){

    // Get the values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // Parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    // Check that numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
         // We call FizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
         // Call displayData and write the values to the screen
         displayData(fbArray);
    }else{
        alert("You must enter an integer");
    }
    // We call FizzBuzz
    let fbArray = fizzBuzz(fizzValue,buzzValue);
    // Call displayData and write the values to the screen
}

function fizzBuzz(fizzValue, buzzValue)
{

    let returnArray = [];

    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
       // Check to see if divisible by both 3 and 5
       // Check to see if divisible by fizz value 3
       // Check to see if divisible by buzz value 5

        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push("FizzBuzz");
        } else if (i % fizzValue == 0){
            returnArray.push("Fizz");
         }else if(i % buzzValue == 0){
            returnArray.push("Buzz");
        } else{
            returnArray.push(i);
        }
        
        
    }

    returnArray;
}

// Loop over the array and create a tablerow for each item
function displayData(fbArray){

    // Get the table body element from the page
    let tableBody = document.getElementById("results");

    // Get the template row
    let templateRow = document.getElementById("fbTemplate");

    // Clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true)
        // Grab use the tds  put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbData[i];
        rowCols[1].textContent = fbData[i+1];
        rowCols[2].textContent = fbData[i+2];
        rowCols[3].textContent = fbData[i+3];
        rowCols[4].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);
    }
    // Add all the rows to the table 
}