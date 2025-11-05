# Test de Validación de Aprendizaje

Una aplicación web interactiva diseñada para evaluar el conocimiento sobre la validación de aprendizaje en programas educativos.

## Características

- **Interfaz intuitiva**: Diseño moderno y responsive con Tailwind CSS
- **Validación de datos**: Verificación de entrada de usuario con mensajes de error claros
- **Sistema de puntuación**: Evaluación automática con retroalimentación inmediata
- **Pistas educativas**: Opción de mostrar pistas para ayudar en el aprendizaje
- **Retroalimentación detallada**: Explicaciones para cada respuesta correcta e incorrecta
- **Resumen de resultados**: Visualización completa del rendimiento del usuario
- **Reinicio fácil**: Opción de volver a intentar el test

## Estructura del Proyecto

```
test-validacion/
├── index.html          # Archivo principal HTML
├── quiz.js            # Lógica del test en JavaScript
└── README.md          # Este archivo
```

## Cómo usar

1. **Inicio**: Ingresa tu nombre completo y institución
2. **Test**: Responde las 10 preguntas de opción múltiple
3. **Pistas**: Usa el botón "Mostrar Pista" si necesitas ayuda
4. **Retroalimentación**: Recibe explicaciones inmediatas después de cada respuesta
5. **Resultados**: Revisa tu puntuación final y el resumen de respuestas
6. **Reinicio**: Vuelve a intentar el test si lo deseas

## Temas cubiertos en el test

- Propósito de la validación de aprendizaje
- Métricas importantes de evaluación
- Timing de las evaluaciones
- Tipos de preguntas efectivas
- Tasas de aprobación aceptables
- Contenido de reportes de validación
- Medición del aprendizaje retenido
- Análisis de resultados pre y post-capacitación
- Uso de evaluaciones preliminares
- Mejora continua basada en resultados

## Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados con variables CSS
- **Tailwind CSS**: Framework de utilidades CSS
- **JavaScript vanilla**: Lógica de la aplicación
- **Google Fonts**: Tipografía Inter (a través de placeholder)

## Personalización

Los colores principales de la aplicación pueden ser modificados cambiando las variables CSS en el archivo `index.html`:

```css
:root {
    --color-dark-blue: #1b2781;
    --color-mint-green: #50edb4;
    --color-dark-blue-hover: #15206d;
    --color-mint-green-hover: #41d99e;
}
```

## Requisitos del sistema

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar Tailwind CSS)
- No se requiere instalación adicional

## Seguridad y privacidad

- Los datos del usuario se almacenan solo durante la sesión actual
- No se envían datos a servidores externos
- No se requiere información sensible

## Soporte

Para reportar problemas o sugerir mejoras, por favor contacta al desarrollador del proyecto.

## Licencia

Este proyecto es de código abierto y está disponible para uso educativo y modificación.