import "./styles.css";
import QuillTA_L from "./components/quill-ta/quill-ta";

document.querySelectorAll(".kap").forEach((el:HTMLElement) => {
    // add learner text areas (quill-ta) to all elements with class .kap
    QuillTA_L(el);
});
