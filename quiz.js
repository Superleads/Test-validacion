// Base de datos de preguntas del test
const quizData = [
    {
        question: "¿Cuál es uno de los 4 pasos obligatorios que cada asesor debe completar en Configuración > Mi Perfil para que la plataforma funcione correctamente?",
        options: [
            "Crear una firma de correo electrónico.",
            "Subir una foto de perfil y cambiar el idioma a Español.",
            "Conectar su calendario personal (Google/Outlook) y definir su Disponibilidad (horarios).",
            "Conectar sus redes sociales personales."
        ],
        correct: 2,
        hint: "Busca lo necesario en Configuración > Mi Perfil.",
        rationale: "Para que el agendamiento funcione, debes conectar tu calendario y definir tu disponibilidad."
    },
    {
        question: "¿Cuál es la diferencia clave entre un Contacto y una Oportunidad?",
        options: [
            "El Contacto es el lead y la Oportunidad es la empresa para la que trabaja.",
            "El Contacto es la persona (ficha de datos) y la Oportunidad es la negociación (la tarjeta en el embudo).",
            "El Contacto es un lead frío y la Oportunidad es un lead caliente.",
            "No hay diferencia, son lo mismo."
        ],
        correct: 1,
        hint: "Piensa en ficha de persona vs tarjeta en el pipeline.",
        rationale: "El Contacto representa la persona; la Oportunidad representa la negociación asociada en el embudo."
    },
    {
        question: "Si un mismo Contacto está interesado en dos productos diferentes (ej. un curso y un diplomado), ¿cuál es el procedimiento correcto?",
        options: [
            "Crear dos Contactos separados para evitar confusiones.",
            "Mantener 1 Contacto, pero crear 2 Oportunidades separadas, una para cada producto.",
            "Mantener 1 Contacto y 1 Oportunidad, y gestionar ambos intereses en las Notas.",
            "Asignar el Contacto a dos asesores diferentes."
        ],
        correct: 1,
        hint: "Un Contacto puede tener varias Oportunidades.",
        rationale: "Se usa un solo Contacto por persona y una Oportunidad por cada negociación/producto."
    },
    {
        question: "¿Cuál es la diferencia entre ser Propietario (Owner) de un contacto y ser Seguidor (Follower)?",
        options: [
            "El Propietario puede editar, el Seguidor solo puede ver.",
            "El Propietario es el dueño y responsable principal; el Seguidor es un colaborador que puede ver y comentar.",
            "El Propietario recibe comisiones, el Seguidor no.",
            "El Propietario es el asesor de ventas, el Seguidor es el gerente."
        ],
        correct: 1,
        hint: "Owner = responsabilidad; Follower = colaboración.",
        rationale: "El Owner es responsable principal del contacto; los Followers colaboran con visibilidad y comentarios."
    },
    {
        question: "¿Para qué sirve sincronizar tu calendario de Google/Outlook con Super Leads?",
        options: [
            "Para que el sistema pueda enviar correos masivos desde tu cuenta.",
            "Para que el sistema sepa cuándo estás ocupado y solo ofrezca citas en tus horarios libres.",
            "Para importar automáticamente todos tus contactos de Google/Outlook.",
            "Para que puedas ver los calendarios de tus compañeros."
        ],
        correct: 1,
        hint: "Disponibilidad y ocupación son clave para citas.",
        rationale: "La sincronización permite al sistema ofrecer citas en horarios disponibles reales del asesor."
    },
    {
        question: "¿Cuál es la pestaña más importante en el módulo de Conversaciones donde debes centrar tu atención para responder nuevos mensajes?",
        options: [
            "Todos",
            "Recientes",
            "Destacadas",
            "Sin Leer"
        ],
        correct: 3,
        hint: "Enfócate en lo que aún no tiene respuesta.",
        rationale: "La pestaña Sin Leer agrupa los mensajes pendientes de respuesta y prioriza la atención inmediata."
    },
    {
        question: "Si escribes un mensaje en la caja de texto que se vuelve AMARILLA (Comentario Interno), ¿quién puede ver ese mensaje?",
        options: [
            "El cliente y tu supervisor.",
            "Solo el cliente.",
            "Solo tus compañeros de equipo y supervisores (el cliente NO lo ve).",
            "Nadie, es solo un borrador."
        ],
        correct: 2,
        hint: "Color amarillo = interno, no visible al cliente.",
        rationale: "Los comentarios internos son visibles para el equipo, nunca para el cliente."
    },
    {
        question: "¿Para qué sirve usar la @mención (ej. @Ricardo) dentro de un Comentario Interno?",
        options: [
            "Para enviar una notificación directa a ese compañero sobre ese lead.",
            "Para asignarle el contacto permanentemente a ese compañero.",
            "Para copiar a ese compañero en el próximo correo al cliente.",
            "Para pedirle permiso al cliente de hablar con Ricardo."
        ],
        correct: 0,
        hint: "La mención genera una notificación al equipo.",
        rationale: "La @mención avisa a un compañero dentro del hilo interno para coordinación y seguimiento."
    },
    {
        question: "¿Qué sucede si un prospecto te envía su número de teléfono con guiones (ej. 55-1234-5678) en un chat?",
        options: [
            "El sistema lo guarda automáticamente en la ficha del contacto.",
            "El sistema lo rechaza y le pide al cliente que lo escriba de nuevo.",
            "El sistema NO lo capturará automáticamente; el asesor debe copiarlo y pegarlo manualmente sin los guiones.",
            "El sistema lo guarda, pero lo marca como inválido."
        ],
        correct: 2,
        hint: "Los guiones pueden impedir la captura automática.",
        rationale: "La extracción automática requiere formato estándar; con guiones debe limpiarse manualmente."
    },
    {
        question: "¿Para qué sirve marcar un chat con el ícono de la estrella ⭐️?",
        options: [
            "Para marcar al cliente como VIP.",
            "Para enviar el chat a tu supervisor para revisión.",
            "Para mover el chat a la pestaña Destacadas y darle seguimiento prioritario.",
            "Para bloquear al contacto."
        ],
        correct: 2,
        hint: "La estrella sirve para priorizar conversaciones.",
        rationale: "Destacar un chat lo mueve a la sección prioritaria para seguimiento."
    },
    {
        question: "¿Cuál es el límite de tamaño para los archivos (PDF, videos) que un ASESOR puede ENVIAR al cliente?",
        options: [
            "100 MB",
            "25 MB",
            "5 MB",
            "No hay límite."
        ],
        correct: 1,
        hint: "Recuerda las restricciones de salida.",
        rationale: "El límite para archivos enviados por el asesor es de 25 MB."
    },
    {
        question: "¿Qué pasa con los archivos (ej. documentos de inscripción) que un CLIENTE te envía?",
        options: [
            "Tienen un límite de 25 MB.",
            "Se borran después de 30 días, como en WhatsApp.",
            "No tienen límite de tamaño (límite de 25MB es solo para salientes) y no caducan.",
            "Solo se pueden recibir archivos PDF."
        ],
        correct: 2,
        hint: "Diferencia entre archivos salientes y entrantes.",
        rationale: "Los archivos entrantes del cliente no tienen ese límite y no vencen."
    },
    {
        question: "¿Cuál es la forma más sencilla de mover una Oportunidad (tarjeta) de una etapa a otra en el pipeline (embudo)?",
        options: [
            "Editando el campo Etapa dentro del contacto.",
            "Creando una nota interna.",
            "Arrastrando y soltando (drag and drop) la tarjeta a la siguiente columna.",
            "Enviando un correo electrónico al supervisor."
        ],
        correct: 2,
        hint: "Piensa en el uso típico de un kanban.",
        rationale: "El movimiento de oportunidades entre etapas se hace con drag and drop en el embudo."
    },
    {
        question: "¿En qué estado debes poner una Oportunidad si el cliente te dice explícitamente 'No me interesa, gracias'?",
        options: [
            "Abierto",
            "Abandonado",
            "Perdido",
            "Ganado"
        ],
        correct: 2,
        hint: "La negativa explícita indica el estado.",
        rationale: "Una negativa explícita se clasifica como Oportunidad Perdida."
    },
    {
        question: "¿En qué estado debes poner una Oportunidad si intentaste contactar al lead 9 veces (toques) y NUNCA te respondió?",
        options: [
            "Abierto",
            "Abandonado",
            "Perdido",
            "Frío"
        ],
        correct: 1,
        hint: "Sin respuesta tras múltiples intentos.",
        rationale: "Sin respuesta tras el proceso de toques se considera Abandonado."
    },
    {
        question: "¿Cuál es la diferencia clave entre Perdido y Abandonado?",
        options: [
            "Perdido es cuando te dijo 'no' y Abandonado es cuando te 'gosteó' (no responde).",
            "Perdido es cuando se fue con la competencia y Abandonado es cuando no tenía dinero.",
            "Perdido lo marca el asesor y Abandonado lo marca el sistema automáticamente.",
            "No hay diferencia, significan lo mismo."
        ],
        correct: 0,
        hint: "Diferencia entre rechazo explícito y ausencia de respuesta.",
        rationale: "Perdido = rechazo explícito; Abandonado = no hay respuesta tras intentos."
    },
    {
        question: "Según lo acordado en las sesiones, ¿cuándo se considera una Oportunidad como Ganada?",
        options: [
            "Cuando el cliente dice 'sí, me voy a inscribir'.",
            "Cuando el cliente asiste a una cita.",
            "Cuando el cliente completa el pago y finaliza su proceso (ej. matriculado).",
            "Cuando el cliente llena el formulario inicial."
        ],
        correct: 2,
        hint: "La confirmación real es el pago completado.",
        rationale: "La Oportunidad se considera Ganada cuando el proceso finaliza con pago y matriculación."
    }
    ,
    {
        question: "¿Dónde se registran correctamente las citas agendadas con un lead dentro de Super Leads?",
        options: [
            "En las Notas del contacto.",
            "Dentro de la Oportunidad.",
            "En el Calendario sincronizado (Google/Outlook).",
            "En las Etiquetas (Tags)."
        ],
        correct: 2,
        hint: "Piensa en el lugar que gestiona horarios reales.",
        rationale: "Las citas se gestionan en el calendario sincronizado para respetar disponibilidad y evitar choques de horario."
    }
];

// Preguntas adicionales solicitadas (19–30)
const extraQuestions = [
    {
        question: "¿Cuál es la herramienta N°1 dentro de Super Leads para agendar un seguimiento (ej. 'Llamar a Juan el próximo viernes')?",
        options: [
            "Usar las Notas.",
            "Poner una Etiqueta (Tag).",
            "Crear una Tarea (Task).",
            "Agendar una cita en tu calendario de Outlook."
        ],
        correct: 2,
        hint: "Agendar seguimiento = crear una acción con fecha.",
        rationale: "La forma correcta de programar un seguimiento es crear una Tarea con fecha y recordatorio."
    },
    {
        question: "Si quieres hacer un seguimiento intensivo a un lead que no responde, ¿qué tipo de Tarea puedes crear?",
        options: [
            "Una Tarea 'Prioritaria'.",
            "Una Tarea 'Recurrente' (ej. que se repita cada día durante 5 días).",
            "Una Tarea 'Automatizada'.",
            "Una Tarea 'Compartida'."
        ],
        correct: 1,
        hint: "Repite la acción varios días seguidos.",
        rationale: "Las Tareas recurrentes permiten insistir con un ritmo definido (ej. diario por 5 días)."
    },
    {
        question: "¿Qué sucede si editas 5 campos de un Contacto y simplemente cierras la pestaña del navegador?",
        options: [
            "Los cambios se guardan automáticamente (auto-guardado).",
            "Los cambios se pierden; la plataforma NO auto-guarda y debes presionar 'Guardar' o 'Actualizar'.",
            "El sistema te envía un recordatorio para guardar.",
            "Los cambios se guardan después de 5 minutos."
        ],
        correct: 1,
        hint: "Confirma siempre con 'Guardar' o 'Actualizar'.",
        rationale: "No hay auto-guardado: sin guardar explícito, los cambios se pierden."
    },
    {
        question: "¿Para qué sirven las Listas Inteligentes (Smart Lists) en el módulo de Contactos?",
        options: [
            "Para crear campañas de Email Marketing.",
            "Para crear filtros guardados (ej. 'Mis leads de Producto A').",
            "Para que la IA te diga cuáles son los mejores leads.",
            "Para ver un listado de las tareas del día."
        ],
        correct: 1,
        hint: "Filtros reutilizables según criterios.",
        rationale: "Las Smart Lists son filtros guardados que segmentan contactos según condiciones."
    },
    {
        question: "¿Dónde debes registrar las 'tipificaciones' que usabas en HubSpot (ej. 'Toque 1', 'Toque 2', 'Descartable')?",
        options: [
            "En las Notas.",
            "En las Etiquetas (Tags).",
            "En el nombre del Contacto.",
            "En los Comentarios Internos."
        ],
        correct: 1,
        hint: "Usa categorización flexible y filtrable.",
        rationale: "Las etiquetas permiten clasificar contactos y filtrar por esas tipificaciones."
    },
    {
        question: "¿Qué es un 'Campo Personalizado' (Custom Field)?",
        options: [
            "Un campo de texto libre para que el asesor escriba lo que quiera.",
            "Un campo de datos específico creado para guardar información clave (ej. 'Promedio', 'Carrera de Interés').",
            "Un nombre personalizado para la Oportunidad.",
            "Un filtro en el embudo."
        ],
        correct: 1,
        hint: "Sirve para datos estructurados clave.",
        rationale: "Un campo personalizado almacena información relevante con formato consistente y filtrable."
    },
    {
        question: "¿Por qué es preferible usar un campo de 'Elegir Opciones' (Dropdown) en lugar de 'Texto Abierto' para registrar de qué escuela viene un lead?",
        options: [
            "Porque los campos de texto abierto no se pueden editar.",
            "Para evitar datos sucios y normalizar valores para filtrar correctamente.",
            "Porque los campos de texto abierto no se ven en el celular.",
            "Porque los campos 'Dropdown' son más rápidos de llenar."
        ],
        correct: 1,
        hint: "Normaliza valores y evita variaciones.",
        rationale: "Con dropdown evitas inconsistencias (UVM, Univ. del Valle, Valle de Mex) y mejoras el filtrado."
    },
    {
        question: "¿Cuántos números de WhatsApp se pueden conectar a una misma cuenta de Super Leads (según la recomendación de la capacitación)?",
        options: [
            "Tantos como asesores haya.",
            "Solo uno, que funciona como un 'conmutador' que reparte los leads.",
            "Uno para Licenciaturas y uno para Educación Continua.",
            "Ninguno, WhatsApp no se puede conectar."
        ],
        correct: 1,
        hint: "Un número institucional para canalizar.",
        rationale: "Se recomienda un único número central que distribuya y organice los chats."
    },
    {
        question: "¿Cuántas páginas de Facebook o cuentas de Instagram se pueden conectar por cuenta de Super Leads?",
        options: [
            "Ilimitadas.",
            "Diez por cada asesor.",
            "Solo una de cada una (una de Facebook y una de Instagram).",
            "Depende del plan contratado."
        ],
        correct: 2,
        hint: "Una por red, por cuenta.",
        rationale: "La plataforma permite conectar una página de Facebook y una cuenta de Instagram por cuenta."
    },
    {
        question: "¿Cómo planea el equipo de implementación asignar leads de WhatsApp de Educación Continua, si solo hay un número de WhatsApp institucional?",
        options: [
            "Un asesor recibirá todos los chats y los reasignará manualmente.",
            "Se crearán links de WhatsApp únicos con una 'frase única' que una automatización detectará.",
            "Los asesores de EC tendrán que revisar todos los chats del inbox general.",
            "No es posible, los leads de EC solo pueden llegar por Facebook."
        ],
        correct: 1,
        hint: "Automatiza la identificación del origen.",
        rationale: "Links con frase única permiten enrutar automáticamente los chats de EC por reglas."
    },
    {
        question: "En tu vista de Asesor, ¿cuántos contactos verás en tu módulo de Contactos?",
        options: [
            "Veré todos los contactos de la base de datos de la empresa.",
            "Solo veré los contactos de los que soy Propietario o Seguidor.",
            "Solo veré los contactos que hayan llegado en las últimas 24 horas.",
            "Veré los contactos de todo mi equipo (pero no de otras áreas)."
        ],
        correct: 1,
        hint: "Visibilidad según rol en cada contacto.",
        rationale: "La vista del asesor muestra los contactos donde es Owner o Follower, no toda la base."
    },
    {
        question: "¿Cuándo se implementará la Inteligencia Artificial (IA) para ayudar a contestar leads?",
        options: [
            "Desde el primer día, es la función principal.",
            "No se implementará, no está incluida.",
            "En una 'segunda etapa', después de que el equipo domine el uso manual de la plataforma.",
            "Solo se usará para los leads de Educación Continua."
        ],
        correct: 2,
        hint: "Primero dominio operativo, luego IA.",
        rationale: "La IA se activa en una segunda fase, tras consolidar procesos manuales."
    }
];

// Agregar preguntas adicionales al quiz
quizData.push(...extraQuestions);
// Filtrar preguntas que contengan contenido sobre HubSpot
for (let i = quizData.length - 1; i >= 0; i--) {
    if (/hubspot/i.test(quizData[i].question)) {
        quizData.splice(i, 1);
    }
}

// Variables globales
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let userName = '';
let userInstitution = '';
// Selección aleatoria: el usuario responde solo 10 preguntas
const QUIZ_QUESTION_COUNT = 10;
let activeQuiz = [];
// URL del Web App de Google Apps Script
// PASOS PARA CONFIGURAR:
// 1. Ve a https://script.google.com y crea un nuevo proyecto
// 2. Pega el código de google-apps-script.gs que te di
// 3. Despliega como Web App (Deploy → New deployment → Type: Web App)
// 4. Copia la URL que termina en /exec y pégala aquí
// Deployment ID actual: AKfycbyYBs3-sKDR_e958HdCMm2u6ErzjswsRuMvK12HS4qmIL0QUI_e2RAz_p5jsoHYOSew
const SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbw59LpQlCJ90ntIuH-q2dMxLSJvIQP_rZQlFBXQrUnA8o2xt8Hvs01V4RfIENtfV5Uc/exec';

// Verificar configuración al cargar
console.log('Configuración del Web App:', {
    url: SHEETS_WEB_APP_URL,
    configurado: SHEETS_WEB_APP_URL && !SHEETS_WEB_APP_URL.includes('PON_AQUI_TU_URL'),
    problema_detectado: SHEETS_WEB_APP_URL.includes('/a/macros/') ? 'URL contiene /a/macros/ - debería ser solo /macros/' : 'none'
});

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
// Se deshabilita la opción de reiniciar el test
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
    // Seleccionar aleatoriamente 10 preguntas del total
    activeQuiz = pickRandomQuestions(quizData, QUIZ_QUESTION_COUNT);
    
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
    const question = activeQuiz[currentQuestion];
    
    // Actualizar contador de preguntas
    questionCounter.textContent = `Pregunta ${currentQuestion + 1} de ${activeQuiz.length}`;
    
    // Actualizar barra de progreso
    const progress = ((currentQuestion + 1) / activeQuiz.length) * 100;
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
    const question = activeQuiz[currentQuestion];
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
    const question = activeQuiz[currentQuestion];
    hintText.textContent = question.hint;
    hintText.classList.remove('hidden');
    hintBtn.textContent = 'Pista mostrada';
    hintBtn.disabled = true;
}

// Función para siguiente pregunta
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < activeQuiz.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Función para mostrar resultados
function showResults() {
    console.log('showResults called - userName:', userName, 'score:', score, 'total:', activeQuiz.length);
    
    try {
        // Ocultar pantalla de preguntas y mostrar resultados
        questionScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');
        
        // Ocultar/Deshabilitar reinicio
        if (restartBtn) {
            restartBtn.classList.add('hidden');
            restartBtn.disabled = true;
        }

        // Mostrar información del usuario y puntuación
        if (finalUserName) {
            finalUserName.textContent = userName;
        }
        if (finalScore) {
            finalScore.textContent = `${score} de ${activeQuiz.length} (${Math.round((score / activeQuiz.length) * 100)}%)`;
        }
        
        // Mostrar resumen de respuestas
        if (resultsSummary) {
            resultsSummary.innerHTML = '';
            // Recomendación si el puntaje es 6 o menor
            if (score <= 6) {
                const adviceDiv = document.createElement('div');
                adviceDiv.className = 'p-4 rounded-lg mb-3 bg-yellow-50 border border-yellow-300';
                adviceDiv.innerHTML = `
                    <p class="font-medium mb-1">Recomendación</p>
                    <p class="text-sm">Tu puntaje fue 6 o menor. Te sugerimos revisar la guía, ver la grabación de las capacitaciones o solicitar una sesión con el coordinador de implementación.</p>
                `;
                resultsSummary.appendChild(adviceDiv);
            }
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
        const percent = Math.round((score / activeQuiz.length) * 100);
        // Alinear nombres de campos con Apps Script
        sendResultToSheet({
            nombre: userName,
            institucion: userInstitution,
            puntaje: score,
            porcentaje: percent,
            total: activeQuiz.length,
            respuestas: JSON.stringify(userAnswers),
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error in showResults:', error);
    }
}

// Utilidad: tomar preguntas aleatorias
function pickRandomQuestions(allQuestions, count) {
    const arr = [...allQuestions];
    // Barajar con Fisher–Yates
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, Math.min(count, arr.length));
}

// Enviar datos al Web App de Google Apps Script
async function sendResultToSheet(payload) {
    try {
        if (!SHEETS_WEB_APP_URL || SHEETS_WEB_APP_URL.includes('PON_AQUI_TU_URL')) {
            console.error('SHEETS_WEB_APP_URL no está configurado correctamente.');
            showError('⚠️ No está configurada la URL del Web App de Google Sheets. Contacta al administrador.');
            return;
        }
        
        console.log('Intentando enviar datos a Google Sheets...', payload);
        
        // Intento normal con CORS
        const res = await fetch(SHEETS_WEB_APP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            credentials: 'omit'
        });
        
        console.log('Respuesta del servidor:', res.status, res.statusText);
        
        if (res.ok) {
            const responseData = await res.json();
            console.log('Datos enviados exitosamente:', responseData);
            showError('✅ Datos guardados en Google Sheets correctamente.');
        } else if (res.status === 302 || res.status === 301) {
            console.error('Redirección detectada - El Web App no está configurado correctamente.');
            showError('❌ El Web App de Google Sheets no está accesible. Verifica que esté desplegado como "Cualquiera" tenga acceso.');
        } else {
            console.error('Error HTTP:', res.status, res.statusText);
            const errorText = await res.text();
            console.error('Respuesta de error:', errorText);
            showError(`❌ Error ${res.status}: ${res.statusText}. Verifica la configuración del Web App.`);
        }
    } catch (err) {
        console.error('Fallo envío con CORS:', err);
        
        // Si es un error de red o CORS, intentar con no-cors
        if (err.name === 'TypeError' || err.message.includes('CORS') || err.message.includes('Failed to fetch')) {
            showError('🔁 Falló el envío con CORS. Reintentando con modo sin CORS...');
            
            try {
                await fetch(SHEETS_WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify(payload),
                    credentials: 'omit'
                });
                console.log('Datos enviados en modo no-cors (respuesta opaca).');
                showError('⚠️ Datos enviados en modo sin CORS. Revisa tu Google Sheet para confirmar.');
            } catch (err2) {
                console.error('Error incluso con no-cors:', err2);
                showError('❌ No se pudieron guardar los datos. Verifica la URL y configuración del Web App.');
            }
        } else {
            showError('❌ Error de red: ' + err.message);
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
