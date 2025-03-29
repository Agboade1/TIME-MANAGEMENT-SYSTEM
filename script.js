function calculateShift() {
    let startDate = document.getElementById("start-date").value;
    
    if (!startDate) {
        alert("Please select a start date.");
        return;
    }

    let start = new Date(startDate);
    let today = new Date();
    
    let difference = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    let shiftCycle = difference % 18;

    let shift;
    if (shiftCycle < 6) {
        shift = "Morning Shift (6 AM - 2 PM)";
    } else if (shiftCycle < 12) {
        shift = "Night Shift (9 PM - 6 AM)";
    } else {
        shift = "Afternoon Shift (2 PM - 9 PM)";
    }

    document.getElementById("shift-result").textContent = `Your shift: ${shift}`;
}
