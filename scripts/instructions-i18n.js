const MainLanguageManager = (() => {
    let currentLang = "en";

    const translations = {
        en: { 
            "start": "Start",
            "i1": "Instruction 1",
            "i2": "Instruction 2",
            "i3": "Instruction 3",
            "i4": "Instruction 4",
            "i5": "Instruction 5",
            "i6": "Instruction 6",
            "i7": "Instruction 7",
            "i8": "Instruction 8"
        },
        es: { 
           "start": "Comenzar",
            "i1": "Instrucción 1",
            "i2": "Instrucción 2",
            "i3": "Instrucción 3",
            "i4": "Instrucción 4",
            "i5": "Instrucción 5",
            "i6": "Instrucción 6",
            "i7": "Instrucción 7",
            "i8": "Instrucción 8"
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
