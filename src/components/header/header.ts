/** header functionality */

export default function InitHeader() {
    // Add header section to body
    const header_html = require("./header.html").default;
    document.body.insertAdjacentHTML("afterbegin", header_html);

    const pdf_btn = document.querySelector("#pdf_btn") as HTMLElement;
    const email_btn = document.querySelector("#email_btn") as HTMLElement;

    // add events to header buttons
    pdf_btn.addEventListener("click", printToPDF);

}

function printToPDF() {
    
    window.print();
   
}