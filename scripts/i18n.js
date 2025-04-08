const LanguageManager = (() => {
    let currentLang = "es";

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
            "modal-title":"Your Cart",
            "cart-button":"Add to Cart"
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
            "modal-title":"Tu Carrito",
            "cart-button":"Añadir al Carrito"
        }
    };

    function getCurrentLang(){
        return currentLang;
    }
    function updateLanguage() {
        navUpdate();
        categoryUpdate();
        buttonsUpdate();
        document.getElementById("lang-button").textContent = currentLang === "en" ? "ES" : "EN"; 
        
    }

    
    function buttonsUpdate() {
        const addToCartButtons = document.querySelectorAll('section > button');
        addToCartButtons.forEach(button => {
            button.textContent = translations[currentLang]["cart-button"];
        }); 

    }
    function categoryUpdate() {
        document.getElementById("shirt-category").textContent = translations[currentLang]["shirt-category"];
        document.getElementById("tshirt-category").textContent = translations[currentLang]["tshirt-category"];
        document.getElementById("jacket-category").textContent = translations[currentLang]["jacket-category"];
        document.getElementById("jeans-category").textContent = translations[currentLang]["jeans-category"]; 
        document.getElementById("modal-title").textContent = translations[currentLang]["modal-title"]; 
        
    }

    function navUpdate() {
        document.getElementById("title").textContent = translations[currentLang].title;
        document.getElementById("nav-shirts").textContent = translations[currentLang]["nav-shirts"];
        document.getElementById("nav-tshirts").textContent = translations[currentLang]["nav-tshirts"];
        document.getElementById("nav-jeans").textContent = translations[currentLang]["nav-jeans"];
        document.getElementById("nav-jackets").textContent = translations[currentLang]["nav-jackets"]; 
    }

    return {
        toggleLanguage: function () {
            currentLang = currentLang === "es" ? "en" : "es";
            updateLanguage();
        }
    };
})();
 
document.getElementById("lang-button").addEventListener("click", LanguageManager.toggleLanguage);
