// bright / dark mode theme
const root = document.documentElement;
const btn = document.getElementById("modeToggle");


let darkMode = true;


function colorModeToggle(){
    if (darkMode){
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
        darkMode = false
    }
    else {
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
        darkMode = true
    }
}

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
