const translations = {
    en: {
        "submit": "Submit",
        "q1": "It is easy to read the text on this website with the used font type and size.",
        "q2": "The font color is appealing on this website.",
        "q3": "The text alignment and spacing on this website make the text easy to read.",
        "q4": "The color scheme of this website is appealing.",
        "q5": "The use of color or graphics enhances navigation.",
        "q6": "The information content helps in buying decisions by comparing the information about products or services.",
        "q7": "The information content provided by this website meets my needs.",
        "q8": "Contents and information support for reading and learning about buying process.",
        "q9": "This website provides adequate feedback to assess my progression when I perform a task.",
        "q10": "This website offers customization.",
        "q11": "This website offers versatility of ordering process.",
        "q12": "This website provides content tailored to the individual.",
        "q13": "In this website everything is consistent.",
        "q14": "Navigation aids serve as a logical road map for buying.",
        "q15": "Obviousness of buying button and links in this website.",
        "q16": "It is easy to personalize or to narrow buying process.",
        "q17": "It is easy to learn to use the website.",
        "q18": "This website supports reversibility of action.",
        "q19": "Overall I am satisfied with the interface of this website.",
        "q20": "My current experience with this website is satisfactory.",
        "q21": "Overall, I am satisfied with the amount of time it took to complete the tasks for buying products.",
        "q22": "Overall, I am satisfied with accuracy for this website related to the buying process.",
        "q23": "I trust the information presented on this website.",
        "q24": "This website is credible for me.",
        "q25": "I would visit this website again.",
        "q26": "I would recommend this website to my friend."
    },
    es: {
        "submit": "Enviar",
        "q1": "Es fácil leer el texto en este sitio web con el tipo y tamaño de fuente utilizados.",
        "q2": "El color de la fuente es atractivo en este sitio web.",
        "q3": "La alineación y el espaciado del texto hacen que sea fácil de leer.",
        "q4": "La combinación de colores de este sitio web es atractiva.",
        "q5": "El uso de colores o gráficos mejora la navegación.",
        "q6": "El contenido informativo ayuda en las decisiones de compra comparando productos o servicios.",
        "q7": "El contenido proporcionado en este sitio web satisface mis necesidades.",
        "q8": "Los contenidos y la información ayudan a leer y aprender sobre el proceso de compra.",
        "q9": "Este sitio web proporciona retroalimentación adecuada para evaluar mi progreso.",
        "q10": "Este sitio web ofrece personalización.",
        "q11": "Este sitio web ofrece versatilidad en el proceso de compra.",
        "q12": "Este sitio web proporciona contenido personalizado.",
        "q13": "En este sitio web todo es consistente.",
        "q14": "Las ayudas de navegación sirven como un mapa lógico para la compra.",
        "q15": "Claridad en los botones de compra y enlaces en este sitio web.",
        "q16": "Es fácil personalizar o estrechar el proceso de compra.",
        "q17": "Es fácil aprender a usar el sitio web.",
        "q18": "Este sitio web soporta la reversibilidad de acciones.",
        "q19": "En general, estoy satisfecho con la interfaz de este sitio web.",
        "q20": "Mi experiencia actual con este sitio web es satisfactoria.",
        "q21": "En general, estoy satisfecho con la cantidad de tiempo que me tomó completar las tareas para comprar productos.",
        "q22": "En general, estoy satisfecho con la precisión de este sitio web relacionado con el proceso de compra.",
        "q23": "Confío en la información presentada en este sitio web.",
        "q24": "Este sitio web es creíble para mí.",
        "q25": "Visitaría nuevamente este sitio web.",
        "q26": "Recomendaría este sitio web a un amigo."
    }
}
window.onload = function () {

    const form = document.querySelector('form');

    for (let i = 0; i < 26; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', 'pregunta' + (i + 1));
        label.setAttribute('id', 'q' + (i + 1));
        label.textContent = translations["en"]["q" + (i + 1)];
        form.appendChild(label);

        const div = document.createElement('div');
        for (let j = 0; j <= 10; j++) {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'pregunta' + (i + 1);
            input.value = j;
            div.appendChild(input);
            div.appendChild(document.createTextNode(j));
        }
        form.appendChild(div);
    }
    const button = document.createElement('button');
    button.type = 'submit';
    button.id = 'submit-button';
    button.textContent = 'Submit';
    form.appendChild(button);
};




const FormLanguageManager = (() => {
    let currentLang = "en";


    function updateLanguage() {
        for (let i = 1; i <= 26; i++) {
            const questionElement = document.getElementById("q" + i);
            if (questionElement) {
                questionElement.textContent = translations[currentLang]["q" + i];
            }
        }
        document.getElementById("submit-button").textContent = translations[currentLang].submit;
        document.getElementById("lang-button").textContent = currentLang === "en" ? "ES" : "EN";
    }

    return {
        toggleLanguage: function () {
            currentLang = currentLang === "es" ? "en" : "es";
            updateLanguage();
        }
    };
})();

document.getElementById("lang-button").addEventListener("click", FormLanguageManager.toggleLanguage);