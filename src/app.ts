import QuillTA from "./components/quill-ta";

// create a new instance of QuillTA for each "_richtext>editor" element
document.querySelectorAll("._richtext>.editor").forEach((el:HTMLElement) => {
    new QuillTA(el);
    console.log("QuillTA instance created for", el);
});