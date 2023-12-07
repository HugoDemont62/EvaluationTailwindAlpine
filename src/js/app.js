import Alpine from "alpinejs";
import Menu from "./components/Menu";
import Faq from "./components/Faq";
import Projects from './components/Projects.js';
import ContactForm from './components/ContactForm.js';
import Questions from './components/Questions.js';
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }
    window.alpineInitialized = true;
    const {data, start, plugin} = Alpine;
    plugin(intersect);
    plugin(persist);
    Alpine.data('menu', Menu);
    Alpine.data('faq', Faq);
    Alpine.data('projects', Projects);
    Alpine.data('contactForm', ContactForm);
    Alpine.data('questions', Questions);
    start();
});
