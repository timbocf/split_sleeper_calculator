// split_sleeper_calc.js

const maxTotalDailyHours = 14;
const maxTotalDailyDrivingHours = 11;
const qualifyingBreak = false;
const submitBtn = document.getElementById("submitBtn");

// User inputs length and type of first break
const firstBreak = document.getElementById("firstBreak");
// User inputs length and type of second break
const secondBreak = document.getElementById("secondBreak");
// User inputs hours worked after first break
const hoursWorkedBetweenBreaks = document.getElementById("hoursWorkedBetweenBreaks");
// User inputs hours driven after first break
const hoursDrivenBetweenBreaks = document.getElementById("hoursDrivenBetweenBreaks");
// Duty Status
const dutyStatusFirstBreak = document.getElementById("dutyStatusFirstBreak");
const dutyStatusSecondBreak = document.getElementById("dutyStatusSecondBreak");
// Continue button
submitBtn.addEventListener("click", function () {
    calculateRemainingHours();
})

function calculateRemainingHours() {
    // Check if breaks qualify for split sleeper
    // Are both breaks at least two consecutive hours and qualifying off-duty time?
    if (firstBreak + secondBreak === 10) {
        if ((3 <= firstBreak >= 2 && (dutyStatusFirstBreak === "off-duty" || dutyStatusFirstBreak === "sleeperBerth")) && ((secondBreak >= 7) && dutyStatusSecondBreak == "sleeperBerth")) {
            qualifyingBreak = true;
        }
        if ((3 <= secondBreak >= 2 && (dutyStatusSecondBreak === "off-duty" || dutyStatusSecondBreak === "sleeperBerth")) && ((firstBreak >= 7) && dutyStatusFirstBreak == "sleeperBerth")) {
            qualifyingBreak = true;
        }
        else {
            return "Breaks do not qualify for split sleeper";
        }
    }
    else {
        return "Breaks do not qualify for split sleeper";
    }


    if (qualifyingBreak) {
        // If qualifying, subtract hours worked between the breaks from fourteen
        const remainingOndutyHours = (14 - hoursWorkedBetweenBreaks);
        // Subtract hours driven between the breaks from eleven
        const remainingDrivingHours = (11 - hoursDrivenBetweenBreaks);
    }

    // Display remaining fourteen-hour clock.
    // Display remaining eleven-hour driving clock.
    const result = document.getElementById("result");
    result.textContent = "On-Duty Hours Remaining: " + remainingOndutyHours + " and " + remainingDrivingHours + "remaining driving hours."
}