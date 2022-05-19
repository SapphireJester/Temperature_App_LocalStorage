/*
Zane Taylor
CIS 234
Project 3
New Lenox Temperature Applications JavaScript File
(for lookup.html and monthly.html)
 */

//Array of all January 2022 dates and related temperature data (high, low, average). The 1 is unused data. 
//Originally, all dates were in the same array and the 1 was a shorthand to obtaining the month. Now that
//each month is its own array, the 1 has no pupose and I don't feel like deleting all of them. Note that
//the data shown below is just copied from the February dates and doesn't represent actual temperatures
//on those dates in January 2022.
const temperatureArrayJanuary = [
    ['2022-01-01', 47, 33, 39.07, 1],
    ['2022-01-02', 33, 20, 24.22, 1],
    ['2022-01-03', 27, 20, 24.77, 1],
    ['2022-01-04', 25, 12, 19.58, 1],
    ['2022-01-05', 19, 6, 14.04, 1],
    ['2022-01-06', 33, 19, 27.04, 1],
    ['2022-01-07', 31, 18, 23.82, 1],
    ['2022-01-08', 40, 19, 29.96, 1],
    ['2022-01-09', 41, 34, 37.56, 1],
    ['2022-01-10', 36, 28, 21.47, 1],
    ['2022-01-11', 44, 31, 37.26, 1],
    ['2022-01-12', 29, 15, 19.78, 1],
    ['2022-01-13', 19, 14, 16.11, 1],
    ['2022-01-14', 27, 16, 21.52, 1],
    ['2022-01-15', 46, 23, 33.08, 1],
    ['2022-01-16', 54, 43, 49.84, 1],
    ['2022-01-17', 39, 18, 26.52, 1],
    ['2022-01-18', 32, 9, 22.38, 1],
    ['2022-01-19', 25, 12, 17.38, 1],
    ['2022-01-31', 42, 13, 24.67, 1],
    ['2022-01-20', 49, 20, 37.67, 1],
    ['2022-01-21', 54, 34, 43.89, 1],
    ['2022-01-22', 54, 26, 38.10, 1],
    ['2022-01-23', 25, 18, 22.64, 1],
    ['2022-01-24', 29, 24, 27.51, 1],
    ['2022-01-25', 31, 20, 26.97, 1],
    ['2022-01-26', 33, 16, 25.67, 1],
    ['2022-01-27', 45, 29, 35.96, 1],
    ['2022-01-28', 55, 30, 42.00, 1],
    ['2022-01-29', 55, 30, 42.00, 1],
    ['2022-01-30', 55, 30, 42.00, 1],
    ['2022-01-31', 55, 30, 42.00, 1],
];

//Array of all February 2022 dates and related temperature data (high, low, average). The 2 is unused data. 
//Originally, all dates were in the same array and the 2 was a shorthand to obtaining the month. Now that
//each month is its own array, the 2 has no pupose and I don't feel like deleting all of them.
const temperatureArrayFebruary = [
    ['2022-02-01', 47, 33, 39.07, 2],
    ['2022-02-02', 33, 20, 24.22, 2],
    ['2022-02-03', 27, 20, 24.77, 2],
    ['2022-02-04', 25, 12, 19.58, 2],
    ['2022-02-05', 19, 6, 14.04, 2],
    ['2022-02-06', 33, 19, 27.04, 2],
    ['2022-02-07', 31, 18, 23.82, 2],
    ['2022-02-08', 40, 19, 29.96, 2],
    ['2022-02-09', 41, 34, 37.56, 2],
    ['2022-02-10', 36, 28, 21.47, 2],
    ['2022-02-11', 44, 31, 37.26, 2],
    ['2022-02-12', 29, 15, 19.78, 2],
    ['2022-02-13', 19, 14, 16.11, 2],
    ['2022-02-14', 27, 16, 21.52, 2],
    ['2022-02-15', 46, 23, 33.08, 2],
    ['2022-02-16', 54, 43, 49.84, 2],
    ['2022-02-17', 39, 18, 26.52, 2],
    ['2022-02-18', 32, 9, 22.38, 2],
    ['2022-02-19', 25, 12, 17.38, 2],
    ['2022-01-31', 42, 13, 24.67, 2],
    ['2022-02-20', 49, 20, 37.67, 2],
    ['2022-02-21', 54, 34, 43.89, 2],
    ['2022-02-22', 54, 26, 38.10, 2],
    ['2022-02-23', 25, 18, 22.64, 2],
    ['2022-02-24', 29, 24, 27.51, 2],
    ['2022-02-25', 31, 20, 26.97, 2],
    ['2022-02-26', 33, 16, 25.67, 2],
    ['2022-02-27', 45, 29, 35.96, 2],
    ['2022-02-28', 55, 30, 42.00, 2],
];

//Array of all March 2022 dates and related temperature data (high, low, average). The 3 is unused data. 
//Originally, all dates were in the same array and the 3 was a shorthand to obtaining the month. Now that
//each month is its own array, the 3 has no pupose and I don't feel like deleting all of them. Note that
//the data shown below is just copied from the February dates and doesn't represent actual temperatures
//on those dates in March 2022.
const temperatureArrayMarch = [
    ['2022-03-01', 47, 33, 39.07, 3],
    ['2022-03-02', 33, 20, 24.22, 3],
    ['2022-03-03', 27, 20, 24.77, 3],
    ['2022-03-04', 25, 12, 19.58, 3],
    ['2022-03-05', 19, 6, 14.04, 3],
    ['2022-03-06', 33, 19, 27.04, 3],
    ['2022-03-07', 31, 18, 23.82, 3],
    ['2022-03-08', 40, 19, 29.96, 3],
    ['2022-03-09', 41, 34, 37.56, 3],
    ['2022-03-10', 36, 28, 21.47, 3],
    ['2022-03-11', 44, 31, 37.26, 3],
    ['2022-03-12', 29, 15, 19.78, 3],
    ['2022-03-13', 19, 14, 16.11, 3],
    ['2022-03-14', 27, 16, 21.52, 3],
    ['2022-03-15', 46, 23, 33.08, 3],
    ['2022-03-16', 54, 43, 49.84, 3],
    ['2022-03-17', 39, 18, 26.52, 3],
    ['2022-03-18', 32, 9, 22.38, 3],
    ['2022-03-19', 25, 12, 17.38, 3],
    ['2022-03-31', 42, 13, 24.67, 3],
    ['2022-03-20', 49, 20, 37.67, 3],
    ['2022-03-21', 54, 34, 43.89, 3],
    ['2022-03-22', 54, 26, 38.10, 3],
    ['2022-03-23', 25, 18, 22.64, 3],
    ['2022-03-24', 29, 24, 27.51, 3],
    ['2022-03-25', 31, 20, 26.97, 3],
    ['2022-03-26', 33, 16, 25.67, 3],
    ['2022-03-27', 45, 29, 35.96, 3],
    ['2022-03-28', 55, 30, 42.00, 3],
    ['2022-03-29', 55, 30, 42.00, 3],
    ['2022-03-30', 55, 30, 42.00, 3],
    ['2022-03-31', 55, 30, 42.00, 3],
];

//Array of all April 2022 dates and related temperature data (high, low, average). The 4 is unused data. 
//Originally, all dates were in the same array and the 4 was a shorthand to obtaining the month. Now that
//each month is its own array, the 4 has no pupose and I don't feel like deleting all of them. Note that
//the data shown below is just copied from the February dates and doesn't represent actual temperatures
//on those dates in April 2022.
const temperatureArrayApril = [
    ['2022-04-01', 47, 33, 39.07, 4],
    ['2022-04-02', 33, 20, 24.22, 4],
    ['2022-04-03', 27, 20, 24.77, 4],
    ['2022-04-04', 25, 12, 19.58, 4],
    ['2022-04-05', 19, 6, 14.04, 4],
    ['2022-04-06', 33, 19, 27.04, 4],
    ['2022-04-07', 31, 18, 23.82, 4],
    ['2022-04-08', 40, 19, 29.96, 4],
    ['2022-04-09', 41, 34, 37.56, 4],
    ['2022-04-10', 36, 28, 21.47, 4],
    ['2022-04-11', 44, 31, 37.26, 4],
    ['2022-04-12', 29, 15, 19.78, 4],
    ['2022-04-13', 19, 14, 16.11, 4],
    ['2022-04-14', 27, 16, 21.52, 4],
    ['2022-04-15', 46, 23, 33.08, 4],
    ['2022-04-16', 54, 43, 49.84, 4],
    ['2022-04-17', 39, 18, 26.52, 4],
    ['2022-04-18', 32, 9, 22.38, 4],
    ['2022-04-19', 25, 12, 17.38, 4],
    ['2022-04-31', 42, 13, 24.67, 4],
    ['2022-04-20', 49, 20, 37.67, 4],
    ['2022-04-21', 54, 34, 43.89, 4],
    ['2022-04-22', 54, 26, 38.10, 4],
    ['2022-04-23', 25, 18, 22.64, 4],
    ['2022-04-24', 29, 24, 27.51, 4],
    ['2022-04-25', 31, 20, 26.97, 4],
    ['2022-04-26', 33, 16, 25.67, 4],
    ['2022-04-27', 45, 29, 35.96, 4],
    ['2022-04-28', 55, 30, 42.00, 4],
    ['2022-04-29', 55, 30, 42.00, 4],
    ['2022-04-30', 55, 30, 42.00, 4],
];

//Function for lookup.html. This function uses the date selected by the user to check if temperature data 
//for that data exists in one of the arrays. After the correct array is searched, the results are displayed 
//to the hteml page that called the function, with all results placed in their proper location.
function lookup()
{
    //Find the first date picker object on the page and store an instance of that object as a variable.
    var receivedDateObject = document.querySelector('input[type="date"]');

    //Obtain the date the user selected from the date object and store it as a variable.
    var receivedDate = receivedDateObject.value;

    //Slice the middle of the date to obtain the month and store it in a variable.
    var receivedMonth = receivedDate.slice(5, 7);

    //Set a variable used for storing the array position of a matching date as a non-positive number. 
    var matchID = -1;

    //Set a booleon used for checking if the month of the date selected by the user is a month that has an 
    //array as true.
    var validMonth = true;

    //Use a switch statement to determine which array to use when checking the date. This is done by checking 
    //the month.
    switch (receivedMonth) {
        case "01":
            //Month is January, use the January array.
            var temperatureArray = temperatureArrayJanuary;
            break;
        case "02":
            //Month is February, use the February array.
            var temperatureArray = temperatureArrayFebruary;
            break;
        case "03":
            //Month is March, use the March array.
            var temperatureArray = temperatureArrayMarch;
            break;
        case "04":
            //Month is April, use the April array.
            var temperatureArray = temperatureArrayApril;
            break;
        default:
            //Month is outside the valid range and not one we have an array for. Set the temperatureArray variable 
            //to use the January array, even though it's unnecessary to do so, and the validMonth variable to false.
            var temperatureArray = temperatureArrayJanuary;
            validMonth = false;
            break;
    }

    //Check if valid month is true.
    if (validMonth == true)
    {
        //validMonth is true, so the date chosen contains a month with an array. Search through that array.
        for (var i = 0; i < temperatureArray.length; i++)
        {
            //Check if the date at the current position in the array matches the date selected by the user.
            if (temperatureArray[i][0] == receivedDate)
            {
                //The dates match, so store the current position of the array in matchID.
                matchID = i;
            }
        }
    }

    //Check if matchID is -1. This happens if the user's date is once containing a month without an array 
    //(aka not January, February, March or April) or if it a year other than 2022.
    if (matchID == -1)
    {
        //matchID is -1

        //Make the displayNoMatch div visible and change it's text to be a message stating there is no data 
        //for that date.
        document.getElementById("displayNoMatch").style.display = "block";
        document.getElementById("displayNoMatch").innerHTML =
            "There are no records for the date you entered. Please enter a valid date and try again.";

        //Make the table not visible (in case it is visible by having previously looked up a valid date) and
        //set the text for all the table data cells to be empty.
        document.getElementById("displayTable").style.display = "none";
        document.getElementById("displayDate").innerHTML = "";
        document.getElementById("displayHigh").innerHTML = "";
        document.getElementById("displayLow").innerHTML = "";
        document.getElementById("displayAverage").innerHTML = "";

        //Change the top padding of the footer so that the footer stays in the same position relative to the 
        //screen after the altered display values of the above page elements potentially change the page height.
        document.getElementById("footerLookup").style.paddingTop = "259.5px";
    }
    else
    {
        //matchID is not -1, meaning the user's date matches with one in an array.

        //Make the displayNoMatch not visible (in case it is visible by having previously looked up an invalid date)
        //and set its text to be empty.
        document.getElementById("displayNoMatch").style.display = "none";
        document.getElementById("displayNoMatch").innerHTML = "";

        //Make the table visible and fill the table data cells with the date and the date's temperature data.
        //When displaying the date, call the dateStringReformat function to change the date's format from
        //YYYY-MM-DD to MM-DD-YYYY. The matchID value is used in the array to obtain the correct date and 
        //temperature data. The dateStringReformat function is located in shared_functions.js.
        document.getElementById("displayTable").style.display = "block";
        document.getElementById("displayDate").innerHTML = dateStringReformat(temperatureArray[matchID][0]);
        document.getElementById("displayHigh").innerHTML = temperatureArray[matchID][1] + "\u2109";
        document.getElementById("displayLow").innerHTML = temperatureArray[matchID][2] + "\u2109";
        document.getElementById("displayAverage").innerHTML = temperatureArray[matchID][3] + "\u2109";

        //Change the top padding of the footer so that the footer stays in the same position relative to the 
        //screen after the altered display values of the above page elements potentially change the page height.
        document.getElementById("footerLookup").style.paddingTop = "227.5px";
    }

    //The application has finished looking up the date and displaying the results. Thus, the function ends.
}

//A function for lookup.html, called by clicking on the reset button. It hides the div containing the no match message 
//and the table containing the temperature data. It also clears the text from the mentioned div and the table's table 
//data cells, along with setting the footer to use its default top padding.
function clearResultArea()
{
    //Make the displayNoMatch not visible and set its text to be empty.
    document.getElementById("displayNoMatch").style.display = "none";
    document.getElementById("displayNoMatch").innerHTML = "";

    //Make the table not visible and set the text for all the table data cells to be empty.
    document.getElementById("displayTable").style.display = "none";
    document.getElementById("displayDate").innerHTML = "";
    document.getElementById("displayHigh").innerHTML = "";
    document.getElementById("displayLow").innerHTML = "";
    document.getElementById("displayAverage").innerHTML = "";

    //Change the top padding of the footer to its default value so that the footer stays in the same position relative to
    //the screen after the altered display values of the above page elements change the page height back to its default.
    document.getElementById("footerLookup").style.paddingTop = "307.5px";

    //The no match message div and the table are not visible and have their text empty. The fuction now ends.
}

//A function for monthly.html, called by clicking on the Submit Month button. It displays every date in the month
//selected by the user, along with all the temperature data for each month.
function monthDisplay() {
    //Find the first selector object on the page and store an instance of that object as a variable.
    var monthSelectionObject = document.querySelector('select');

    //Obtain the month the user selected from the selector object and store it as a variable.
    var monthSelected = monthSelectionObject.value;

    //Use a switch statement to check the value of monthSelected. This will determine which month array to use when 
    //displaying all the dates.
    switch (monthSelected)
    {
        case "1":
            //Month is January, use the January array.
            var temperatureArray = temperatureArrayJanuary;
            break;
        case "2":
            //Month is February, use the February array.
            var temperatureArray = temperatureArrayFebruary;
            //Call the monthTableCleaner function to pre-emptifly empty the table cells for rows 29,30, and 31, in
            //case the dates for January or April are currently being displayed.
            monthTableCleaner(29);
            break;
        case "3":
            //Month is March, use the March array.
            var temperatureArray = temperatureArrayMarch;
            break;
        case "4":
            //Month is April, use the April array.
            var temperatureArray = temperatureArrayApril;
            //Call the monthTableCleaner function to pre-emptifly empty the table cells for row 31, in case the
            //dates for January are currently being displayed.
            monthTableCleaner(31);
            break;
        default:
            //Unlike the lookup() function, a month without an array cannot be chosen, so the default is never
            //reached. In case it somehow is, use January's array, as that one will use all the table cells.
            var temperatureArray = temperatureArrayJanuary;
            break;
    }

    //Make the table visible. The table is invisible when the page is first loaded and the user hasn't pressed the 
    //submit month button yet for the current page viewing session.
    document.getElementById("displayTable").style.display = "block";

    //Loop though the entire array.
    for (var i = 0; i < temperatureArray.length; i++)
    {
        //All table data cells in the table have an ID consisting of a number followed by a letter. The number corresponds
        //to both the table row and an array position in the temperature arrays, while the letter corresponds to the table 
        //column. For each iteration through the array, the values for array position i (date, high temperature, low 
        //temperature, and average temperature) will be displayed in table, each value in a seperate cell.

        //Set the idString to a value representing row i, column A. Column A is the first column from the left. 
        var idString = i + "A";

        //Set the text for the table cell in row i, column A to be the date for array position i, with the date's format
        //changed from YYYY-MM-DD to MM-DD-YYYY. This is done by calling the dateStringReformat function with the date as the
        //parameter and displaying the returned result. The dateStringReformat function is located in shared_functions.js.
        document.getElementById(idString).innerHTML = dateStringReformat(temperatureArray[i][0]);

        //Set the idString to a value representing row i, column B. Column B is the second column from the left. 
        var idString = i + "B";

        //Set the text for the table cell in row i, column B to be the high temperature for array position i. 
        //The unicode symbol \u2109 represents degrees farenheit.
        document.getElementById(idString).innerHTML = temperatureArray[i][1] + "\u2109";

        //Set the idString to a value representing row i, column C. Column C is the third column from the left. 
        var idString = i + "C";

        //Set the text for the table cell in row i, column C to be the low temperature for array position i.
        //The unicode symbol \u2109 represents degrees farenheit.
        document.getElementById(idString).innerHTML = temperatureArray[i][2] + "\u2109";

        //Set the idString to a value representing row i, column D. Column D is the fourth column from the left. 
        var idString = i + "D";

        //Set the text for the table cell in row i, column D to be the average temperature for array position i.
        //The unicode symbol \u2109 represents degrees farenheit.
        document.getElementById(idString).innerHTML = temperatureArray[i][3] + "\u2109";
    }

    //Change the top and bottom padding of the footer so that the footer stays in the same position relative to 
    //the bottom of the screen after the altered display value of the table changes the page height.
    document.getElementById("footerMonthly").style.paddingTop = "30px";
    document.getElementById("footerMonthly").style.paddingBottom = "25px";

    //Every date in the selected month, along with those dates' temperature data, are displayed to the table. 
    //The fuction now ends.
}

//A function called by the monthDisplay function, meaning its used by monthly.html. The function sets all table 
//cells in certain table rows to be blank. The number passed to the function is used as the first row in the table
//to be blanked out, and all rows after it will be blanked out as well, including the last row.
function monthTableCleaner(startingPoint)
{
    //Loop through the table, starting at the row represented by the value passed to the function.
    for (var i = startingPoint; i <= 31; i++) {
        //Set the idString to a value representing row i, column A. Column A is the first column from the left. 
        var idString = i + "A";

        //Set the text for the table cell in row i, column A to be blank.
        document.getElementById(idString).innerHTML = "";

        //Set the idString to a value representing row i, column B. Column B is the second column from the left. 
        var idString = i + "B";

        //Set the text for the table cell in row i, column B to be blank.
        document.getElementById(idString).innerHTML = "";

        //Set the idString to a value representing row i, column C. Column C is the third column from the left. 
        var idString = i + "C";

        //Set the text for the table cell in row i, column C to be blank.
        document.getElementById(idString).innerHTML = "";

        //Set the idString to a value representing row i, column D. Column D is the fourth column from the left.
        var idString = i + "D";

        //Set the text for the table cell in row i, column D to be blank.
        document.getElementById(idString).innerHTML = "";
    }

    //All table cells in rows starting at the row of the passed value and ending at the end of the table are blank.
    //The function now ends.
}