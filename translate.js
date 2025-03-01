// Objeto con las traducciones
const translations = {
    es: {
        Principal: "Principal",
        Proyectos: "Proyectos",
        Descarga: "Descarga",
        "Sobre Nosotros": "Sobre Nosotros",
        Contacto: "Contacto",
        "Actualmente en Desarrollo": "Actualmente en Desarrollo",
        "Pronto encontrarás actualizaciones sobre nuestros proyectos aquí.": "Pronto encontrarás actualizaciones sobre nuestros proyectos aquí."
        "Aventura gráfica, Point & Click": "Aventura gráfica, Point & Click"
 },
    en: {
        Principal: "Home",
        Proyectos: "Projects",
        Descarga: "Download",
        "Sobre Nosotros": "About Us",
        Contacto: "Contact",
        "Actualmente en Desarrollo": "Currently in Development",
        "Pronto encontrarás actualizaciones sobre nuestros proyectos aquí.": "Updates on our projects will appear here soon."
    }
};

// Idioma almacenado en localStorage o idioma predeterminado
let storedLanguage = localStorage.getItem('language') || 'es';

// Función para aplicar traducciones
function applyLanguage(language) {
    const languageData = translations[language];
    if (!languageData) {
        console.error(`No se encontraron traducciones para el idioma: ${language}`);
        return;
    }
    Object.keys(languageData).forEach(key => {
        const elements = document.body.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(element => {
            element.textContent = languageData[key];
        });
    });
}

// Función para alternar entre idiomas
function toggleLanguage() {
    storedLanguage = storedLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', storedLanguage); // Guardar idioma seleccionado
    applyLanguage(storedLanguage);
}

// Aplicar idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(storedLanguage);
});

