function openMenu() {
    document.getElementById("main").classList.add("hide");
    document.getElementById("hamMenu").classList.remove("hide");
}

function closeMenu() {
    document.getElementById("main").classList.remove("hide");
    document.getElementById("hamMenu").classList.add("hide");
}