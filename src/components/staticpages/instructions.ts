export default function CreateInstructions() {
    
    const header_elem = document.querySelector("header") as HTMLElement;
    const instructions_elem = document.querySelector("section#instructions") as HTMLElement;
    const instructions_html = require("./instructions.html").default;

    // Check if <section id="instructions"> exists in the page
    if(instructions_elem) {
        // move the instructions section to after the header
        instructions_elem.parentNode?.removeChild(instructions_elem);
        header_elem.insertAdjacentHTML("afterend", instructions_elem.outerHTML);
    }else{
        header_elem.insertAdjacentHTML("afterend", instructions_html);
    }
    
}