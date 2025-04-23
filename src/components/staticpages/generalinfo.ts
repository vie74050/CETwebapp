export default function CreateGeneralInfo() {
    // Add general info form area after header
    const general_info_html = require("./generalinfo.html").default;
    const header_elem = document.querySelector("header") as HTMLElement;
    header_elem.insertAdjacentHTML("afterend", general_info_html);
}