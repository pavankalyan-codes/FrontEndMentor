var quotes = [{
        quoteText: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: "Tanya Sinclair",
        role: "UX Engineer",
        profile: "./images/image-tanya.jpg",
    },
    {
        quoteText: "“ If you want to lay the best foundation possible I’ d recommend taking this course.The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer. ”",
        name: "John Wick",
        role: "Front End Developer",
        profile: "./images/image-john.jpg",
    },
];
var currentIndex = 0;

function previous() {
    console.log("previous");
    if (currentIndex == 0) {
        return;
    }
    document.getElementById("quote-text").textContent = quotes[0].quoteText;
    document.getElementById("name").textContent = quotes[0].name;
    document.getElementById("role").textContent = quotes[0].role;
    document.getElementById("profile").src = quotes[0].profile;
    currentIndex--;
}

function next() {
    if (currentIndex == 1) {
        return;
    }
    console.log("next");
    document.getElementById("quote-text").textContent = quotes[1].quoteText;
    document.getElementById("name").textContent = quotes[1].name;
    document.getElementById("role").textContent = quotes[1].role;
    document.getElementById("profile").src = quotes[1].profile;

    currentIndex++;
}