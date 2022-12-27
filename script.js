
let switchDarkModeButton = document.querySelector("#switchDarkMode");
let darkMode = localStorage.getItem("darkMode") == "true";
console.log(switchDarkModeButton);
console.log("Dark Mode is on: " ,darkMode);
let allSections = document.querySelectorAll("body,header,main,footer");
let allText = document.querySelectorAll("h1,h2,p,li,nav a");

function set_mode(isDarkMode) {
    if(isDarkMode){
        allText.forEach((element) => {
            element.classList.add("darkModeTextWhite")});
        allSections.forEach((section) => {
            section.classList.add("darkModeBackBlack")});
        switchDarkModeButton.checked = true;
    }else{
        allText.forEach((element) => {
            element.classList.remove("darkModeTextWhite")})
        allSections.forEach((section) => {
            section.classList.remove("darkModeBackBlack")});
        switchDarkModeButton.checked = false;
    }
}

set_mode(darkMode)

switchDarkModeButton.addEventListener('change', function(){
    darkMode = !darkMode;
    set_mode(darkMode);
    localStorage.setItem("darkMode", darkMode)
});



