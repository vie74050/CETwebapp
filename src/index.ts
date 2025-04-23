import "./styles.css";

import InitHeader from "./components/header/header";
import CreateInstructions from "./components/staticpages/instructions";
import CreateGeneralInfo from "./components/staticpages/generalinfo";
import { CreateKAPSectionSetup } from "./components/kap-table/kap-table";
import CreateQuillCommentsSection from "./components/staticpages/quill-ta-comments";
import { CreateSignatureSection, InitSignaturePad } from "./components/staticpages/signatures";
import InitQuillEditors from "./components/quill-ta/quill-ta";

// on load, check if header exists, i.e. create the template
if (document.querySelector("header") === null) {
    // add header section to body
    const header_html = require("./components/header/header.html").default;
    document.body.insertAdjacentHTML("afterbegin", header_html);
    CreateGeneralInfo();
    CreateInstructions();
    CreateKAPSectionSetup();
    CreateQuillCommentsSection();
    CreateSignatureSection();

    InitUI();
}else {
    InitUI();
}


function InitUI(){
    InitHeader();
    InitQuillEditors();
    InitSignaturePad();

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

    // only one checkbox to be checked per row
    document.querySelectorAll("input[type=checkbox]").forEach((input: HTMLInputElement) => {
        input.addEventListener("click", () => {
            const inputs = document.querySelectorAll(`input[name="${input.name}"]`);
            console.log(input.name, input.value);
            inputs.forEach((i: HTMLInputElement) => {
                if (i !== input) i.checked = false;
            });
        });
    });
}