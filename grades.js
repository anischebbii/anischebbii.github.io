const navGame = document.getElementById("nav-game");
const navGrades = document.getElementById("nav-grades");
const gameView = document.getElementById("game-view");
const gradesView = document.getElementById("grades-view");

navGame.addEventListener("click", () => {
    gameView.style.display = "block";
    gradesView.style.display = "none";
});

navGrades.addEventListener("click", () => {
    gameView.style.display = "none";
    gradesView.style.display = "block";
});


const submitGrades = document.getElementById("submit-grades");
const gradesForm = document.getElementById("grades-form");
const numSubjectsInput = document.getElementById("num-subjects");
const subjectInputs = document.getElementById("subject-inputs");
const calculateGradeBtn = document.getElementById("calculate-grade");
const gradeResult = document.getElementById("grade-result");

gradesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const numSubjects = parseInt(numSubjectsInput.value);

    subjectInputs.innerHTML = "";

    for (let i = 0; i < numSubjects; i++) {
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");

        const label = document.createElement("label");
        label.textContent = `Subject ${i + 1} Mark (0-100):`;
        inputContainer.appendChild(label);

        const input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.max = 100;
        input.required = true;
        input.classList.add("subject-mark");
        inputContainer.appendChild(input);

        subjectInputs.appendChild(inputContainer);
    }

    calculateGradeBtn.style.display = "block";
});

calculateGradeBtn.addEventListener("click", () => {
    const subjectMarks = document.getElementsByClassName("subject-mark");
    let totalMarks = 0;
    let numSubjects = subjectMarks.length;

    for (let i = 0; i < numSubjects; i++) {
        totalMarks += parseInt(subjectMarks[i].value);
    }

    const average = totalMarks / numSubjects;
    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else if (average >= 50) {
        grade = "E";
    } else {
        grade = "F";
    }

    gradeResult.textContent = `${playerName}, your grade is ${grade}.`;
    gradeResult.style.display = "block";
});