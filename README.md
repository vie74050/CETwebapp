# CET Form Web App

Form structure:

Instructions  

- Rating Scale
- Midterm Evaluation Instructions
- Final Evaluation Instructions

KPA1  
KPA2  
KPA3  
KPA4  
KPA5  
KPA6  
KPA7  
KPA8 (optional & variable)

Midterm Comments  
Final Comments  
Signatures  

## 3rd party libraries & frameworks

### Quill js

Used for creating rich text areas.
A working example of building Quill as part of a larger application build pipeline using Webpack.
Reference: [https://github.com/quilljs/webpack-example]  

## Usage

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

node _KAPtemplates/buildTemplate.js
```

The code will be built to the `dist` directory. Open `dist/index.html` in a browser to see the result.

### License

MIT
