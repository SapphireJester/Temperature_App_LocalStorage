// JavaScript File for Local Notepad Application
// Clinton Garwood
// January 2022
// Modified by Zane Taylor
// js/storage.js

// Check page that the app is running on.
// Web Form has variables for Date, Temperature, Location, and Weather Pattern.

// API of functions in this document:
// set_key() - Save function which creates a new note in localStorage
// clear_all() - Delete all records from local storage
// edit_note(key_string) - populate variables of a specific key into the web form
// remove_note(key_string) - Deletes a record from localStorage
// read_keys() - reads all localStorage keys, and displays each record found in a table

// Local Storage functions used in this application
// namespace for Local Storage: window.localStorage or localStorage
// Save local: localStorage.setItem(key, value);
// Read local: localStorage.getItem(key);
// Remove local item: localStorage.removeItem(key);
// Clear local (all): localStorage.clear();

// Editor Notes:
// your_data.html - main page which lists all saved records (edit and remove buttons), and 
//                  contains web form to create a new record or edit an old one. All records
//                  can also be deleted here. In short, one page now does everything.

// Webform 1
// When the edit button of a record is clicked; the key (date) of that record
// is populated into the date picker object field and the values of the key
// (Temperature, Location, and Weather Pattern) are populated into the appropriate
// text field. On submit button click, the record is saved. If the date was changed,
// a new record is created without deleting the old one. If the date is the same,
// then the existing record is changed. Whenever a record is saved, the page is 
// refreshed, allowing the table of records to updated with the new record visible.

// Webform 2 
// If the user accidentialy presses Submit with the text fields empty, the form should 
// reject the submission. As long as some text is included in 'date' field, the new note 
// should save new_title=key, value = 'content_from_form'

// Table 1
// yourDisplayTable is the id of the table where all the records are displayed.
// This table is empty by default.

// Table 2
// When records are available, the table shows a list of titles which can be deleted 
// or 'clicked' to edit. Two buttons can be offered to the user a Delete and Edit. If 
// the delete button is selected a  call to Remove: localStorage.removeItem(key); will
// remove the item and the value. Otherwise clicking the edit button can redirect the
// user to the 'edit note' page.

//Function called when clicking the Submit Data button. Pulls the key name and values from the 
//web form and saves them as a local storage item.
function set_key() {
    // pull key name from the web form
    ls_key = document.getElementById("yourDateID").value;
    //Check if key name is not empty 
    if (ls_key != "")
    {
        // Key name is not empty. Pull values from the web form.
        ls_value_tem = document.getElementById("yourTemperatureID").value;
        ls_value_loc = document.getElementById("yourLocationID").value;
        ls_value_wea = document.getElementById("yourWeatherID").value;
        //Create JSON object to hold the values
        let dataObject =
        {
            "temperature": ls_value_tem, "location": ls_value_loc, "weather": ls_value_wea
        }
        // set the key and values to local storage, using JSON.stringify to turn the JSON object of 
        //multiple values into a single string.
        localStorage.setItem(ls_key, JSON.stringify(dataObject));
        //Refresh the page.
        window.location.href = "./your_data.html";
    }
}

//Function called when clicking the Erase All Records button. Deletes all local storage items.
function clear_all(){
    // this function removes all items from local storage (keys and values)
    localStorage.clear();
    //Refresh the page.
    window.location.href = "./your_data.html";
}

//Function called when clicking a record's View/Edit button. Populates the webform with that 
//record's key (the date) and values(the temperature, location, and weather pattern). The passed
//value is the record's key.
function edit_note(key_string) {
    // the key that is sent in through the function has a leading and trailing 'space' with it
    // to account for this the variable is called .toString() and then trim() eliminates white space
    this_key = key_string.toString().trim();
    //I don't think this extra variable is necessary, but it'd be more typing to change it.
    var localStoreKey = this_key;
    //Change the date picker object to be the record's date (aka the key)
    document.getElementById("yourDateID").value = localStoreKey;
    //Retrieve the key's value (aka the JSON string containing three values)
    var receivedJSONString = localStorage.getItem(localStoreKey);
    //Change the text input fields to be the appropriate values, obtained by accessing the corresponding
    //property of the parsed JSON string.
    document.getElementById("yourTemperatureID").value = JSON.parse(receivedJSONString).temperature;
    document.getElementById("yourLocationID").value = JSON.parse(receivedJSONString).location;
    document.getElementById("yourWeatherID").value = JSON.parse(receivedJSONString).weather;
}

//Function called when clicking a record's Delete/Remove button. Deletes the record from local storage.
//The passed value is the record's key.
function remove_note(key_string){
    // the key that is sent in through the function has a leading and trailing 'space' with it
    // to account for this the variable is called .toString() and then trim() eliminates white space
    this_key = key_string.toString().trim();
    //Delete the record.
    localStorage.removeItem(this_key);
    //Refresh the page.
    window.location.href = "./your_data.html";
}

//Function called with onload when your_data.html is loaded. The function reads all localStorage keys and  
//displays each record found in a table, by attaching new table rows to the existing table.
function read_keys() {
    // Call function to set the copyright text in the footer. onload can only take one function, so that's
    // why I have to cheat by calling the set_footer function inside of the function called by onload. The
    // set_footer function is located in shared_functions.js.
    set_footer();
    // get number of records in local storage
    var key_len = localStorage.length;
    // check if there are any records to display
    if (key_len != 0) {
        // 1 Record
        if (key_len == 1) {
            // set the text for key_length div stating there is 1 record
            var key_len_string = "You have " + key_len + " record saved.";
            document.getElementById("key_length").innerHTML = key_len_string;
            // adjust the top padding of the footer to account for the changed page height
            document.getElementById("yourFooter").style.paddingTop = "48px";
        }
        // more than 1 Record
        else {
            // set the text for key_length div stating the number of records there are
            var key_len_string = "You have " + key_len + " records saved.";
            document.getElementById("key_length").innerHTML = key_len_string;
            // adjust the top padding of the footer to account for the changed page height
            document.getElementById("yourFooter").style.paddingTop = "7.5px";
        }
        // make the table visible
        document.getElementById("yourDisplayTable").style.display = "block";
        // iterate through each value and display to screen
        for (var i = 0, len = key_len; i < len; ++i) {
            // get values of each item in localStorage
            var k_string = window.localStorage.key(i);
            var v_string = window.localStorage.getItem(k_string);
            // get the three individual values from the record's value by accessing the properties from 
            // the parsed record value, which is a JSON string.
            var v_string_tem = JSON.parse(v_string).temperature;
            var v_string_loc = JSON.parse(v_string).location;
            var v_string_wea = JSON.parse(v_string).weather;

            // create a new table row (element)
            new_row = document.createElement("tr");

            // create a column for the date (elements)
            date_column = document.createElement("td");
            // Set styling for the column
            date_column.className = "leftSideTable";
            // Create text for the date column. The dateStringReformat function is used to display the
            // date in a MM-DD-YYYY format instead of a YYYY-MM-DD format. Calling this function does
            // not change the original value of k_string. The dateStringReformat function is located 
            // in shared_functions.js.
            column_date_text = document.createTextNode(dateStringReformat(k_string));
            // append the text to the date column(s)
            date_column.appendChild(column_date_text);
            // Append the Row to the table
            new_row.appendChild(date_column);

            // create a column for the temperature (elements)
            value_column_tem = document.createElement("td");
            // Set styling for the column
            value_column_tem.className = "rightSideTable";
            // Create text for the temperature column
            column_value_text_tem = document.createTextNode(v_string_tem + "\u2109");
            // append the text to the temperature column(s)
            value_column_tem.appendChild(column_value_text_tem);
            // Append the Row to the table
            new_row.appendChild(value_column_tem);

            // create a column for the location (elements)
            value_column_loc = document.createElement("td");
            // Set styling for the column
            value_column_loc.className = "rightSideTable";
            // Create text for the location column
            column_value_text_loc = document.createTextNode(v_string_loc);
            // append the text to the location column(s)
            value_column_loc.appendChild(column_value_text_loc);
            // Append the Row to the table
            new_row.appendChild(value_column_loc);

            // create a column for the weather pattern (elements)
            value_column_wea = document.createElement("td");
            // Set styling for the column
            value_column_wea.className = "rightSideTable";
            // Create text for the weather pattern column
            column_value_text_wea = document.createTextNode(v_string_wea);
            // append the text to the weather pattern column(s)
            value_column_wea.appendChild(column_value_text_wea);
            // Append the Row to the table
            new_row.appendChild(value_column_wea);

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
    // there are no records to display
    else {
        // set the text for key_length div stating there are no records
        var key_len_string = "You have 0 records saved.";
        document.getElementById("key_length").innerHTML = key_len_string;
        // make the table invisible
        document.getElementById("yourDisplayTable").style.display = "none";
    }
    // check if there are 3 or more records
    if (key_len >= 3) {
        // set the footer's bottom padding to keep the footer in the same position relative to the 
        // bottom screen
        document.getElementById("yourFooter").style.paddingBottom = "25px";
    }
}
