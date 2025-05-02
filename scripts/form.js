const NUMBER_OF_QUESTIONS=19;

let currentLang = "es";
const translations = {
    en: {
        "submit": "Submit",
        "end":"Restart session",
        "gender":"Gender",
        "year":"Year of birth",
        "male":"Male",
        "female":"Female",
        "other":"Other",
        "yearExample":"Example: 1990",
        "validation":"Please check the form, you did not answer all the questions",
        "q1": "The information content helps in buying decisions by comparing the information about products or services.",
        "q2": "The information content provided by this website meets my needs.",
        "q3": "Contents and information support for reading and learning about buying process.",
        "q4": "This website provides adequate feedback to assess my progression when I perform a task.",
        "q5": "This website offers versatility of ordering process.",
        "q6": "This website provides content tailored to the individual.",
        "q7": "In this website everything is consistent.",
        "q8": "Navigation aids serve as a logical road map for buying.",
        "q9": "Obviousness of buying button and links in this website.", 
        "q10": "It is easy to learn to use the website.",
        "q11": "This website supports reversibility of action.",
        "q12": "Overall I am satisfied with the interface of this website.",
        "q13": "My current experience with this website is satisfactory.",
        "q14": "Overall, I am satisfied with the amount of time it took to complete the tasks for buying products.",
        "q15": "Overall, I am satisfied with accuracy of this website related to the buying process.",
        "q16": "I trust the information presented on this website.",
        "q17": "I find this website credible.",
        "q18": "I would visit this website again.",
        "q19": "I would recommend this website to my friend."
    },
    es: {
        "submit": "Enviar",
        "end":"Comenzar de nuevo",
        "gender":"Genero",
        "year":"Año de nacimiento",
        "male":"Masculino",
        "female":"Femenino",
        "other":"Other",
        "yearExample":"Ejemplo: 1990",
        "validation":"Por favor, verifique el formulario, no ha respondido a todas las preguntas",
        "q1": "El contenido informativo ayuda en las decisiones de compra comparando productos o servicios.",
        "q2": "El contenido proporcionado en este sitio web satisface mis necesidades.",
        "q3": "Este sitio proveé al usuario con recursos informativos sobre el proceso de compra.",
        "q4": "Este sitio web proporciona retroalimentación adecuada para evaluar mi progreso.",
        "q5": "Este sitio web ofrece versatilidad en el proceso de compra.",
        "q6": "Este sitio adapta su contenido según el perfil del usuario.",
        "q7": "En este sitio web todo el contenido es consistente.",
        "q8": "Las ayudas de navegación sirven como un mapa lógico para la compra.",
        "q9": "Es fácil identificar el botón de compra y los enlaces en este sitio web.", 
        "q10": "Es fácil aprender a usar el sitio web.",
        "q11": "Este sitio web permite deshacer acciones.",
        "q12": "En general, estoy satisfecho con la interfaz de este sitio web.",
        "q13": "Mi experiencia con este sitio web ha sido satisfactoria.",
        "q14": "En general, estoy satisfecho con la cantidad de tiempo que me tomó completar las tareas para comprar productos.",
        "q15": "En general, estoy satisfecho con la claridad del sitio en lo que respecta al proceso de compra.",
        "q16": "Confío en la información presentada en este sitio web.",
        "q17": "Este sitio web me da confianza.",
        "q18": "Visitaría de nuevo este sitio web.",
        "q19": "Recomendaría este sitio web a un amigo."
    }
}
window.onload = function () {

    const form = document.querySelector('form'); 

    const genderLabel = document.createElement('label');
    genderLabel.setAttribute('for', 'gender');
    genderLabel.textContent = translations[currentLang].gender;
    form.appendChild(genderLabel);

    const genderSelect = document.createElement('select');
    genderSelect.id = 'gender';
    genderSelect.name = 'gender';

    const genderOptions = [
        { value: '', text:translations[currentLang].gender },
        { value: 'male', text: translations[currentLang].male },
        { value: 'female', text: translations[currentLang].female },
        { value: 'other', text: translations[currentLang].other }
    ];

    genderOptions.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        genderSelect.appendChild(option);
    });

    form.appendChild(genderSelect);

    const yearLabel = document.createElement('label');
    yearLabel.setAttribute('for', 'year');
    yearLabel.textContent = translations[currentLang].year;
    form.appendChild(yearLabel);

    const yearInput = document.createElement('input');
    yearInput.type = 'number';
    yearInput.id = 'year';
    yearInput.name = 'year';
    yearInput.min = 1900;
    yearInput.max = new Date().getFullYear();
    yearInput.placeholder =  translations[currentLang].yearExample;
    form.appendChild(yearInput);

    for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', 'pregunta' + (i + 1));
        label.setAttribute('id', 'q' + (i + 1));
        label.textContent = translations[currentLang]["q" + (i + 1)];
        form.appendChild(label);

        const div = document.createElement('div');
        for (let j = 0; j <= 5; j++) {
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
    button.type = 'button';
    button.id = 'submit-button';
    button.textContent = translations[currentLang].submit;
    button.onclick = function(event) {
        if (checkFormCompleted()) { 
            downloadCSV();
        } else {
            alert(translations[currentLang].validation);
        }
    };
    form.appendChild(button);
};

function checkFormCompleted() {
    for (let i = 1; i <= NUMBER_OF_QUESTIONS; i++) {
        const inputs = document.getElementsByName('pregunta' + i);
        let answered = false;
        for (let input of inputs) {
            if (input.checked) {
                answered = true;
                break;
            }
        }
        if (!answered) {
            return false; 
        }
    }
    return true; 
}
 
function downloadCSV() {
    const formData = [];
    const year = document.getElementById("year").value;
    formData.push(`birth,${year}`);

    const genderSelect = document.getElementById("gender");
    const gender = genderSelect.value;
    formData.push(`gender,${gender}`);

    for (let i = 1; i <= NUMBER_OF_QUESTIONS; i++) {
        const inputs = document.getElementsByName('pregunta' + i);
        let answer = '';

        for (let input of inputs) {
            if (input.checked) {
                answer = input.value;
                break;
            }
        }

        formData.push(`q${i},${answer}`);  
    }

    const csvContent = "data:text/csv;charset=utf-8," + formData.join("\n");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); 
    const a = document.createElement("a");
    a.href = encodeURI(csvContent);
    a.download = `respuestas_formulario_${timestamp}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const FormLanguageManager = (() => { 

    function updateLanguage() {
        for (let i = 1; i <= 26; i++) {
            const questionElement = document.getElementById("q" + i);
            if (questionElement) {
                questionElement.textContent = translations[currentLang]["q" + i];
            }
        }
        document.getElementById("submit-button").textContent = translations[currentLang].submit;
        document.getElementById("lang-button").textContent = currentLang === "en" ? "ES" : "EN";
        document.getElementById("restart-button").textContent = translations[currentLang].end;
    
        const genderLabel = document.querySelector('label[for="gender"]');
        if (genderLabel) {
            genderLabel.textContent = translations[currentLang].gender;
        }

        const genderSelect = document.getElementById("gender");
        if (genderSelect) {
            const genderOptions = [
                { value: '', text: translations[currentLang].gender },
                { value: 'male', text: translations[currentLang].male },
                { value: 'female', text: translations[currentLang].female },
                { value: 'other', text: translations[currentLang].other }
            ];
            
            genderSelect.innerHTML = '';
 
            genderOptions.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                genderSelect.appendChild(option);
            });
        }
 
        const yearLabel = document.querySelector('label[for="year"]');
        if (yearLabel) {
            yearLabel.textContent = translations[currentLang].year;
        }
        document.getElementById("year").placeholder = translations[currentLang].yearExample;
    }

    return {
        toggleLanguage: function () {
            currentLang = currentLang === "es" ? "en" : "es";
            updateLanguage();
        }
    };
})();

document.getElementById("lang-button").addEventListener("click", FormLanguageManager.toggleLanguage);