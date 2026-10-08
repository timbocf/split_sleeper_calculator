// split_sleeper_calc.js

const maxTotalDailyHours = 14;
const maxTotalDailyDrivingHours = 11;
const submitBtn = document.getElementById("submitBtn");

// Continue button
submitBtn.addEventListener("click", function () {
    calculateRemainingHours();
})

function calculateRemainingHours() {
    const result = document.getElementById("result");

    // User inputs length and type of first break
    const firstBreak = document.getElementById("firstBreak");
    const firstBreakHours = Number(firstBreak.value);
    // User inputs length and type of second break
    const secondBreak = document.getElementById("secondBreak");
    const secondBreakHours = Number(secondBreak.value);
    // User inputs hours worked after first break
    const hoursWorkedBetweenBreaks = Number(document.getElementById("hoursWorkedBetweenBreaks").value);
    // User inputs hours driven after first break
    const hoursDrivenBetweenBreaks = Number(document.getElementById("hoursDrivenBetweenBreaks").value);
    // Duty Status
    const dutyStatusFirstBreak = document.getElementById("dutyStatusFirstBreak").value;
    const dutyStatusSecondBreak = document.getElementById("dutyStatusSecondBreak").value;
    // Check if breaks qualify for split sleeper
    // Are both breaks at least two consecutive hours and qualifying off-duty time?
    if (firstBreakHours + secondBreakHours >= 10) {
        if ((firstBreakHours >= 2 && (dutyStatusFirstBreak === "off-duty" || dutyStatusFirstBreak === "sleeperBerth")) && ((secondBreakHours >= 7) && dutyStatusSecondBreak == "sleeperBerth") || (secondBreakHours >= 2 && (dutyStatusSecondBreak === "off-duty" || dutyStatusSecondBreak === "sleeperBerth")) && ((firstBreakHours >= 7) && dutyStatusFirstBreak == "sleeperBerth")) {
            // If qualifying, subtract hours worked between the breaks from fourteen
            const remainingOndutyHours = (maxTotalDailyHours - hoursWorkedBetweenBreaks);
            // Subtract hours driven between the breaks from eleven
            const remainingDrivingHours = Math.min(
                maxTotalDailyDrivingHours - hoursDrivenBetweenBreaks,
                remainingOndutyHours
            );
            result.textContent = "On-Duty Hours Remaining: " + remainingOndutyHours + ", Driving Hours Remaining: " + remainingDrivingHours
        }
        else {
            result.textContent = "Breaks do not qualify for split sleeper";
        }
    }
    else {
        result.textContent = "Breaks do not qualify for split sleeper";
    }
}