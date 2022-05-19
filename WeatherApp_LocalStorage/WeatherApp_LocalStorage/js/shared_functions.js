/*
Zane Taylor
CIS 234
Project 3
Shared Fuctions JavaScript File
(for all html pages)
 */

//Function to set the attribution and year info in the footer. Function based off of Professor Garwood's set_date() function.
//The attribution was originally a copyright string with fake copyright, but was changed prior to being placed on GitHub.
//An actual Creative Commons License was added to all footers on the html pages, requiring this change. The now larger footers
//also meant some code in other files relating to footer padding also had to be adjusted.
function set_footer()
{
    //Create new Date object consisting of the current date.
    var currentDate = new Date();

    //Get the current year from the Date object.
    var currentYear = currentDate.getFullYear();

    //Check if the current year is 2022 (the year this website was hypothetically launched).
    if (currentYear == 2022)
    {
        //Current year is 2022, set the string holding the attribution text with information, 
        //including only the year 2020.
        var attributionText = "Created by Zane Taylor, 2022";
    }
    else
    {
        //Current year is not 2022, set the string holding the attribution text with information,
        //including the year 2020 and the current year.
        var attributionText = "Created by Zane Taylor, 2022 - " + currentYear;
    }
    //Set the footerTextDisplay element's inner HTML to be the the attribution string. This will replace
    //the placeholder attribution text in the footer.
    document.getElementById("footerTextDisplay").innerHTML = attributionText;

    //The footer now has the currect attribution information and year, and the function ends.
}

//Function that takes a string containing a YYYY-MM-DD date and converts it to a string with a MM-DD-YYYY date. This
//new string is then returned to the location where the function was called. The YYYY-MM-DD string is the parameter.
function dateStringReformat(receivedDateString) {
    //Slice the year from the received date and store it in a variable.
    dateYear = receivedDateString.slice(0, 4);

    //Slice the month, the hyphen, and day from the received date and store it in a variable.
    dateMonthDay = receivedDateString.slice(5, 10);

    //Attach a hyphen to the end of the dateMonthDay variable and then attach the dateYear variable after the hyphen.
    //This creates a date string in the MM-DD-YYYY format that matches the received string. Store the newly created 
    //string in a variable.
    newDateString = dateMonthDay + "-" + dateYear;

    //Return the MM-DD-YYYY string. The function now ends.
    return (newDateString);
}