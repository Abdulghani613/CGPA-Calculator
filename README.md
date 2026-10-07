# 🎓 GradeFlow

### Modern GPA & CGPA Calculator

GradeFlow is a modern, minimalist **GPA & CGPA Calculator** built for students who want a fast and simple way to calculate their academic performance.

It provides separate tools for calculating **current semester GPA** and **overall CGPA**, with automatic credit-hour calculations, course management, responsive design, and smooth GSAP-powered animations.

---

## ✨ Features

### 📚 Semester GPA Calculator

* Add multiple courses
* Enter course name
* Enter credit hours
* Select grade from A to F
* Automatically calculate semester GPA
* Automatically calculate total credit hours
* Automatically calculate quality points
* Remove individual courses
* Real-time result updates

### 🎓 Overall CGPA Calculator

* Enter previous CGPA
* Enter previous total credit hours
* Automatically receives current semester GPA
* Automatically receives current semester credit hours
* Calculates weighted overall CGPA

### 🎨 Modern UI/UX

* Minimalist interface
* Clean dashboard layout
* Responsive design
* Modern typography
* Glassmorphism-inspired cards
* Animated background graphics
* Floating academic cards
* Interactive buttons
* Empty states
* Input validation feedback
* Mobile-friendly layout

### ⚡ Smooth Animations

The application uses **GSAP** for polished micro-interactions and transitions.

Animations include:

* Page entrance animations
* Floating hero graphics
* Rotating circular elements
* Animated GPA values
* Animated CGPA values
* Course insertion animation
* Course removal animation
* Button interactions
* Input error animations
* Result transitions

---

## 🧮 GPA Formula

GradeFlow calculates semester GPA using a weighted GPA formula:

```text
GPA = Total Quality Points / Total Credit Hours
```

Quality points are calculated as:

```text
Quality Points = Credit Hours × Grade Points
```

### Example

| Course      | Credit Hours | Grade | Grade Points |
| ----------- | -----------: | ----- | -----------: |
| Mathematics |            3 | A     |          4.0 |
| English     |            3 | B     |          3.0 |
| Programming |            4 | A-    |          3.7 |

The calculator automatically calculates the weighted GPA based on the credit hours of each course.

---

## 📊 CGPA Formula

Overall CGPA combines previous academic performance with the current semester:

```text
Overall CGPA =
(
    Previous CGPA × Previous Credits
    +
    Current GPA × Current Credits
)
/
(
    Previous Credits + Current Credits
)
```

### Example

```text
Previous CGPA  = 3.20
Previous Credits = 30

Current GPA = 3.50
Current Credits = 15
```

Result:

```text
Overall CGPA = 3.30
```

---

## 🛠️ Technologies

| Technology   | Purpose                   |
| ------------ | ------------------------- |
| HTML5        | Application structure     |
| CSS3         | Styling and responsive UI |
| JavaScript   | Calculator logic          |
| GSAP         | Animations                |
| Google Fonts | Inter typography          |

---

## 📁 Project Structure

```text
GradeFlow/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the application:

* Header
* Hero section
* GPA calculator
* Course table
* CGPA calculator
* Result sections
* Decorative graphics

### `style.css`

Controls:

* Layout
* Typography
* Colors
* Cards
* Forms
* Buttons
* Tables
* Responsive design
* Background graphics
* Visual effects

### `script.js`

Handles:

* Course creation
* Course deletion
* GPA calculation
* CGPA calculation
* Credit-hour calculations
* Input validation
* Dynamic DOM updates
* GSAP animations

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/gradeflow.git
```

### Navigate to the project

```bash
cd gradeflow
```

### Run the project

Open `index.html` in your browser.

For development, you can use **VS Code + Live Server**.

---

## 📱 Responsive Design

GradeFlow is designed to work across:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

The layout automatically adapts to smaller screens while maintaining usability.

---

## 🎯 Design Philosophy

GradeFlow follows a simple design principle:

> **Less noise. More clarity.**

The interface intentionally avoids unnecessary elements and focuses on the information students actually need:

**Courses → GPA → Credits → CGPA**

The visual system uses:

* Generous whitespace
* Neutral colors
* Subtle borders
* Soft shadows
* Minimal typography
* Small micro-interactions
* Motion used only where it improves feedback

---

## 🔮 Future Improvements

The project can be extended with:

* [ ] LocalStorage support
* [ ] Semester history
* [ ] Dark mode
* [ ] Multiple GPA scales
* [ ] Custom grading systems
* [ ] Course editing
* [ ] Semester comparison
* [ ] GPA progress charts
* [ ] PDF export
* [ ] Printable academic report
* [ ] React + Framer Motion version
* [ ] Cloud data synchronization
* [ ] User accounts

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you would like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Built as a modern frontend project focused on **UI/UX, JavaScript logic, responsive design, and web animation**.

---

<p align="center">

### 🎓 GradeFlow

**Calculate smarter. Plan better.**

</p>
```

**File ka naam exactly `README.md`** rakhna aur project ke root folder mein rakhna:

```text
GradeFlow/
├── index.html
├── style.css
├── script.js
└── README.md  ← ye
```

GitHub par push karne ke baad ye automatically repository ke front page par render ho jayegi.
