// ==========================================
// EDUBOT - U.E. DISTRITO METROPOLITANO
// Asistente Virtual Escolar (6 Módulos Oficiales)
// ==========================================

function enviarPregunta() {
    let campo = document.getElementById("pregunta");
    let pregunta = campo.value.trim();

    if (pregunta === "") return;

    agregarMensaje(pregunta, "usuario");
    let respuesta = obtenerRespuesta(pregunta);

    setTimeout(function() {
        agregarMensaje(respuesta, "bot");
    }, 400);

    campo.value = "";
}

function agregarMensaje(texto, tipo) {
    let chat = document.getElementById("chat");
    let mensaje = document.createElement("div");

    mensaje.classList.add("mensaje");

    if (tipo === "usuario") {
        mensaje.classList.add("usuario");
        mensaje.innerHTML = "<div><strong>👤 Tú:</strong><p>" + texto + "</p></div>";
    } else {
        mensaje.classList.add("bot");
        mensaje.innerHTML = "<img src='bot-avatar.png' class='avatar-msg'><div><strong>EduBot:</strong><p>" + texto + "</p></div>";
    }

    chat.appendChild(mensaje);
    chat.scrollTop = chat.scrollHeight;
}

function obtenerRespuesta(pregunta) {
    pregunta = pregunta.toLowerCase();

    // 1. MÓDULO INFORMACIÓN GENERAL
    if (pregunta.includes("general") || pregunta.includes("contacto") || pregunta.includes("telefono") || pregunta.includes("direccion") || pregunta.includes("autoridad") || pregunta.includes("rector")) {
        return "📍 <b>INFORMACIÓN GENERAL</b><br>" +
               "<b>Datos Institucionales:</b><br>" +
               "• <b>Contacto:</b> 023751143<br>" +
               "• <b>Correo:</b> colmetropolitano@outlook.com<br>" +
               "• <b>Dirección:</b> Coop. Ciudad Nueva, Sector #3<br>"+ "<a href='https://www.google.com/maps?q=-0.247441,-79.1966529&z=17&hl=es' target='_blank' style='color:#1769aa; font-weight:bold;'>Abrir ubicación en Google Maps 🗺️</a><br>" +

               "• <b>Ciudad:</b> Santo Domingo<br>" +
               "• <b>Distrito:</b> 23D02 | <b>AMIE:</b> 23H00061<br><br>" +
               "<b>Datos Autoridades:</b><br>" +
               "• <b>Rectora:</b> MSc. Alexandra Palacios<br>" +
               "• <b>Vicerrectores:</b> MSc. Rolando Briceño (matutina) y MSc. Celia García (vespertina)<br>" +
               "• <b>Inspector General:</b> Ing. Geovanny Silva (matutina)<br>" +
               "• <b>Subinspector:</b> MSc. Néstor Merchán (vespertina)<br>" +
               "• <b>Coordinadora DECE:</b> Lic. Neiva Solórzano<br>" +
               "• <b>Secretaria:</b> MSc. Maribel Pinela";
    }

    // 2. MÓDULO HORARIOS DE CLASES
    if (pregunta.includes("horario") || pregunta.includes("clase") || pregunta.includes("hora") || pregunta.includes("matutina") || pregunta.includes("vespertina")) {
        return "⏰ <b>HORARIOS DE CLASES</b><br>" +
               "<b>Jornada Matutina:</b><br>" +
               "• <b>Iniciales:</b> 07:45 a 11:45<br>" +
               "• <b>Preparatoria (1ero), EGB Elemental (2do, 3ero, 4to), Media (5to, 6to, 7mo) y Superior (8vo, 9no, 10mo):</b> 07:00 a 11:45<br>" +
               "• <b>Bachillerato en Ciencias:</b> 07:00 a 12:25<br>" +
               "• <b>Bachillerato Técnico (Gestión Financiera/Contable, Desarrollo de Software):</b> 07:00 a 13:00<br><br>" +
               "<b>Jornada Vespertina:</b><br>" +
               "• <b>Iniciales:</b> 13:00 a 16:00<br>" +
               "• <b>Preparatoria (1ero), EGB Elemental, Media y Superior:</b> 13:00 a 17:45<br>" +
               "• <b>Bachillerato en Ciencias:</b> 13:00 a 18:05<br>" +
               "• <b>Bachillerato Técnico (Gestión Financiera/Contable, Desarrollo de Software):</b> 12:25 a 18:05";
    }

    // 3. MÓDULO TRÁMITES Y SECRETARÍA
    if (pregunta.includes("tramite") || pregunta.includes("trámite") || pregunta.includes("secretaría") || pregunta.includes("secretaria") || pregunta.includes("padres") || pregunta.includes("oficio")) {
        return "📋 <b>TRÁMITES Y SECRETARÍA</b><br>" +
               "<b>Secretaría (Horarios de atención):</b><br>" +
               "• 8:00 a 12:30 y de 13:00 a 15:30<br><br>" +
               "<b>Trámites:</b><br>" +
               "• Todo trámite con oficio dirigido hacia la autoridad máxima con los datos correctamente descritos, detallando de manera clara el pedido a realizarse. El tiempo de respuesta se dará en base al pedido solicitado.<br><br>" +
               "<b>Atención a Padres de Familia y/o Representantes Legales:</b><br>" +
               "• <b>Día jueves:</b><br>" +
               "  - Matutina: 13:30 a 15:00<br>" +
               "  - Vespertina: 10:30 a 12:00";
    }

    // 4. MÓDULO UBICACIÓN DE AULAS
    if (pregunta.includes("ubicacion") || pregunta.includes("ubicación") || pregunta.includes("aula") || pregunta.includes("bloque") || pregunta.includes("piso") || pregunta.includes("laboratorio")) {
        return "🏫 <b>UBICACIÓN DE AULAS</b><br>" +
               "• <b>Bloque #1:</b> Área Administrativa (Rectorado, Vicerrectorado, DECE, Inspección, Secretaría y Laboratorio #1 de Computación).<br>" +
               "• <b>Bloque #2 (Edificio):</b><br>" +
               "  - <i>Primer piso:</i> Aulas B1, B2, B3, B4, B5 y B6.<br>" +
               "  - <i>Segundo piso:</i> Aulas C1, C2, C3, C4, C5 y C6.<br>" +
               "  - <i>Tercer piso:</i> Aulas D1, D2, D3, D4, D5 (Laboratorio #1 de contabilidad) y D6 (Laboratorio #2 de computación).<br>" +
               "• <b>Bloque #3 (EGB):</b> Aulas E1, E2, E3, E4, Sala de Docentes, Laboratorio de Ciencias Naturales, Sala del Área de Gestión Financiera.<br>" +
               "• <b>Bloque #4 (EGB):</b> Aulas F1, F2, F3, F4, F5, F6, F7.<br>" +
               "• <b>Bloque #5:</b> Aulas de Iniciales 1 y 2.";
    }

    // 5. MÓDULO MATRÍCULAS Y TRASLADOS
    if (pregunta.includes("matricula") || pregunta.includes("matrícula") || pregunta.includes("traslado") || pregunta.includes("cupo")) {
        return "📝 <b>MATRÍCULAS Y TRASLADOS</b><br>" +
               "Lo realizan directamente el Representante Legal desde el siguiente link oficial:<br><br>" +
               "👉 <a href='https://juntos.educacion.gob.ec/' target='_blank' style='color:#1769aa; font-weight:bold;'>Educación niños-adolescentes | Juntos</a>";
    }

    // 6. MÓDULO NORMATIVA INTERNA
    if (pregunta.includes("normativa") || pregunta.includes("mision") || pregunta.includes("misión") || pregunta.includes("vision") || pregunta.includes("visión") || pregunta.includes("figura") || pregunta.includes("codigo") || pregunta.includes("convivencia")) {
        return "📜 <b>NORMATIVA INTERNA</b><br>" +
               "• <b>Misión:</b><i>“Somos una institución educativa de excelencia formando en base al modelo socio-crítico, inculcando el pensamiento analítico y el uso de los recursos tecnológicos, que permitan formar entes críticos, activos y creativos para lograr ciudadanos comprometidos con el desarrollo del país.”</i><br>" +
               "• <b>Visión:</b> <i>“Ser una institución educativa de integración científica e inclusiva, que desarrolle el pensamiento crítico permitiendo la formación integral de los discentes, con una educación de calidad y calidez, necesarios para construir el futuro personal y profesional de los ciudadanos.”</i><br><br>" +
               "<b>Figuras Profesionales:</b><br>" +
               "• Ciencias<br>" +
               "• Desarrollo de Software<br>" +
               "• Gestión Contable y Financiera<br><br>" +
               "<b>Código de Convivencia:</b><br>" +
               "📄 <a href='codigo_convivencia.pdf' target='_blank' style='color:#1769aa; font-weight:bold;'>Ver Documento del Código de Convivencia</a>";
    }

    // SALUDO
    if (pregunta.includes("hola") || pregunta.includes("buenos días") || pregunta.includes("buenas tardes")) {
        return "¡Hola! 👋 Bienvenido a la U.E. Distrito Metropolitano. Haz clic en cualquiera de los 6 botones superiores o escribe tu pregunta.";
    }

    // RESPUESTA DESCONOCIDA
    return "🤔 Lo siento, no encontré esa información. Selecciona uno de los 6 módulos para obtener ayuda.";
}

function preguntaRapida(tema) {
    let pregunta = "";
    switch (tema) {
        case "general": pregunta = "Información General"; break;
        case "horarios": pregunta = "Horarios de clases"; break;
        case "tramites": pregunta = "Trámites y Secretaría"; break;
        case "ubicacion": pregunta = "Ubicación de aulas"; break;
        case "matriculas": pregunta = "Matrículas y traslados"; break;
        case "normativa": pregunta = "Normativa Interna"; break;
    }
    document.getElementById("pregunta").value = pregunta;
    enviarPregunta();
}

function presionarEnter(event) {
    if (event.key === "Enter") enviarPregunta();
}