// bright / dark mode theme
const root = document.documentElement;
const btn = document.getElementById("modeToggle");

// reading the value from the localStorage
let darkMode = localStorage.getItem("darkMode") === "true";

function applyMode(){
    if (darkMode){
        // Dark Mode
        root.style.setProperty("--color-text-white","white");
        root.style.setProperty("--color-white","white");
        root.style.setProperty("--color-black","black");
        root.style.setProperty("--color-dark-1","#111827");
        root.style.setProperty("--color-dark-2","#242A38");
        root.style.setProperty("--color-dark-3","#333D4C");
        root.style.setProperty("--color-dark-4","#343D4A");
        root.style.setProperty("--color-dark-5","#1D2735");
        root.style.setProperty("--color-dark-6","#251E2B");
        root.style.setProperty("--banner-color-dark-1","#1D2735");
        root.style.setProperty("--banner-color-dark-2","#4E5562");
        root.style.setProperty("--tag-color-1","#333D4C");
        root.style.setProperty("--download-btn-color-1","#333D4C");
        root.style.setProperty("--color-gray-1","#cdccce");
        root.style.setProperty("--color-gray-2","#cdced0");
        root.style.setProperty("--color-gray-3","#959CA7");
        root.style.setProperty("--color-gray-4","#9CA3AF");
        root.style.setProperty("--color-gray-5","#4E5562");
        root.style.setProperty("--color-gray-6","#343A47");
    }
    else {
        // Light Mode
        root.style.setProperty("--color-text-white","#111834");
        root.style.setProperty("--color-white","#111834");
        root.style.setProperty("--color-black","white");
        root.style.setProperty("--color-dark-1","#FFFFFF");
        root.style.setProperty("--color-dark-2","#F2F3F5");
        root.style.setProperty("--color-dark-3","#EEF1F6");
        root.style.setProperty("--color-dark-4","#F7F8FB");
        root.style.setProperty("--color-dark-5","#F5F7FA");
        root.style.setProperty("--color-dark-6","#FBEEEE");
        root.style.setProperty("--banner-color-dark-1","#EEF1F6");
        root.style.setProperty("--banner-color-dark-2","#F7F8FB");
        root.style.setProperty("--tag-color-1","#EEF1F6");
        root.style.setProperty("--download-btn-color-1","#1D2735");
        root.style.setProperty("--color-gray-1","#111834");
        root.style.setProperty("--color-gray-2","#4E5562");
        root.style.setProperty("--color-gray-3","#797E89");
        root.style.setProperty("--color-gray-4","#797E89");
        root.style.setProperty("--color-gray-5","#E5E5E5");
        root.style.setProperty("--color-gray-6","#E5E5E5");
    }
}

function colorModeToggle(){
    darkMode = !darkMode; 
    localStorage.setItem("darkMode", darkMode); // saving the state
    applyMode(); 
}

// apply mode as soon as the page loads
applyMode();

// event listener for color mode toggle button
btn.addEventListener("click", colorModeToggle);


// nav bar toggle btn
const navToggleBtn = document.getElementById("navToggleBtn");
const nav2 = document.getElementById("smallWidth");
const nav1 = document.getElementById("largerWidth");
const closeNav = document.getElementById("closeNav");

function navToggle(){
    if (nav2.style.display == "none"){
        nav2.style.display = "block";
    }
    else{
        nav2.style.display = "none";
    }
}
navToggleBtn.addEventListener("click",navToggle);
closeNav.addEventListener("click",navToggle);

// customize panel toggle

const customizePanelBtn = document.getElementById("panelToggleBtn");
const customizePanelBtn2 = document.getElementById("panelToggleBtn2");
const customizePanel =document.getElementById("customizePanel");

function panelToggle(){
    if(customizePanel.style.display == "none"){
        customizePanel.style.display = "flex";
        customizePanel.style.flexDirection = "row-reverse";
        customizePanel.style.justifyContent = "flex-start";
    }
    else{
        customizePanel.style.display = "none";
    }
}
customizePanelBtn.addEventListener("click",panelToggle);
customizePanelBtn2.addEventListener("click",panelToggle);

//taking input from the user
const colorPicker = document.getElementById("primaryColor");
const applyColorBtn = document.getElementById("applyColor");

// check if there is a saved primary color 
// if true use it
const savedPrimaryColor = localStorage.getItem("primaryColor");
if (savedPrimaryColor) {
    root.style.setProperty("--color-accent-1", savedPrimaryColor);
    colorPicker.value = savedPrimaryColor; 
}

function colorChange(){
    let selectedColor = colorPicker.value;
    root.style.setProperty("--color-accent-1", selectedColor);
    localStorage.setItem("primaryColor", selectedColor); // saving the color
}

applyColorBtn.addEventListener("click", colorChange);
