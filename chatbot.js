// ==========================================
// EDUBOT
// Asistente Virtual Escolar
// ==========================================


// FUNCIÓN PARA ENVIAR PREGUNTA

function enviarPregunta() {

    let campo = document.getElementById("pregunta");

    let pregunta = campo.value.trim();

    if (pregunta === "") {

        return;

    }

    // Mostrar pregunta del usuario

    agregarMensaje(pregunta, "usuario");

    // Obtener respuesta

    let respuesta = obtenerRespuesta(pregunta);

    // Mostrar respuesta después de un pequeño tiempo

    setTimeout(function() {

        agregarMensaje(respuesta, "bot");

    }, 500);


    // Limpiar campo

    campo.value = "";

}


// ==========================================
// AGREGAR MENSAJE AL CHAT
// ==========================================

function agregarMensaje(texto, tipo) {

    let chat = document.getElementById("chat");

    let mensaje = document.createElement("div");

    mensaje.classList.add("mensaje");

    if (tipo === "usuario") {

        mensaje.classList.add("usuario");

        mensaje.innerHTML =
            "<strong>👤 Tú:</strong><p>"
            + texto +
            "</p>";

    } else {

        mensaje.classList.add("bot");

        mensaje.innerHTML =
            "<strong>🤖 EduBot:</strong><p>"
            + texto +
            "</p>";
    }

    chat.appendChild(mensaje);

    // Bajar automáticamente

    chat.scrollTop = chat.scrollHeight;

}


// ==========================================
// OBTENER RESPUESTA
// ==========================================

function obtenerRespuesta(pregunta) {

    // Convertir a minúsculas

    pregunta = pregunta.toLowerCase();


    // HORARIOS

    if (
        pregunta.includes("horario") ||
        pregunta.includes("hora") ||
        pregunta.includes("clases")
    ) {

        return "🕐 Las clases comienzan a las 07:00 y la jornada termina a las 13:30.";

    }


    // MATERIAS

    if (
        pregunta.includes("materias") ||
        pregunta.includes("asignaturas")
    ) {

        return "📚 En Primero de Bachillerato se estudian materias como Matemática, Lengua y Literatura, Inglés, Informática, Ciencias Naturales y otras asignaturas establecidas por la institución.";

    }


    // AULAS

    if (
        pregunta.includes("aula") ||
        pregunta.includes("salon") ||
        pregunta.includes("salón")
    ) {

        return "🏫 Para conocer la ubicación de un aula, consulta el bloque y número de aula correspondiente.";

    }


    // LABORATORIO

    if (
        pregunta.includes("laboratorio") ||
        pregunta.includes("informática") ||
        pregunta.includes("informatica")
    ) {

        return "💻 El laboratorio de Informática se encuentra en el bloque 2. Recuerda verificar la ubicación real de tu institución.";

    }


    // BIBLIOTECA

    if (
        pregunta.includes("biblioteca") ||
        pregunta.includes("libros")
    ) {

        return "📖 La biblioteca se encuentra en el bloque 1. Allí puedes consultar y solicitar libros según las normas institucionales.";

    }


    // BAR

    if (
        pregunta.includes("bar") ||
        pregunta.includes("comida")
    ) {

        return "🍎 El bar escolar ofrece alimentos y bebidas durante los horarios establecidos por la institución.";

    }


    // ACTIVIDADES

    if (
        pregunta.includes("actividad") ||
        pregunta.includes("evento") ||
        pregunta.includes("feria") ||
        pregunta.includes("concurso")
    ) {

        return "🎉 Puedes consultar el calendario institucional para conocer las próximas actividades, ferias, concursos y eventos.";

    }


    // NORMAS

    if (
        pregunta.includes("norma") ||
        pregunta.includes("regla") ||
        pregunta.includes("convivencia")
    ) {

        return "📜 Recuerda respetar las normas de convivencia, utilizar correctamente el uniforme, ser puntual y mantener una actitud respetuosa.";

    }


    // RECREO

    if (
        pregunta.includes("recreo") ||
        pregunta.includes("descanso")
    ) {

        return "⏰ El horario del recreo debe ser configurado de acuerdo con el horario oficial de la institución.";

    }


    // SALUDO

    if (
        pregunta.includes("hola") ||
        pregunta.includes("buenos días") ||
        pregunta.includes("buenas tardes")
    ) {

        return "🤖 ¡Hola! 👋 ¿En qué puedo ayudarte? Puedes preguntarme sobre horarios, materias, aulas, biblioteca, actividades o normas.";

    }


    // AGRADECIMIENTO

    if (
        pregunta.includes("gracias")
    ) {

        return "😊 ¡Con mucho gusto! Estoy aquí para ayudarte.";

    }


    // RESPUESTA DESCONOCIDA

    return "🤔 Lo siento, todavía no tengo información sobre esa pregunta. Puedes preguntarme sobre horarios, materias, aulas, biblioteca, actividades o normas.";

}


// ==========================================
// PREGUNTAS RÁPIDAS
// ==========================================

function preguntaRapida(tema) {

    let pregunta = "";

    switch (tema) {

        case "horario":

            pregunta = "¿Cuál es el horario de clases?";

            break;

        case "materias":

            pregunta = "¿Qué materias tenemos?";

            break;

        case "aulas":

            pregunta = "¿Dónde están las aulas?";

            break;

        case "biblioteca":

            pregunta = "¿Dónde está la biblioteca?";

            break;

        case "actividades":

            pregunta = "¿Qué actividades hay?";

            break;

        case "normas":

            pregunta = "¿Cuáles son las normas?";

            break;

    }


    document.getElementById("pregunta").value = pregunta;

    enviarPregunta();

}


// ==========================================
// PRESIONAR ENTER
// ==========================================

function presionarEnter(event) {

    if (event.key === "Enter") {

        enviarPregunta();

    }

}