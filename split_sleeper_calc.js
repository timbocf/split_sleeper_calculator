const maxTotalDailyHours = 14;
const maxTotalDailyDrivingHours = 11;

// User inputs length and type of first break
const firstBreak = document.getElementById("firstBreak");
// User inputs length and type of second break
const secondBreak = document.getElementById("secondBreak");
// User inputs hours worked after first break
const hoursWorkedBetweenBreaks = document.getElementById("hoursWorkedBetweenBreaks");
// User inputs hours driven after first break
const hoursDrivenBetweenBreaks = document.getElementById("hoursDrivenBetweenBreaks");

// Check if breaks qualify for split sleeper
// Are both breaks at least two consecutive hours and qualifying off-duty time?



// Does at least one contain at least seven consecutive hours entirely in the sleeper berth?


// Do the two periods total at least ten hours?

// If yes, qualifying split-sleeper pairing

// If no, no qualifying split-sleeper pairing


// If qualifying, subtract hours worked between the breaks from fourteen


// Subtract hours driven between the breaks from eleven


// Display remaining fourteen-hour clock.
// Display remaining eleven-hour driving clock.