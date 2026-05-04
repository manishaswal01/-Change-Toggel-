# 🎨 Interactive Theme Switcher (Toggle App)

A sleek and lightweight web application that demonstrates smooth **Light/Dark theme switching** using **JavaScript** and **LocalStorage**.  
This project focuses on **UI animations, user experience, and persistent state management**.

---

## 🌐 Live Demo  
👉 https://manishaswal01.github.io/-Change-Toggel-/

---

## 📸 Preview  
> Smooth animated toggle with a modern UI and persistent theme memory.

---

## ✨ Features  

✔️ **Persistent Theme Preference**  
- Uses `localStorage` to store the selected theme  
- Automatically restores the theme after page refresh  

✔️ **Smooth Bouncy Animations**  
- Custom `cubic-bezier` transition for a premium feel  
- 0.8s smooth animation across UI elements  

✔️ **Dynamic UI Transformation**  
- Elements shift position using `translateY`  
- Heading and button swap positions in Dark Mode  

✔️ **Responsive Design**  
- Fully optimized for mobile, tablet, and desktop  
- Adaptive font sizes and spacing  

✔️ **Interactive Feedback**  
- Button text updates dynamically  
- Enhances user engagement  

---

## 🛠️ Tech Stack  

| Technology   | Usage |
|-------------|------|
| HTML5       | Structure of the application |
| CSS3        | Styling, animations, responsiveness |
| JavaScript (ES6) | Logic for theme switching & storage |

---

## 📂 Project Structure  
📁 Toggle-App
│── index_2.html # Main HTML structure
│── style_2.css # Styling & animations
│── script_2.js # Theme logic & localStorage handling


---

## ⚙️ How It Works  

1. User clicks the toggle button  
2. JavaScript switches between:
   - `applyDark()`
   - `applyLight()`  
3. Selected theme is saved in `localStorage`  
4. On page reload, `window.onload` restores the theme  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/manishaswal01/-Change-Toggel-.git
