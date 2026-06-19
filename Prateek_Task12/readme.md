# Compound Interest Calculator

## Description

A simple JavaScript program that calculates Compound Interest using the standard compound interest formula. The program uses predefined values for Principal Amount, Interest Rate, Number of Compounding Periods per Year, and Time Duration, then displays the calculated Compound Interest in the browser console.

## Features

- Uses predefined variables for input values
- Calculates the final amount using the compound interest formula
- Calculates Compound Interest by subtracting the principal amount from the final amount
- Displays output using JavaScript template literals
- Formats the result to 2 decimal places using `toFixed(2)`

## Formula Used

```text
A = P × (1 + r/n)^(n×t)

Compound Interest = A - P
```

Where:

- P = Principal Amount
- r = Annual Interest Rate (in decimal form)
- n = Number of times interest is compounded per year
- t = Time (in years)
- A = Final Amount

## Technologies Used

- HTML5
- JavaScript (ES6)

## How to Run

1. Open the project folder.
2. Open `index.html` in a browser.
3. Open Developer Tools (`F12`).
4. Navigate to the Console tab.
5. View the calculated Compound Interest output.

## Concepts Practiced

- Variables (`const`, `let`)
- Arithmetic Operators
- Exponentiation Operator (`**`)
- Mathematical Formulas
- Template Literals (`${}`)
- Console Output (`console.log()`)
- Number Formatting (`toFixed()`)

## Sample Output

```text
The compound interest after 2 years is: 2537.70
```

## Notes

- Interest rate is converted to decimal form before calculation.
- The result is displayed up to 2 decimal places.
- This project was completed as part of the TuteDude Frontend Development Course JavaScript assignment.