# Development cli runners

Helper node functions to create KAP areas for D2L Learning Hub.
Creates the variable KAP section(s) and injects into `./dist/index.html`.

## Structure

```html

<h1>{{KAP title text}}</h1>

<tbody>
    <!-- each cpi tr row should have 7 td columns unless -->
  <tr>
    <td>CPI question text</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
```

### Options

To create a sub head row (non-cpi), add `subhead` class to row.  
e.g.:

```html

<tr class="subhead">
    <td>CUES</td>
</tr>
```

To indicate cell should be shaded, enter x `<td>x</td>`.
This would be done by instructors in the LH text editor.

## build template files

For building html template files based off of `./dist/index.html` using node, run

```node

node _KAPtemplates/buildTemplate.js

or 

npm run template

```

- CLI prompt to select which templates to include
