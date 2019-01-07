var nav = document.getElementById("NAV")
var links = document.getElementsByClassName("nav-link")
var toActivate = window.location.href.match("\/[a-zA-z]*$")[0];
var currLink = document.querySelectorAll("a[href=\""+toActivate+"\"]")
currLink[0].parentElement.classList.add("active")
