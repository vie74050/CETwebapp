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
>KPA1-7 (8*)
>
>- CPI table
>- Learning text area for Midterm and Final Comments
>- *KPA8 (optional & CPI title, # of CPIs & text are variable)
>
>Midterm Comments  
>Final Comments  
>Signatures. Print names to confirm. Faculty signs final.

See the dev helper `_KAPtemplates` for creating the HTML template pages.  
The templates pages' body content will contain only the KAP CPI tables, which will be editable in LH so faculty can customize KAP text and identify which column cells should be shaded to indicate the target CPI grade.

## 3rd party libraries & frameworks

### Quill js

Used for creating rich text areas.
A working example of building Quill as part of a larger application build pipeline using Webpack.
Reference: [https://github.com/quilljs/webpack-example]  

## Development Usage

Node version `nvm use 20.11.1`.

Install dependencies:

```bash
npm install
```

Build the code using webpack:

```bash

npm run dev

or

npm run build 
```

The code will be build `bundle.js` and `index.html` to the `dist` directory.

Create Templates:

```node
npm run template /*KAP create templates only*/
```

The code will build the `template.html` to the `dist` directory, which combines the selected pages from `_KAPtemplates` into `dist/index.html`.  
Rename this file to the appropriate course (i.e. NSCC7420).  This is the file that can be uploaded to LH, where SMEs can edit text and add the `*` indicator to the table cell that is to be shaded.

Can do `npm run buildall` to run both steps.

### License

MIT
