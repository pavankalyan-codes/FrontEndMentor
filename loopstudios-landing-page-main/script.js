function openMenu() {
    document.getElementById("main").classList.add("hide");
    document.getElementById("hamMenu").classList.remove("hide");
}

function closeMenu() {
    document.getElementById("main").classList.remove("hide");
    document.getElementById("hamMenu").classList.add("hide");
}

document.addEventListener(
    "scroll",
    function(e) {
        var h1 = document.getElementById("second-page");

        // Get it's position in the viewport
        var bounding = h1.getBoundingClientRect();

        // Log the results
        console.log(bounding);
        if (bounding.top < 0) {
            console.log("-------------------------------");
            document.getElementById("card1").style.animation =
                "leftmove 1s ease-out;";
        }
    },
    true
);