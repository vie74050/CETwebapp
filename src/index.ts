import "./styles.css";

import Initheader from "./components/header/header";
import InitGeneralInfo from "./components/staticpages/generalinfo";
import {InitKAPSectionSetup} from "./components/kap-table/kap-table";
import InitQuillCommentsSection from "./components/staticpages/quill-ta-comments";
import {InitSignatureSection} from "./components/staticpages/signatures";
import InitQuillEditors from "./components/quill-ta/quill-ta";

Initheader();
InitGeneralInfo();
InitKAPSectionSetup();
InitQuillCommentsSection();
InitSignatureSection();

// init quill editors
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

