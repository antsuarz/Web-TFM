const NUMBER_OF_QUESTIONS=18;
const NUMBER_OF_RADIOS=5;

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
        "validation":"Please check the form, you did not answer all the questions, check question number ",
        "validation_year":"You have not entered your year of birth, or you have entered an invalid year.",
        "q1": "The information content helps in buying decisions by comparing the information about products or services.",
        "q2": "The information content provided by this website meets my needs.",
        "q3": "Contents and information support for reading and learning about buying process.",
        "q4": "This website provides adequate feedback to assess my progression when I perform a task.",
        "q5": "This website provides content tailored to the individual.",
        "q6": "In this website everything is consistent.",
        "q7": "Navigation aids serve as a logical road map for buying.",
        "q8": "Obviousness of buying button and links in this website.", 
        "q9": "It is easy to learn to use the website.",
        "q10": "This website supports reversibility of action.",
        "q11": "Overall I am satisfied with the interface of this website.",
        "q12": "My current experience with this website is satisfactory.",
        "q13": "Overall, I am satisfied with the amount of time it took to complete the tasks for buying products.",
        "q14": "Overall, I am satisfied with accuracy of this website related to the buying process.",
        "q15": "I trust the information presented on this website.",
        "q16": "I find this website credible.",
        "q17": "I would visit this website again.",
        "q18": "I would recommend this website to my friend."
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
        "validation":"Por favor, verifique el formulario, no ha respondido a todas las preguntas. Revise la pregunta número ",
        "validation_year":"No ha introducido su año de nacimiento, o ha introducido un año inválido.",
        "q1": "El contenido informativo ayuda en las decisiones de compra comparando productos o servicios.",
        "q2": "El contenido proporcionado en este sitio web satisface mis necesidades.",
        "q3": "Este sitio proveé al usuario con recursos informativos sobre el proceso de compra.",
        "q4": "Este sitio web proporciona retroalimentación adecuada para evaluar mi progreso.", 
        "q5": "Este sitio adapta su contenido según el perfil del usuario.",
        "q6": "En este sitio web todo el contenido es consistente.",
        "q7": "Las ayudas de navegación sirven como un mapa lógico para la compra.",
        "q8": "Es fácil identificar el botón de compra y los enlaces en este sitio web.", 
        "q9": "Es fácil aprender a usar el sitio web.",
        "q10": "Este sitio web permite deshacer acciones.",
        "q11": "En general, estoy satisfecho con la interfaz de este sitio web.",
        "q12": "Mi experiencia con este sitio web ha sido satisfactoria.",
        "q13": "En general, estoy satisfecho con la cantidad de tiempo que me tomó completar las tareas para comprar productos.",
        "q14": "En general, estoy satisfecho con la claridad del sitio en lo que respecta al proceso de compra.",
        "q15": "Confío en la información presentada en este sitio web.",
        "q16": "Este sitio web me da confianza.",
        "q17": "Visitaría de nuevo este sitio web.",
        "q18": "Recomendaría este sitio web a un amigo."
    }
}
window.onload = function () {

    const form = document.querySelector('form'); 
    const genderLabel = document.createElement('label');
    genderLabel.setAttribute('for', 'gender');
    genderLabel.textContent = translations[currentLang].gender;
    form.appendChild(genderLabel);

    createGenderInput();
    createBirthDateInput();
    createQuestions();
    createSubmitButton();
    

    /**
     * Función para crear las preguntas del formulario y sus radio buttons.
     * El número de preguntas y opciones se define en las constantes NUMBER_OF_QUESTIONS y NUMBER_OF_RADIOS.
     */
    function createQuestions() {
        for (let i = 1; i <= NUMBER_OF_QUESTIONS; i++) {
            const label = document.createElement('label');
            label.setAttribute('for', 'pregunta' + i);
            label.setAttribute('id', 'q' + i);
            label.textContent = i+") "+ translations[currentLang]["q" + i];
            form.appendChild(label);

            const div = document.createElement('div');
            for (let j = 0; j <= NUMBER_OF_RADIOS; j++) {
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = 'pregunta' + i;
                input.value = j;
                div.appendChild(input);
                div.appendChild(document.createTextNode(j));
            }
            form.appendChild(div);
        }
    }

    /**
     * Función para crear el campo del formulario en el que introducir el género.
     */
    function createGenderInput() {
        const genderSelect = document.createElement('select');
        genderSelect.id = 'gender';
        genderSelect.name = 'gender';
        genderSelect.required = true; 

        const genderOptions = [
            { value: '', text: translations[currentLang].gender },
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
    }

    /**
     * Función para crear el campo del formulario en el que introducir la fecha de nacimiento
     */
    function createBirthDateInput() {
        const yearLabel = document.createElement('label');
        yearLabel.setAttribute('for', 'year');
        yearLabel.textContent = translations[currentLang].year;
        yearLabel.required = true; 
        form.appendChild(yearLabel);

        const yearInput = document.createElement('input');
        yearInput.type = 'number';
        yearInput.id = 'year';
        yearInput.name = 'year';
        yearInput.min = 1900;
        yearInput.max = new Date().getFullYear();
        yearInput.placeholder = translations[currentLang].yearExample;
        yearInput.oninput = function () {
            if (this.value.length > 4) {
                this.value = this.value.slice(0, 4);
            }
        };
        form.appendChild(yearInput);
    }

    /**
     * Función para crear el botón de envío del formulario
     * Este botón verifica si todas las preguntas han sido respondidas antes de permitir la descarga del CSV.
     */
    function createSubmitButton() {
        const button = document.createElement('button');
        button.type = 'button';
        button.id = 'submit-button';
        button.textContent = translations[currentLang].submit;
        button.onclick = function () {
            if (checkFormCompleted()) {
                downloadCSV();
            }
        };
        form.appendChild(button);
    }

};

/**
 * Función para comprobar si el formulario está completo.
 * Recorre todas las preguntas y verifica si se ha respondido a cada una de ellas.
 * Si alguna pregunta no ha sido respondida, muestra una alerta.
 * @returns {boolean} - true si todas las preguntas han sido respondidas, false en caso contrario.
 */
function checkFormCompleted() {
    const year = document.getElementById("year").value; 
    if (year === "" || year < 1900 || year > new Date().getFullYear()) {
        alert(translations[currentLang].validation_year);
        return false;
    } 
    else {
        for (let i = 1; i <= NUMBER_OF_QUESTIONS; i++) { 
            const inputs = document.getElementsByName('pregunta' + i);
            const answered = Array.from(inputs).some(input => input.checked);
            if (!answered) {
                alert(translations[currentLang].validation + i); 
                return false;
            }
        }
    }
    
    return true;
}
 
/**
 * Función para descargar el formulario en formato CSV.
 */
function downloadCSV() {
    const recordingId = sessionStorage.getItem("recordingId"); 
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
    a.download = `${recordingId}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const FormLanguageManager = (() => { 

     /**
     * Función para actualizar el idioma del formulario.
     * Cambia el texto de las preguntas y los botones según el idioma seleccionado.
     */
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