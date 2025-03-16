const LanguageManager = (() => {
    let currentLang = "en";

    const translations = {
        en: {
            title: "AC E-commerce",
            "nav-shirts": "Shirts",
            "nav-jeans": "Jeans",
            "nav-jackets": "Jackets",
            "nav-tshirts": "T-Shirts",
            "nav-shoes": "Shoes",
            "stock-title": "Our Stock",
            "shirt-category": "Shirts",
            "tshirt-category": "T-Shirts",
            "jeans-category": "Jeans",
            "jacket-category": "Jackets",
            "shoes-category": "Shoes"
        },
        es: {
            title: "AC Comercio Electrónico",
            "nav-shirts": "Camisas",
            "nav-jeans": "Pantalones",
            "nav-jackets": "Chaquetas",
            "nav-tshirts": "Camisetas",
            "nav-shoes": "Zapatos",
            "stock-title": "Nuestro Stock",
            "shirt-category": "Camisas",
            "tshirt-category": "Camisetas",
            "jeans-category": "Pantalones",
            "jacket-category": "Chaquetas",
            "shoes-category": "Zapatos"
        }
    };

    function updateLanguage() {
        navUpdate();
        categoryUpdate();
        document.getElementById("lang-button").textContent = currentLang === "en" ? "ES" : "EN"; 
        
    }

    function categoryUpdate() {
        document.getElementById("shirt-category").textContent = translations[currentLang]["shirt-category"];
        document.getElementById("tshirt-category").textContent = translations[currentLang]["tshirt-category"];
        document.getElementById("jacket-category").textContent = translations[currentLang]["jacket-category"];
        document.getElementById("jeans-category").textContent = translations[currentLang]["jeans-category"];
        document.getElementById("shoes-category").textContent = translations[currentLang]["shoes-category"];
    }

    function navUpdate() {
        document.getElementById("title").textContent = translations[currentLang].title;
        document.getElementById("nav-shirts").textContent = translations[currentLang]["nav-shirts"];
        document.getElementById("nav-tshirts").textContent = translations[currentLang]["nav-tshirts"];
        document.getElementById("nav-jeans").textContent = translations[currentLang]["nav-jeans"];
        document.getElementById("nav-jackets").textContent = translations[currentLang]["nav-jackets"];
        document.getElementById("nav-shoes").textContent = translations[currentLang]["nav-shoes"];
    }

    return {
        toggleLanguage: function () {
            currentLang = currentLang === "es" ? "en" : "es";
            updateLanguage();
        }
    };
})();
 
document.getElementById("lang-button").addEventListener("click", LanguageManager.toggleLanguage);
