import SignaturePad from "signature_pad";

export function InitSignatureSection() {
    const signature_html = require("./signatures.html").default;

    document.querySelector("section:last-of-type").insertAdjacentHTML("afterend", signature_html);

    InitSignaturePad();
}

function InitSignaturePad() {
    const canvas = document.querySelector("canvas#f-fac-signature") as HTMLCanvasElement;
    const facsignaturePad =  new SignaturePad(canvas, {
        minWidth: 0.3,
        maxWidth: 1.5,
        penColor: "rgb(66, 133, 244)"
    });
    // Clear signature pad when f-fac-clear button is clicked
    document.querySelector("button#f-fac-clear").addEventListener("click", () => {
        facsignaturePad.clear();
    });

    //resizeCanvas(canvas, facsignaturePad);

}
function resizeCanvas(canvas: HTMLCanvasElement, facsignaturePad: SignaturePad) {
    const ratio =  Math.max(window.devicePixelRatio || 1, 1);
    // set canvas offsetWidth to canvas width to % of parent element
    
    canvas.width = canvas.parentElement.offsetWidth * 0.7 * ratio;
    canvas.height = 80 * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    facsignaturePad.clear(); // otherwise isEmpty() might return incorrect value
}
