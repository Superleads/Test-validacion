// Base de datos de preguntas del test
const quizData = [
    {
        question: "¿Cuál es el propósito principal de un test de validación de aprendizaje?",
        options: [
            "Evaluar la efectividad de un programa educativo",
            "Medir el tiempo de estudio de los estudiantes",
            "Calcular el presupuesto necesario para capacitaciones",
            "Determinar el número de instructores necesarios"
        ],
        correct: 0,
        hint: "Piensa en cómo medimos si los estudiantes realmente aprendieron.",
        rationale: "El propósito principal es evaluar si el programa educativo logró sus objetivos de aprendizaje y si los participantes adquirieron los conocimientos y habilidades esperadas."
    },
    {
        question: "¿Qué métrica es más importante para validar el aprendizaje?",
        options: [
            "Número de asistentes a la capacitación",
            "Porcentaje de aprobación en evaluaciones post-capacitación",
            "Duración total del programa",
            "Costo por participante"
        ],
        correct: 1,
        hint: "Considera qué nos dice realmente si alguien aprendió.",
        rationale: "El porcentaje de aprobación en evaluaciones post-capacitación es crucial porque indica directamente cuántos participantes demostraron comprensión y retención del material."
    },
    {
        question: "¿Cuándo debería realizarse una evaluación de validación de aprendizaje?",
        options: [
            "Solo al inicio del programa",
            "Únicamente durante el programa",
            "Al inicio, durante y después del programa",
            "Solo cuando los estudiantes lo soliciten"
        ],
        correct: 2,
        hint: "Piensa en un enfoque completo de evaluación.",
        rationale: "Las evaluaciones deben realizarse en múltiples momentos: pre-evaluación para establecer una línea base, evaluaciones formativas durante el programa, y evaluación sumativa al final."
    },
    {
        question: "¿Qué tipo de preguntas son más efectivas para validar el aprendizaje?",
        options: [
            "Preguntas de sí/no únicamente",
            "Preguntas de opción múltiple con distractores plausibles",
            "Preguntas abiertas sin criterios de evaluación",
            "Preguntas que solo requieren memorización"
        ],
        correct: 1,
        hint: "Considera preguntas que prueben comprensión real, no solo memorización.",
        rationale: "Las preguntas de opción múltiple con distractores plausibles son efectivas porque pueden evaluar diferentes niveles de comprensión y discriminar entre quienes realmente entendieron y quienes no."
    },
    {
        question: "¿Cuál es una buena tasa de aprobación para considerar exitosa una capacitación?",
        options: [
            "30-40%",
            "50-60%",
            "70-80%",
            "95-100%"
        ],
        correct: 2,
        hint: "Piensa en un balance entre desafío y éxito.",
        rationale: "Una tasa de aprobación del 70-80% generalmente indica que el programa es efectivo mientras mantiene un estándar adecuado de dificultad."
    },
    {
        question: "¿Qué debería incluir un reporte de validación de aprendizaje?",
        options: [
            "Solo las calificaciones finales",
            "Estadísticas de participación y resultados de evaluaciones",
            "Opiniones personales del instructor",
            "Lista de materiales utilizados"
        ],
        correct: 1,
        hint: "Considera datos objetivos y medibles.",
        rationale: "Un buen reporte debe incluir estadísticas de participación, resultados de evaluaciones (pre y post), análisis de mejora, y recomendaciones para futuras capacitaciones."
    },
    {
        question: "¿Cómo se mide el 'aprendizaje retenido' a largo plazo?",
        options: [
            "Encuestas de satisfacción inmediatas",
            "Evaluaciones de seguimiento semanas o meses después",
            "Contando las hojas de asistencia",
            "Midiendo el tiempo total de instrucción"
        ],
        correct: 1,
        hint: "Piensa en evaluar el conocimiento después de un tiempo.",
        rationale: "Las evaluaciones de seguimiento (follow-up) semanas o meses después de la capacitación miden cuánto conocimiento se retuvo realmente y si se está aplicando en el trabajo."
    },
    {
        question: "¿Qué indica una gran diferencia entre evaluaciones pre y post-capacitación?",
        options: [
            "Que la evaluación pre fue muy difícil",
            "Que el programa fue efectivo en enseñar nuevos conceptos",
            "Que los estudiantes no estudiaron lo suficiente",
            "Que el instructor no fue claro"
        ],
        correct: 1,
        hint: "Considera qué representa una mejora significativa.",
        rationale: "Una gran diferencia positiva entre evaluaciones pre y post indica que el programa fue efectivo en transmitir nuevos conocimientos y habilidades a los participantes."
    },
    {
        question: "¿Cuál es el propósito de incluir una evaluación 'pre' antes de la capacitación?",
        options: [
            "Para desalentar a los participantes",
            "Para establecer una línea base del conocimiento previo",
            "Para ahorrar tiempo durante la capacitación",
            "Para cumplir con requisitos administrativos"
        ],
        correct: 1,
        hint: "Piensa en tener un punto de referencia.",
        rationale: "La evaluación pre establece una línea base del conocimiento previo, permitiendo medir cuánto aprendieron realmente los participantes durante la capacitación."
    },
    {
        question: "¿Qué debería hacerse si los resultados de validación son bajos?",
        options: [
            "Ignorar los resultados y continuar igual",
            "Revisar y mejorar el contenido y metodología del programa",
            "Bajar los estándares de aprobación",
            "Culpar a los participantes por no esforzarse"
        ],
        correct: 1,
        hint: "Considera un enfoque de mejora continua.",
        rationale: "Resultados bajos indican que el programa necesita ser revisado y mejorado. Esto puede incluir ajustar el contenido, cambiar la metodología de enseñanza, o proporcionar apoyo adicional."
    }
];

// Variables globales
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let userName = '';
let userInstitution = '';
// URL del Web App de Google Apps Script
// PASOS PARA CONFIGURAR:
// 1. Ve a https://script.google.com y crea un nuevo proyecto
// 2. Pega el código de google-apps-script.gs que te di
// 3. Despliega como Web App (Deploy → New deployment → Type: Web App)
// 4. Copia la URL que termina en /exec y pégala aquí
// Deployment ID actual: AKfycbyYBs3-sKDR_e958HdCMm2u6ErzjswsRuMvK12HS4qmIL0QUI_e2RAz_p5jsoHYOSew
const SHEETS_WEB_APP_URL = 'https://script.google.com/a/macros/superleads.mx/s/AKfycbyYBs3-sKDR_e958HdCMm2u6ErzjswsRuMvK12HS4qmIL0QUI_e2RAz_p5jsoHYOSew/exec';

// Referencias a elementos del DOM
const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const endScreen = document.getElementById('end-screen');
const userNameInput = document.getElementById('user-name');
const userInstitutionInput = document.getElementById('user-institution');
const startBtn = document.getElementById('start-btn-welcome');
const errorContainer = document.getElementById('error-container');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const hintBtn = document.getElementById('hint-btn');
const hintText = document.getElementById('hint-text');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const finalUserName = document.getElementById('final-user-name');
const finalScore = document.getElementById('final-score');
const resultsSummary = document.getElementById('results-summary');
const restartBtn = document.getElementById('restart-btn');

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
hintBtn.addEventListener('click', showHint);

// Función para iniciar el quiz
function startQuiz() {
    userName = userNameInput.value.trim();
    userInstitution = userInstitutionInput.value.trim();
    
    // Validar entrada
    if (!userName || !userInstitution) {
        showError('Por favor, completa todos los campos.');
        return;
    }
    
    // Validar longitud mínima
    if (userName.length < 3 || userInstitution.length < 3) {
        showError('Por favor, ingresa al menos 3 caracteres en cada campo.');
        return;
    }
    
    // Ocultar pantalla de bienvenida y mostrar preguntas
    welcomeScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    
    // Inicializar quiz
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    // Mostrar primera pregunta
    showQuestion();
}

// Función para mostrar error
function showError(message) {
    errorContainer.textContent = message;
    errorContainer.classList.remove('hidden');
    
    // Ocultar error después de 5 segundos
    setTimeout(() => {
        errorContainer.classList.add('hidden');
    }, 5000);
}

// Función para mostrar pregunta actual
function showQuestion() {
    const question = quizData[currentQuestion];
    
    // Actualizar contador de preguntas
    questionCounter.textContent = `Pregunta ${currentQuestion + 1} de ${quizData.length}`;
    
    // Actualizar barra de progreso
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Mostrar texto de la pregunta
    questionText.textContent = question.question;
    
    // Limpiar opciones anteriores
    answerOptions.innerHTML = '';
    
    // Crear botones de opciones
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button w-full p-4 text-left border-2 rounded-lg hover:bg-gray-50 transition-colors';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        answerOptions.appendChild(button);
    });
    
    // Ocultar retroalimentación y botón siguiente
    feedbackContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    
    // Restablecer pista
    hintText.classList.add('hidden');
    hintBtn.textContent = 'Mostrar Pista';
    hintBtn.disabled = false;
}

// Función para seleccionar respuesta
function selectAnswer(selectedIndex) {
    const question = quizData[currentQuestion];
    const buttons = answerOptions.querySelectorAll('button');
    
    // Deshabilitar todos los botones
    buttons.forEach(button => button.disabled = true);
    
    // Marcar respuesta seleccionada
    buttons[selectedIndex].classList.add('border-2', 'border-blue-500', 'bg-blue-50');
    
    // Verificar si la respuesta es correcta
    const isCorrect = selectedIndex === question.correct;
    
    // Guardar respuesta del usuario
    userAnswers.push({
        question: question.question,
        selectedAnswer: question.options[selectedIndex],
        correctAnswer: question.options[question.correct],
        isCorrect: isCorrect,
        rationale: question.rationale
    });
    
    if (isCorrect) {
        score++;
        buttons[selectedIndex].classList.add('correct-border', 'correct-bg');
        feedbackContainer.className = 'correct-bg p-4 rounded-lg';
        feedbackText.className = 'text-sm font-medium rationale-correct-text';
        feedbackText.textContent = '¡Correcto! ' + question.rationale;
    } else {
        buttons[selectedIndex].classList.add('incorrect-border', 'incorrect-bg');
        buttons[question.correct].classList.add('correct-border', 'correct-bg');
        feedbackContainer.className = 'incorrect-bg p-4 rounded-lg';
        feedbackText.className = 'text-sm font-medium rationale-incorrect-text';
        feedbackText.textContent = 'Incorrecto. ' + question.rationale;
    }
    
    // Mostrar retroalimentación y botón siguiente
    feedbackContainer.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    
    // Deshabilitar botón de pista
    hintBtn.disabled = true;
}

// Función para mostrar pista
function showHint() {
    const question = quizData[currentQuestion];
    hintText.textContent = question.hint;
    hintText.classList.remove('hidden');
    hintBtn.textContent = 'Pista mostrada';
    hintBtn.disabled = true;
}

// Función para siguiente pregunta
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Función para mostrar resultados
function showResults() {
    console.log('showResults called - userName:', userName, 'score:', score, 'total:', quizData.length);
    
    try {
        // Ocultar pantalla de preguntas y mostrar resultados
        questionScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');
        
        // Mostrar información del usuario y puntuación
        if (finalUserName) {
            finalUserName.textContent = userName;
        }
        if (finalScore) {
            finalScore.textContent = `${score} de ${quizData.length} (${Math.round((score / quizData.length) * 100)}%)`;
        }
        
        // Mostrar resumen de respuestas
        if (resultsSummary) {
            resultsSummary.innerHTML = '';
            userAnswers.forEach((answer, index) => {
                const resultDiv = document.createElement('div');
                resultDiv.className = `p-3 rounded-lg mb-2 ${answer.isCorrect ? 'correct-bg' : 'incorrect-bg'}`;
                resultDiv.innerHTML = `
                    <p class="font-medium mb-1">Pregunta ${index + 1}: ${answer.isCorrect ? '✓' : '✗'}</p>
                    <p class="text-sm text-gray-600 mb-1">${answer.question}</p>
                    <p class="text-sm">Tu respuesta: ${answer.selectedAnswer}</p>
                    ${!answer.isCorrect ? `<p class="text-sm font-medium">Respuesta correcta: ${answer.correctAnswer}</p>` : ''}
                `;
                resultsSummary.appendChild(resultDiv);
            });
        }
        
        console.log('showResults completed successfully');

        // Enviar resultados a Google Sheets
        const percent = Math.round((score / quizData.length) * 100);
        // Alinear nombres de campos con Apps Script
        sendResultToSheet({
            nombre: userName,
            institucion: userInstitution,
            puntaje: score,
            porcentaje: percent,
            total: quizData.length,
            respuestas: JSON.stringify(userAnswers),
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error in showResults:', error);
    }
}

// Enviar datos al Web App de Google Apps Script
async function sendResultToSheet(payload) {
    try {
        if (!SHEETS_WEB_APP_URL) {
            console.warn('SHEETS_WEB_APP_URL no está configurado. Pega aquí tu URL de Google Apps Script.');
            return;
        }
        // Intento normal con CORS
        const res = await fetch(SHEETS_WEB_APP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            credentials: 'omit'
        });
        if (res.ok) {
            console.log('Datos enviados a Sheets. Status:', res.status);
        } else {
            console.warn('Respuesta no OK al enviar datos. Status:', res.status, 'Type:', res.type);
        }
    } catch (err) {
        console.warn('Fallo envío con CORS, reintentando con no-cors...', err);
        // Fallback sin CORS (no permite leer respuesta, pero envía la petición)
        try {
            await fetch(SHEETS_WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                credentials: 'omit'
            });
            console.log('Datos enviados a Sheets en modo no-cors (respuesta opaca).');
        } catch (err2) {
            console.error('Error enviando datos a Sheets incluso con no-cors:', err2);
        }
    }
}

// Función para reiniciar el quiz
function restartQuiz() {
    console.log('restartQuiz called');
    
    try {
        // Ocultar pantalla de resultados y mostrar bienvenida
        endScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        
        // Limpiar formulario
        if (userNameInput) userNameInput.value = '';
        if (userInstitutionInput) userInstitutionInput.value = '';
        
        // Limpiar variables
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        userName = '';
        userInstitution = '';
        
        // Ocultar error si existe
        if (errorContainer) errorContainer.classList.add('hidden');
        
        console.log('restartQuiz completed successfully');
    } catch (error) {
        console.error('Error in restartQuiz:', error);
    }
}

// Validación en tiempo real de los campos de entrada
userNameInput.addEventListener('input', function() {
    if (this.value.length > 50) {
        this.value = this.value.substring(0, 50);
    }
});

userInstitutionInput.addEventListener('input', function() {
    if (this.value.length > 100) {
        this.value = this.value.substring(0, 100);
    }
});

// Permitir iniciar con Enter
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !welcomeScreen.classList.contains('hidden')) {
        if (document.activeElement === userNameInput || document.activeElement === userInstitutionInput) {
            startQuiz();
        }
    }
});
