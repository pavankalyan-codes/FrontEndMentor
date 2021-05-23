function openMenu() {
    document.getElementById("main").classList.add("hide");
    document.getElementById("ham-menu").classList.remove("hide");
}

function closeMenu() {
    document.getElementById("main").classList.remove("hide");
    document.getElementById("ham-menu").classList.add("hide");
}