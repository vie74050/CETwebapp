export default function CreateQuillCommentsSection() {
    const quill_ta_comments_html = require("./quill-ta-comments.html").default; 
    
    const elem = document.querySelector(".kap:last-of-type") as HTMLElement;
    elem.insertAdjacentHTML("afterend", quill_ta_comments_html );
}