import "./styles.css";
import InitQuillEditors from "./components/quill-ta/quill-ta";
import Initheader from "./components/header/header";
import {InitCPISetup} from "./components/kap-table/kap-table";
import {InitSignaturePad} from "./components/staticpages/signatures";

Initheader();
InitCPISetup();

// Add general info form area after header
const general_info_html = require("./components/staticpages/generalinfo.html").default;
document.querySelector("header").insertAdjacentHTML("afterend", general_info_html);

// Add learner text areas to all elements with class .kap
const kap_ta_html = require("./components/quill-ta/quill-ta-learner.html").default;  
document.querySelectorAll(".kap").forEach((el:HTMLElement) => {
    el.insertAdjacentHTML("beforeend", kap_ta_html);   
});

// Add sections after kap sections
const quill_ta_comments_html = require("./components/quill-ta/quill-ta-comments.html").default;  
const signature_html = require("./components/staticpages/signatures.html").default;

document.querySelector(".kap:last-of-type").insertAdjacentHTML("afterend", quill_ta_comments_html + signature_html);
InitQuillEditors();

// Add page events: section h1 toggle show/hide section
document.querySelectorAll("section>h1").forEach((el: HTMLElement) => {
    const parent = el.parentElement;

    // height to show only h1
    let h1Height = el.offsetHeight;
    
    // add class hide on init
    parent.style.height = `${h1Height}px`;
   
    el.addEventListener("click", () => {
        h1Height = el.offsetHeight; 
                
        // toggle class to show/hide section
        if (parent.classList.contains("open")) { 
            parent.classList.remove("open");
            parent.style.height = `${h1Height}px`;//close
            
        } else {
            parent.classList.add("open");
            parent.style.height = "fit-content";//open
        }

    });

    
});

// Add page events: open parent section when child element is focused
document.querySelectorAll("section *").forEach((el: HTMLElement) => {
    el.addEventListener("focus", () => {
        const parent = el.closest("section");
        if (parent) {
            parent.classList.add("open");
            parent.style.height = "fit-content";
        }
    });
});

// Init signature pad for canvas
InitSignaturePad();