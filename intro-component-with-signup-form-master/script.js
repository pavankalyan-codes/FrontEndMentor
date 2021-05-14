function claim() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var password = document.getElementById("password");
    var email = document.getElementById("email");

    if (fname.value.trim() === "") {
        document.getElementById("fname-erricon").classList.remove("hide");
        document.getElementById("fname-errtext").classList.remove("hide");
    } else {
        document.getElementById("fname-erricon").classList.add("hide");
        document.getElementById("fname-errtext").classList.add("hide");
    }

    if (lname.value.trim() === "") {
        document.getElementById("lname-erricon").classList.remove("hide");
        document.getElementById("lname-errtext").classList.remove("hide");
    } else {
        document.getElementById("lname-erricon").classList.add("hide");
        document.getElementById("lname-errtext").classList.add("hide");
    }

    if (password.value.trim() === "") {
        document.getElementById("password-erricon").classList.remove("hide");
        document.getElementById("password-errtext").classList.remove("hide");
    } else {
        document.getElementById("password-erricon").classList.add("hide");
        document.getElementById("password-errtext").classList.add("hide");
    }

    if (email.value.trim() === "") {
        document.getElementById("email-erricon").classList.remove("hide");
        document.getElementById("email-errtext").classList.remove("hide");
    } else {
        document.getElementById("email-erricon").classList.add("hide");
        document.getElementById("email-errtext").classList.add("hide");
    }
}