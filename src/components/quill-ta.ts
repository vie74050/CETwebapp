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

/** Creates text area with the format:
 * <div class="_richtext">
 *    <h4>Title</h4>
      <div class="toolbar"></div>
      <div class="editor"></div>
   </div>
 * 
 * @param el 
 */
function QuillTA(el: HTMLElement)  {

    this.quill = new Quill(el, {
        theme: "snow",
    });
}

export default QuillTA;
