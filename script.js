var box = document.querySelector(".box");
var btn = document.querySelector(".btn");
var h1 = document.querySelector(".h1");

// 1. Page load hote hi check karein ki kya pehle dark mode save tha
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        applyDark();
    }
};

btn.addEventListener("click", function () {
    // 2. Check karein ki current state kya hai
    if (localStorage.getItem("theme") === "dark") {
        applyLight();
    } else {
        applyDark();
    }
});

function applyDark() {
    box.style.backgroundColor = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.textContent = "Switch to Light";
    h1.style.color = "white";
    h1.style.transform = "translateY(70px)"; 
    btn.style.transform = "translateY(-50px)";
    
    // 3. Browser memory mein 'dark' save karein
    localStorage.setItem("theme", "dark");
}

function applyLight() {
    box.style.backgroundColor = "white";
    btn.style.backgroundColor = "black";
    btn.style.color  = "white";
    btn.textContent = "Change Theme";
    h1.style.color = "black";
    h1.style.transform = "translateY(0px)";
    btn.style.transform = "translateY(0px)";
    
    // 4. Browser memory mein 'light' save karein
    localStorage.setItem("theme", "light");
}