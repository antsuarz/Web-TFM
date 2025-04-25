const MainLanguageManager = (() => {
    let currentLang = "es";

    const translations = {
        en: { 
            "start": "Start",
            "i1": "You are going to perform a series of tasks within an e-commerce website.",
            "i2": "Each clothing item displays a button that allows you to add it to your cart. The cart icon is located at the top right of the screen, and allows you to view everything you have added and complete the purchase.",
            "i3": "At the end of the test, you will be asked to complete a questionnaire about your experience.",
            "i4": "First, you should select the t-shirt with the lowest price.",
            "i5": "Next, you should select the jeans with the highest price.",
            "i6": "Finally, you should remove the t-shirt from the cart and complete the purchase.",
            
        },
        es: { 
           "start": "Comenzar",
            "i1": "Vas a realizar una serie de tareas dentro de una web de comercio electrónico.",
            "i2": "Cada prenda de ropa despliega un botón que te permite añadirla a tu carrito. El icono de carrito se encuentra en la parte superior derecha de la pantalla, y te permite visualizar todo lo que has añadido y finalizar la compra.",
            "i3": "Al finalizar la prueba se te pedirá que completes un cuestionario sobre tu experiencia.",
            "i4": "En primer lugar deberás seleccionar la camiseta de menor precio.",
            "i5": "Posteriormente, deberás seleccionar el pantalon de mayor precio.",
            "i6": "Por último, deberás eliminar la camiseta del carrito y finalizar la compra."
    
        }
    };

    function updateLanguage() {
        const paragraphs = document.querySelectorAll("#instructions p");

        paragraphs.forEach((p, index) => {
            const key = "i" + (index + 1);
            p.textContent = translations[currentLang][key]; 
        });
        document.getElementById("main-button").textContent = translations[currentLang]["start"];
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
