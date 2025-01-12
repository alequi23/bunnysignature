document.getElementById("barMenu").addEventListener("click", show_menu);
document.getElementById("blackBox").addEventListener("click", hide_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("blackBox");

function show_menu (){

    nav.style.right = "0px";
    background_menu.style.display = "block"

}

function hide_menu (){

    nav.style.right = "-500px";
    background_menu.style.display = "none"

}