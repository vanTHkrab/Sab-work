document.addEventListener('DOMContentLoaded', () => {
    const faculties = [
        { faculty: "คณะวิทยาศาสตร์", eligible: 2000, voted: 300 },
        { faculty: "คณะวิศวกรรมศาสตร์", eligible: 1800, voted: 450 },
        { faculty: "คณะบริหารธุรกิจ", eligible: 1500, voted: 400 },
        { faculty: "คณะศิลปศาสตร์", eligible: 1200, voted: 250 },
        { faculty: "คณะแพทยศาสตร์", eligible: 1000, voted: 200 },
        { faculty: "สำนักวิชาวิศวกรรมศาสตร์", eligible: 300, voted: 300}
    ];

    const tbody = document.querySelector("#scoreTable tbody");
    const totalEligible = faculties.reduce((acc, curr) => acc + curr.eligible, 0);
    const totalVoted = faculties.reduce((acc, curr) => acc + curr.voted, 0);
    const totalPercentage = ((totalVoted / totalEligible) * 100).toFixed(2);

    faculties.forEach(faculty => {
        const percentage = ((faculty.voted / faculty.eligible) * 100).toFixed(2);

        const row = document.createElement("tr");

        const facultyCell = document.createElement("td");
        facultyCell.textContent = faculty.faculty;
        row.appendChild(facultyCell);

        const percentageCell = document.createElement("td");
        const barContainer = document.createElement("div");
        barContainer.className = "bar-container";

        const percentageBar = document.createElement("div");
        percentageBar.className = "percentage-bar";
        percentageBar.style.width = `${percentage}%`;

        const percentageText = document.createElement("div");
        percentageText.className = "percentage-text";
        percentageText.textContent = `${percentage}%`;

        barContainer.appendChild(percentageBar);
        barContainer.appendChild(percentageText);
        percentageCell.appendChild(barContainer);
        row.appendChild(percentageCell);

        tbody.appendChild(row);
    });

    // เติมข้อมูลในแถวรวม
    const totalRow = document.createElement("tr");
    const totalFacultyCell = document.createElement("td");
    totalFacultyCell.textContent = "รวม";
    totalRow.appendChild(totalFacultyCell);
    const totalPercentageCell = document.createElement("td");
    const totalBarContainer = document.createElement("div");
    totalBarContainer.className = "bar-container";
    const totalPercentageBar = document.createElement("div");
    totalPercentageBar.className = "percentage-bar";
    totalPercentageBar.style.width = `${totalPercentage}%`;
    const totalPercentageText = document.createElement("div");
    totalPercentageText.className = "percentage-text";
    totalPercentageText.textContent = `${totalPercentage}%`;
    totalBarContainer.appendChild(totalPercentageBar);
    totalBarContainer.appendChild(totalPercentageText);
    totalPercentageCell.appendChild(totalBarContainer);
    totalRow.appendChild(totalPercentageCell);
    tbody.appendChild(totalRow);
});
