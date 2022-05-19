// JavaScript File for Local Notepad Application
// Clinton Garwood
// January 2022
// Modified by Zane Taylor
// js/storage.js

// Check page that the app is running on.
// Web Form has variables for Title and Content

// API of functions in this document:
// edit_note() - helper function using SessionStorage - carries localStorage Key to edit_note.html
// load_note() - called by edit_note.html page to populate variables into web form
// read_keys() - reads all localStorage keys, and displays each note found in a table
// remove_note(key_string) - removes a note from localStorage
// set_key() - Save function which creates a new note in localStorage and redirects to index.html

// Local and Session Storage functions used in this application
// namespace for Local Storage: window.localStorage or localStorage
// Save local: localStorage.setItem(key, value);
// Read local: localStorage.getItem(key);
// Remove local item: localStorage.removeItem(key);
// Clear local (all): localStorage.clear();
// Save Session item: sessionStorage.setItem(key,value)
// Read Session item: sessionStorage.getItem()
// Remove Session item: sessionStorage.removeItem(key);
// Clear Session (all) sessionStorage.clear();

// Editor Notes:
// index.html - main page which lists all saved notes (edit and remove buttons)
// new_note.html - Web form to create a new note
// edit_note.html - Not reachable by the navigation menu (update existing notes only)
// about.html - Description and Details Page for the application

// On load of edit page; save the existing note's title as variable
// old_title = key
// The old_title is populated into the Title text field and
// the value of the key is populated into the Content text field.
// On submit button click, check old_title against new_title (text field)
// if the title does not change just update Content from text box.
// if old_title == new_title {value = 'content_from_form' }
// else if old_title != new_title
//  remove old key -- this will also remove the old value
//  save new_title=key, value = 'content_from_form'
// redirect the user to index.html

// New Note Page
// This page is empty by default. If the user accidentialy presses Submit
// with the text fields empty, the form should reject the submission.
// As long as some text is included in 'title' field, the new note should save
//  save new_title=key, value = 'content_from_form'

// Titles Page
// This page shows a list of titles which can be deleted or 'clicked' to
// edit. Two buttons can be offered to the user a Delete and Edit. If the
// delete button is selected a  call to Remove: localStorage.removeItem(key);
// will remove the item and the value. Otherwise clicking the edit button
// can redirect the user to the 'edit note' page.

// Test the concept
function set_key() {
    // pull key name and content from the web form
    ls_key = document.getElementById("yourDateID").value;
    ls_value_tem = document.getElementById("yourTemperatureID").value;
    ls_value_loc = document.getElementById("yourLocationID").value;
    ls_value_wea = document.getElementById("yourWeatherID").value;

    let dataObject =
        {
            "temperature": ls_value_tem, "location": ls_value_loc, "weather": ls_value_wea
        }

    // set the values to local storage
    localStorage.setItem(ls_key, JSON.stringify(dataObject));

    window.location.href = "./your_data.html";
}

function clear_all(){
    // this function removes all items from local storage (keys and values)
    localStorage.clear();
    window.location.href = "./your_data.html";
}

function show_key(this_key){
    alert(this_key);
}

function edit_note(key_string){
    this_key = key_string.toString().trim();
    date_text = this_key;
    document.getElementById("yourDateID").value = date_text;

    var receivedJSONString = localStorage.getItem(date_text);

    var retrievedDataObject = JSON.parse(receivedJSONString);

    var retrievedTemperature = retrievedDataObject.temperature;
    var retrievedLocation = retrievedDataObject.location;
    var retrievedWeather = JSON.parse(receivedJSONString).weather;

    document.getElementById("yourTemperatureID").value = retrievedTemperature;
    document.getElementById("yourLocationID").value = retrievedLocation;
    document.getElementById("yourWeatherID").value = retrievedWeather;
}

function remove_note(key_string){
    // the key that is sent in through the function has a leading and trailing 'space' with it
    // to account for this the variable is called .toString() and then trim() eliminates white space
    this_key = key_string.toString().trim();
    localStorage.removeItem(this_key);
    window.location.href = "./your_data.html";
}

function read_keys() {
    // get key names from local storage, determine how many and display to page
    set_footer();
    var key_len = localStorage.length;
    if (key_len != 0) {
        if (key_len == 1) {
            var key_len_string = "You have " + key_len + " note saved.";
            document.getElementById("key_length").innerHTML = key_len_string;
            document.getElementById("yourFooter").style.paddingTop = "87.5px";
        }
        else {
            var key_len_string = "You have " + key_len + " notes saved.";
            document.getElementById("key_length").innerHTML = key_len_string;
            if (key_len == 2) {
                document.getElementById("yourFooter").style.paddingTop = "47px";
            }
            else {
                document.getElementById("yourFooter").style.paddingTop = "7px";
            }
        }
        document.getElementById("yourDisplayTable").style.display = "block";
        // iterate through each value and display to screen
        for (var i = 0, len = key_len; i < len; ++i) {
            // get values of each item in localStorage
            var k_string = window.localStorage.key(i);
            var v_string = window.localStorage.getItem(k_string);
            var v_value1 = JSON.parse(v_string).temperature;
            var v_value2 = JSON.parse(v_string).location;
            var v_value3 = JSON.parse(v_string).weather;

            // create a new table row (element)
            new_row = document.createElement("tr");

            // create a column for the title (elements)
            title_column = document.createElement("td");
            // Set styling for the column
            title_column.className = "leftSideTable";
            // Create text for the title column
            column_title_text = document.createTextNode(dateStringReformat(k_string));
            // append the text to the title column(s)
            title_column.appendChild(column_title_text);
            // Append the Row to the table
            new_row.appendChild(title_column);

            // create a column for the value (elements)
            value_column = document.createElement("td");
            // Set styling for the column
            value_column.className = "rightSideTable";
            // Create text for the value column
            column_value_text = document.createTextNode(v_value1 + "\u2109");
            // append the text to the value column(s)
            value_column.appendChild(column_value_text);
            // Append the Row to the table
            new_row.appendChild(value_column);

            // create a column for the value (elements)
            value_column2 = document.createElement("td");
            // Set styling for the column
            value_column2.className = "rightSideTable";
            // Create text for the value column
            column_value_text2 = document.createTextNode(v_value2);
            // append the text to the value column(s)
            value_column2.appendChild(column_value_text2);
            // Append the Row to the table
            new_row.appendChild(value_column2);

            // create a column for the value (elements)
            value_column3 = document.createElement("td");
            // Set styling for the column
            value_column3.className = "rightSideTable";
            // Create text for the value column
            column_value_text3 = document.createTextNode(v_value3);
            // append the text to the value column(s)
            value_column3.appendChild(column_value_text3);
            // Append the Row to the table
            new_row.appendChild(value_column3);

            // create a column for the edit (button)
            edit_column = document.createElement("td");
            // Create button for the edit/show column
            edit_button = document.createElement("button");
            edit_text = document.createTextNode("View/Edit");
            // Set styling for the button
            edit_button.className = "btn btn-warning";
            // Set the function handler for the button
            edit_button.setAttribute('onclick', 'edit_note( " ' + k_string + ' " )');
            // append the button to the edit column(s)
            edit_button.appendChild(edit_text);
            edit_column.appendChild(edit_button);
            // Append the Row to the table
            new_row.appendChild(edit_column);

            // create a column for the remove (button)
            remove_column = document.createElement("td");
            // Create button for the delete column
            remove_button = document.createElement("button");
            remove_text = document.createTextNode("Delete/Remove");
            // Set styling for the button
            remove_button.className = "btn btn-outline-danger";
            // Set the function handler for the button
            var remove_string = toString(k_string);
            // try lambda function
            //(k_string) => {localStorage.removeItem(k_string)}
            remove_button.setAttribute('onclick', 'remove_note( " ' + k_string + ' " )');
            // append the button to the remove column(s)
            remove_button.appendChild(remove_text);
            remove_column.appendChild(remove_button);
            // Append the Row to the table
            new_row.appendChild(remove_column);

            //append the rows to the table
            document.querySelector("#yourDisplayTable").appendChild(new_row);
        }
    }
    else {
        var key_len_string = "You have 0 notes saved.";
        document.getElementById("key_length").innerHTML = key_len_string;
        document.getElementById("yourDisplayTable").style.display = "none";
    }
    if (key_len >= 4) {
        document.getElementById("yourFooter").style.paddingBottom = "25px";
    }
}

function dateStringReformat(receivedDateString) {
    dateYear = receivedDateString.slice(0, 4);
    dateMonthDay = receivedDateString.slice(5, 10);
    newDateString = dateMonthDay + "-" + dateYear;
    return (newDateString);
}
