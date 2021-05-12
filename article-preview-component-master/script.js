var shareOpen = false;

function share() {
    var x = window.innerWidth;

    console.log(x);
    if (x > 650) {} else {
        if (shareOpen) {
            document.getElementById("share-hidden").classList.remove("hide");
            document.getElementById("share-bar").classList.add("hide");
        } else {
            document.getElementById("share-hidden").classList.add("hide");
            document.getElementById("share-bar").classList.remove("hide");
        }
    }

    shareOpen = !shareOpen;
}