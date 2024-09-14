# CET Form Web App

App features:

- Read an HTML page (LH template) that contains the variable elements (KAP CPI tables)
- Add all the the static form elements (non CPI tables)
- Ability to save / load form data for continued editng
- Ability to print to PDF for final faculty signatures and filing archving

## Form elements

Expected form structure:

>Instructions  
>
>- Rating Scale
>- Midterm Evaluation Instructions
>- Final Evaluation Instructions
>
>KPA1-7 (8)
>
>- CPI table
>- Learning text area for Midterm and Final Comments
>...
>*KPA8 (optional & CPI title and text variable)
>
>Midterm Comments  
>Final Comments  
>Signatures  

See the dev helper `_KAPtemplates` for creating the HTML template pages.  
The templates pages' body content will contain only the KAP CPI tables, which will be editable in LH so faculty can customize KAP text and identify which column cells should be shaded to indicate the target CPI grade.

## 3rd party libraries & frameworks

### Quill js

Used for creating rich text areas.
A working example of building Quill as part of a larger application build pipeline using Webpack.
Reference: [https://github.com/quilljs/webpack-example]  

## Development Usage

Install dependencies:

```bash
npm install
```

Build the code:

```bash
npm run dev
```

Create Templates:

```node

npm run template /*KAP create templates only*/

npm run build /*build app and templates*/
```

The code will be built to the `dist` directory. Open `dist/index.html` in a browser to see the result.

### License

MIT
