import "quill/dist/quill.snow.css";
import Quill from "quill/core";
import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";
import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";

Quill.register({
  "modules/toolbar": Toolbar,
  "themes/snow": Snow,
  "formats/bold": Bold,
  "formats/italic": Italic,
  "formats/header": Header,
});

function InitQuillEditors() {
  // get the .editor element and create a new Quill instance
  const editors = document.querySelectorAll(".editor") ;

  if (editors === null) {
    throw new Error("No .editor element found in the parent element");
  }else{
    // foreach editor element, create a new Quill instance
    editors.forEach((editor: HTMLElement) => {
      new Quill(editor, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic"],
            [{ header: "1" }, { header: "2" }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
      }); 
    });
  }
}

export default InitQuillEditors;
