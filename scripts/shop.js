const LanguageManager = (() => {
    let currentLang = "es";

    const translations = {
        en: {
            title: "AC E-commerce",
            "login":"Login",
            "atencion":"Customer Service",
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
            "shoes-category": "Shoes",
            "modal-title":"Your Cart",
            "cart-button":"Add to Cart",
            "politica":"Privacy Policy",
            "terminos":"Terms and Conditions",
            "contacto":"Contact",
            "about":"About Us",
            "social":"Social Media",
            "recompensas":"Rewards Program",
            "promociones":"Promotions",
            "tienda":"Store",
            "afiliados":"Affiliate Program",
            "envios":"Shipping and Returns",
            "devoluciones":"Returns within 30 days",
            "notification":"Product added to cart",
        },
        es: {
            title: "AC Comercio Electrónico",
            "login":"Iniciar Sesión",
            "atencion":"Atención al Cliente",
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
            "shoes-category": "Zapatos",
            "modal-title":"Tu Carrito",
            "cart-button":"Añadir al Carrito",
            "politica":"Política de Privacidad",
            "terminos":"Términos y Condiciones",
            "contacto":"Contacto",
            "about":"Sobre Nosotros",
            "social":"Redes Sociales",
            "recompensas":"Programa de Recompensas",
            "promociones":"Promociones",
            "tienda":"Tienda",
            "afiliados":"Programa de Afiliados",
            "envios":"Envíos y devoluciones",
            "devoluciones":"Devoluciones en un máximo de 30 días",
            "notification":"Producto añadido al carrito"
        }
    };
 
    function updateLanguage() {
        navUpdate();
        categoryUpdate();
        buttonsUpdate();
        footerUpdate();
        document.getElementById("notification-message").textContent = translations[currentLang]["notification"];
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
        document.getElementById("shoes-category").textContent = translations[currentLang]["shoes-category"]; 
        document.getElementById("modal-title").textContent = translations[currentLang]["modal-title"]; 
        
    }

    function navUpdate() {
        document.getElementById("title").textContent = translations[currentLang].title;
        document.getElementById("nav-shirts").textContent = translations[currentLang]["nav-shirts"];
        document.getElementById("nav-tshirts").textContent = translations[currentLang]["nav-tshirts"];
        document.getElementById("nav-jeans").textContent = translations[currentLang]["nav-jeans"];
        document.getElementById("nav-jackets").textContent = translations[currentLang]["nav-jackets"]; 
        document.getElementById("nav-shoes").textContent = translations[currentLang]["nav-shoes"]; 
        document.getElementById("login").textContent = translations[currentLang]["login"];
        document.getElementById("atencion").textContent = translations[currentLang]["atencion"];
        document.getElementById("devoluciones").textContent = translations[currentLang]["devoluciones"];
    }

    function footerUpdate() {
        document.getElementById("politica").textContent = translations[currentLang]["politica"];
        document.getElementById("terminos").textContent = translations[currentLang]["terminos"];
        document.getElementById("contacto").textContent = translations[currentLang]["contacto"];
        document.getElementById("about").textContent = translations[currentLang]["about"];
        document.getElementById("social").textContent = translations[currentLang]["social"];
        document.getElementById("recompensas").textContent = translations[currentLang]["recompensas"];
        document.getElementById("promociones").textContent = translations[currentLang]["promociones"];
        document.getElementById("tienda").textContent = translations[currentLang]["tienda"];
        document.getElementById("afiliados").textContent = translations[currentLang]["afiliados"]; 
        document.getElementById("envios").textContent = translations[currentLang]["envios"];
    }

    return {
        toggleLanguage: function () {
            currentLang = currentLang === "es" ? "en" : "es";
            updateLanguage();
        }
    };
})();
 
document.getElementById("lang-button").addEventListener("click", LanguageManager.toggleLanguage);


document.addEventListener("DOMContentLoaded", function () {
    const zapatosLink = document.getElementById("nav-shoes");
    const zapatosArticle = document.getElementById("zapatos");

    zapatosLink.addEventListener("click", function (event) {
        event.preventDefault();
        zapatosArticle.style.display = "block"; 
    });
});