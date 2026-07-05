# Student Search Filter

## Description

This project is a JavaScript-based student search filter application that dynamically displays student records in card format.

The student data is stored as an array of objects containing details such as name, marks, class, and address. JavaScript is used to dynamically generate the student cards and display them on the webpage.

Users can enter a student's name in the search field and click the Search button to filter the displayed student records. The filtering is case-insensitive and uses JavaScript's `filter()` method.

## Features

- Displays student records dynamically using JavaScript.
- Stores student information using an array of objects.
- Displays student name, marks, class, and address.
- Uses the `map()` method to generate student card elements.
- Uses the `filter()` method to search student records.
- Provides case-insensitive searching.
- Displays matching student records when the Search button is clicked.
- Displays a "No records found" message when no matching students are found.
- Displays the searched name above the filtered results.
- Automatically updates the displayed cards after every search.
- Responsive card layout using CSS Flexbox.
- Fixed navigation bar and search section.

## CSS Concepts Used

- Universal Selector
- Box Model
- Flexbox
- `flex-wrap`
- Fixed Positioning
- Margins and Padding
- `gap`
- Border Radius
- Background Colors
- Font Styling
- Hover Effects
- CSS Selectors
- `z-index`

## JavaScript Concepts Used

- Arrays
- Objects
- Functions
- `map()` Method
- `filter()` Method
- Arrow Functions
- Callback Functions
- DOM Manipulation
- `document.querySelector()`
- `document.createElement()`
- `classList.add()`
- `appendChild()`
- `innerHTML`
- Event Listeners
- Template Literals
- String Methods
- `toLowerCase()`
- `startsWith()`
- Conditional Statements

## How to Run

1. Download or clone the project files.
2. Make sure `index.html`, `style.css`, `script.js`, and `README.md` are in the same project folder.
3. Open `index.html` in a web browser or run the project using Live Server.
4. The student records will be displayed automatically.
5. Enter a student's name in the search field.
6. Click the Search button to display matching student records.
7. If no matching student is found, a "No records found" message will be displayed.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Improvements from Previous Tasks

- Worked with arrays containing multiple JavaScript objects.
- Dynamically created HTML elements using JavaScript.
- Used the `map()` method to generate student card elements.
- Used the `filter()` method to search through student records.
- Implemented case-insensitive searching using string methods.
- Dynamically updated the DOM based on filtered results.
- Implemented empty search result handling.
- Created multiple reusable student cards from JavaScript data.
- Combined HTML, CSS, and JavaScript to build an interactive search interface.

## Notes

- Student records are stored locally in a JavaScript array.
- Student cards are dynamically generated from the student data.
- Searching is performed when the Search button is clicked.
- The search is case-insensitive.
- The current search uses `startsWith()`, so the entered text must match the beginning of the student's name.
- No external API or database is used.