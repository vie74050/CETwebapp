import "./styles.css";
import InitQuillEditors from "./components/quill-ta/quill-ta";

// add learner text areas to all elements with class .kap
const _html = require("./components/quill-ta/quill-ta-learner.html").default;  
document.querySelectorAll(".kap").forEach((el:HTMLElement) => {
    el.insertAdjacentHTML("beforeend", _html);   
});

// add in comments pages after kap sections
const quill_ta_comments_html = require("./components/quill-ta/quill-ta-comments.html").default;  
document.querySelector(".kap:last-of-type").insertAdjacentHTML("afterend", quill_ta_comments_html);

InitQuillEditors();

// section h1 toggle show/hide section
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