const MainLanguageManager = (() => {
    let currentLang = "es";

    const translations = {
        en: { 
            "start": "Start",
            "instructions": "Instructions",
            "i1": "Select the cheapest t-shirt.",
            "i2": "Select the most expensive shoes.",
            "i3": "Remove the t-shirt from the cart and complete the purchase."
            
        },
        es: { 
           "start": "Entendido",
           "instructions": "Instrucciones",
            "i1": "Selecciona la camiseta de menor precio.",
            "i2": "Selecciona los zapatos de mayor precio.",
            "i3": "Elimina la camiseta del carrito y finalizar la compra."
    
        }
    };

    function updateLanguage() {
        const paragraphs = document.querySelectorAll("#instructions p");

        paragraphs.forEach((p, index) => {
            const key = "i" + (index + 1);
            p.textContent = (index+1) +". "+ translations[currentLang][key]; 
        });
        document.getElementById("main-button").textContent = translations[currentLang]["start"];
        document.getElementById("title-header").textContent = translations[currentLang]["instructions"];
        document.getElementById("lang-button").textContent = currentLang === "en" ? "ES" : "EN"; 
        
    }


    return {
        toggleLanguage: function () {
            currentLang = currentLang === "es" ? "en" : "es";
            updateLanguage();
        }
    };
})();
 
document.getElementById("lang-button").addEventListener("click", MainLanguageManager.toggleLanguage);
