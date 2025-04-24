/** header functionality */

export default function InitHeader() {
   
    // Handle header buttons
    const pdf_btn = document.querySelector("#pdf_btn") as HTMLElement;
    pdf_btn.addEventListener("click", printToPDF);

    const save_btn = document.querySelector("#save_btn") as HTMLElement;
    save_btn.addEventListener("click", saveData);

}

function saveData(){
    // save the HTML content of the page 
    
    // add class "open" to all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add("open");
    });

    // get all input checkboxes
    const checkboxes = document.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((checkbox) => {
        // if checkbox is checked, add class "checked" to parent div
        if (checkbox.checked) {
            // add attribute "checked" to checkbox
            checkbox.setAttribute("checked", "true");
        } 
    });

    // get all input dates and save value
    const dates = document.querySelectorAll("input[type='date']") as NodeListOf<HTMLInputElement>;
    dates.forEach((date) => {
        // if date is not empty, add class "checked" to parent div
        if (date.value !== "") {
            // add attribute "checked" to checkbox
            date.setAttribute("value", date.value);
        } 
    });

    // get all input select and set attribute "selected" to selected option
    const selects = document.querySelectorAll("select") as NodeListOf<HTMLSelectElement>;
    selects.forEach((select) => {
        // if select is not empty, add class "checked" to parent div
        if (select.value !== "") {
            // add attribute "selected" to selected option
            const selected_option = select.querySelector("option:checked") as HTMLOptionElement;
            selected_option.setAttribute("selected", "true");
        } 
    });

    // remove ql-toolbar from quill editor so it can be reinstantiated on load
    const quill_toolbars = document.querySelectorAll(".ql-toolbar") as NodeListOf<HTMLElement>;
    quill_toolbars.forEach((toolbar) => {   
        toolbar.remove();
    });
    
    // get all html content
    const htmlContent = document.documentElement.innerHTML;   
    // replace bundle.js with 'https://vie74050.github.io/CETwebapp/dist/bundle.js'
    const new_htmlContent = htmlContent.replace(/bundle\.js/g, "https://vie74050.github.io/CETwebapp/dist/bundle.js");
    const blob = new Blob([new_htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date();
    const date_string = date.toDateString().replace(/ /g, "-").replace(/,/g, "");
    const sid = document.querySelector("#sid") as HTMLElement;
    const sid_value = sid.innerText? "_sid-" + sid.innerText : "";

    a.href = url;
    a.download = "CET_"+ date_string +  sid_value +".html";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
 
}

function printToPDF() {
    
    window.print();
   
}

