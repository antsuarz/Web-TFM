document.addEventListener("DOMContentLoaded", function () {
    const zapatosLink = document.getElementById("nav-shoes");
    const zapatosArticle = document.getElementById("zapatos");

    zapatosLink.addEventListener("click", function (event) {
        event.preventDefault();
        zapatosArticle.style.display = "block"; 
    });
});