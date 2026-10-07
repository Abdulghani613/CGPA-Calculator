// ========================================
// ELEMENTS
// ========================================

const courseNameInput =
    document.getElementById("courseName");

const creditHoursInput =
    document.getElementById("creditHours");

const gradeInput =
    document.getElementById("grade");

const addCourseButton =
    document.getElementById("addCourse");

const courseTableBody =
    document.getElementById("courseTableBody");

const emptyState =
    document.getElementById("emptyState");

const gpaResult =
    document.getElementById("gpaResult");

const totalCredits =
    document.getElementById("totalCredits");

const qualityPoints =
    document.getElementById("qualityPoints");

const previousCgpaInput =
    document.getElementById("previousCgpa");

const previousCreditsInput =
    document.getElementById("previousCredits");

const currentGpaForCgpa =
    document.getElementById("currentGpaForCgpa");

const currentCreditsForCgpa =
    document.getElementById("currentCreditsForCgpa");

const calculateCgpaButton =
    document.getElementById("calculateCgpa");

const cgpaResult =
    document.getElementById("cgpaResult");


// ========================================
// STATE
// ========================================

let totalGradePoints = 0;
let totalCreditHours = 0;


// ========================================
// GSAP PAGE ANIMATION
// ========================================

gsap.to(".reveal", {
    opacity: 1,
    y: 0,

    duration: 0.7,

    stagger: 0.1,

    ease: "power3.out"
});


// ========================================
// ADD COURSE
// ========================================

addCourseButton.addEventListener("click", function () {

    const courseName =
        courseNameInput.value.trim();

    const creditHours =
        parseFloat(creditHoursInput.value);

    const grade =
        gradeInput.value;

    const gradePoints =
        parseFloat(grade);


    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (courseName === "") {

        showError(courseNameInput);

        courseNameInput.focus();

        return;
    }


    if (
        isNaN(creditHours) ||
        creditHours <= 0
    ) {

        showError(creditHoursInput);

        creditHoursInput.focus();

        return;
    }


    if (grade === "") {

        showError(gradeInput);

        gradeInput.focus();

        return;
    }


    // -----------------------------
    // CALCULATE
    // -----------------------------

    const points =
        creditHours * gradePoints;


    totalGradePoints += points;

    totalCreditHours += creditHours;


    // -----------------------------
    // CREATE ROW
    // -----------------------------

    const row =
        document.createElement("tr");


    const courseCell =
        document.createElement("td");

    courseCell.textContent =
        courseName;


    const creditCell =
        document.createElement("td");

    creditCell.textContent =
        creditHours;


    const gradeCell =
        document.createElement("td");

    gradeCell.textContent =
        gradeInput.options[
            gradeInput.selectedIndex
        ].text;


    const actionCell =
        document.createElement("td");


    const deleteButton =
        document.createElement("button");

    deleteButton.type = "button";

    deleteButton.className =
        "delete-button";

    deleteButton.textContent =
        "Remove";


    // -----------------------------
    // DELETE
    // -----------------------------

    deleteButton.addEventListener(
        "click",
        function () {

            totalGradePoints -= points;

            totalCreditHours -= creditHours;


            row.style.pointerEvents = "none";


            gsap.to(row, {

                opacity: 0,

                x: 20,

                height: 0,

                duration: 0.25,

                onComplete: function () {

                    row.remove();

                    updateResults();

                }

            });

        }
    );


    actionCell.appendChild(deleteButton);


    row.appendChild(courseCell);

    row.appendChild(creditCell);

    row.appendChild(gradeCell);

    row.appendChild(actionCell);


    courseTableBody.appendChild(row);


    // -----------------------------
    // ROW ANIMATION
    // -----------------------------

    gsap.from(row, {

        opacity: 0,

        y: -10,

        duration: 0.35,

        ease: "power2.out"

    });


    // -----------------------------
    // UPDATE
    // -----------------------------

    updateResults();


    // -----------------------------
    // RESET FORM
    // -----------------------------

    courseNameInput.value = "";

    creditHoursInput.value = "";

    gradeInput.value = "";

    courseNameInput.focus();

});


// ========================================
// UPDATE RESULTS
// ========================================

function updateResults() {

    if (totalCreditHours === 0) {

        gpaResult.textContent = "0.00";

        totalCredits.textContent = "0";

        qualityPoints.textContent = "0.00";

        currentGpaForCgpa.textContent =
            "0.00";

        currentCreditsForCgpa.textContent =
            "0";

        emptyState.style.display = "block";

        return;
    }


    const gpa =
        totalGradePoints /
        totalCreditHours;


    // Update UI

    animateNumber(
        gpaResult,
        parseFloat(gpaResult.textContent) || 0,
        gpa,
        2
    );


    animateNumber(
        totalCredits,
        parseFloat(totalCredits.textContent) || 0,
        totalCreditHours,
        0
    );


    animateNumber(
        qualityPoints,
        parseFloat(qualityPoints.textContent) || 0,
        totalGradePoints,
        2
    );


    currentGpaForCgpa.textContent =
        gpa.toFixed(2);

    currentCreditsForCgpa.textContent =
        totalCreditHours;


    emptyState.style.display = "none";
}


// ========================================
// ANIMATED NUMBER
// ========================================

function animateNumber(
    element,
    from,
    to,
    decimals
) {

    const object = {
        value: from
    };


    gsap.to(object, {

        value: to,

        duration: 0.4,

        ease: "power2.out",

        onUpdate: function () {

            element.textContent =
                object.value.toFixed(decimals);

        }

    });

}


// ========================================
// CGPA CALCULATOR
// ========================================

calculateCgpaButton.addEventListener(
    "click",
    function () {

        const previousCgpa =
            parseFloat(
                previousCgpaInput.value
            );


        const previousCredits =
            parseFloat(
                previousCreditsInput.value
            );


        // -----------------------------
        // VALIDATION
        // -----------------------------

        if (
            isNaN(previousCredits) ||
            previousCredits < 0
        ) {

            showError(previousCreditsInput);

            previousCreditsInput.focus();

            return;
        }


        if (
            previousCredits > 0 &&
            (
                isNaN(previousCgpa) ||
                previousCgpa < 0 ||
                previousCgpa > 4
            )
        ) {

            showError(previousCgpaInput);

            previousCgpaInput.focus();

            return;
        }


        if (totalCreditHours === 0) {

            alert(
                "Please add your current semester courses first."
            );

            return;
        }


        // -----------------------------
        // CURRENT SEMESTER
        // -----------------------------

        const currentGpa =
            totalGradePoints /
            totalCreditHours;


        const currentCredits =
            totalCreditHours;


        // -----------------------------
        // CGPA FORMULA
        // -----------------------------

        const overallCgpa =
            (
                (previousCgpa || 0) *
                previousCredits

                +

                currentGpa *
                currentCredits

            )
            /

            (
                previousCredits +
                currentCredits
            );


        // -----------------------------
        // DISPLAY RESULT
        // -----------------------------

        animateNumber(
            cgpaResult,
            parseFloat(cgpaResult.textContent) || 0,
            overallCgpa,
            2
        );


        // -----------------------------
        // RESULT ANIMATION
        // -----------------------------

        gsap.fromTo(
            ".score-pill:last-child",
            {
                scale: 0.96
            },
            {
                scale: 1,
                duration: 0.45,
                ease: "back.out(2)"
            }
        );

    }
);


// ========================================
// INPUT ERROR ANIMATION
// ========================================

function showError(element) {

    gsap.killTweensOf(element);


    gsap.fromTo(
        element,

        {
            x: -6
        },

        {
            x: 6,

            duration: 0.08,

            repeat: 5,

            yoyo: true,

            ease: "power1.inOut",

            onComplete: function () {

                element.style.transform =
                    "translateX(0)";

            }

        }
    );
}


// ========================================
// ENTER KEY SUPPORT
// ========================================

courseNameInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            addCourseButton.click();

        }

    }
);


creditHoursInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            addCourseButton.click();

        }

    }
);