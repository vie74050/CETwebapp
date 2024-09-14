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