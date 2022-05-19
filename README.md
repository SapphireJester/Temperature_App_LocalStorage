# Temperature_App_LocalStorage
A coding project I made for my CIS234 class. A simple temperature-related web application using HTML, CSS, JavaScript, BootStrap, and LocalStorage. It is being uploaded to GitHub so future CIS234 classes can use it as an example if one is needed. Since this is a public repository, anyone else who wants to look at it for whatever reason can do that too. As this program was made for a class assignment, it is by no way a fully furnished website ready for launch, just a collection of pages that demonstate working code.

The web app has 4 html pages: a home page and three other pages that perform a specific task. 

The lookup page lets the user lookup a date and return either temperature data on that date (high, low, and average temperature) or a message stating there is no data for that date. Only date from January 2022 through April 2022 have data, but only February has authentic data (the other months are copypastes of February).

The monthly page allows the user to look up one of four months (January 2022 through April 2022) and display every date in the chosen month and its temperature data. Both these pages have their data stored in arrays in a JavaScript file. 

The final page, your_data, allows users to create their own forecast records (consisting of a date, temperature, location, and weather pattern) and then save them to local storage. The page will also display all the records the user created, allow the user to edit and delete individual records, or mass delete all records.

There is also a companion project in anothe repository of mine, that has the same apperance and does all the same stuff, except it uses MongoDB to store data instead of JavaScripy arrays and LocalStorage. It is found at https://github.com/SapphireJester/Weather_App_Node_MongoDB

This application is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. More information on that license can be found at https://creativecommons.org/licenses/by-sa/4.0/

Thank you for reading.
