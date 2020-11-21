document.getElementById("exploreBtn").onclick = function() {
    document.getElementById("explore").style.display = "block";
};

document.getElementById("webinarsBtn").onclick = function() {
    document.getElementById("webinars").style.display = "block !important";
    document.getElementById("explore").style.display = "none";
}