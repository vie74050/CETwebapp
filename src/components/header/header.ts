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

    // remove ql-toolbar from quill editor
    const quill_toolbars = document.querySelectorAll(".ql-toolbar") as NodeListOf<HTMLElement>;
    quill_toolbars.forEach((toolbar) => {   
        toolbar.remove();
    });
    
    // get all html content
    const htmlContent = document.documentElement.innerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });
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

