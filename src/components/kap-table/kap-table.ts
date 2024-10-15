
export function InitKAPSectionSetup() {
     InitCPIContent();
     Init_quill_ta_learner();
}

function InitCPIContent() {
    // for each kap-table create radio button set for each row:not(.subhead) td:nth-child(1) to td:nth-child(6) named tableid-rowid-tdid
    document.querySelectorAll(".kap-table").forEach((table: HTMLElement, tableid: number) => {
        const rows = table.querySelectorAll("tbody tr:not(.subhead)");
        
        rows.forEach((row: HTMLElement, rowid: number) => {
            if (row.classList.contains("subhead")) return;
            row.id = `table-${tableid}-row-${rowid}`;
            const tds = row.querySelectorAll("td");
            tds.forEach((td: HTMLElement, tdid: number) => {
                if (tdid < 1) return;
                
                if (tdid === 1) {
                    // make contenteditable p for comments
                    const comment_elem = document.createElement("div");
                    comment_elem.contentEditable = "true";
                    comment_elem.classList.add("comments");
                    td.innerHTML = "";
                    td.appendChild(comment_elem);        
                   

                    
                } else {
                    // if td has * set class to 'target'
                    if (td.textContent.trim() === "*") {
                        td.classList.add("target");
                    }

                    const divgrid = createCBSet(`table-${tableid}-row-${rowid}`, tdid.toString());
                    td.innerHTML = divgrid;
                }
                
                
            });
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

function createCBSet(tablerow: string, value: string) {
    const html = require("./kap-table-cb.html").default;

    // replace all {{table-row}} with tablerow and all {{val}} with value
    return html.replace(/{{table-row}}/g, tablerow).replace(/{{val}}/g, value);
}

function Init_quill_ta_learner(){
    // Add learner text areas to all elements with class .kap
    const kap_ta_html = require("./quill-ta-kap-learner-comments.html").default;  
    document.querySelectorAll(".kap").forEach((el:HTMLElement) => {
        el.insertAdjacentHTML("beforeend", kap_ta_html);   
    });   
}