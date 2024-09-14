var fs = require("fs");
var path = require("path");

// get all the html files in this directory
var kap_templates = {};
var files = fs.readdirSync(__dirname);
files.forEach(function (file) {
  if (path.extname(file) === ".html") {
    var name = path.basename(file, ".html");
    var content = fs.readFileSync(path.join(__dirname, file), "utf8");
    kap_templates[name] = content;
  }
  //console.log("kap_templates", kap_templates);
});

// read the index.html file from parent dist directory
var src_index = "no index.html file found";

try {
  src_index = fs.readFileSync(path.join(__dirname, "../dist/index.html"), "utf8");
  
  // create new file using src index.html as base, but duplicate <section class='kap'> for each kap_template
  var kap_template = src_index.match(
    /<section class="kap">[\s\S]*?<\/section>/g
  )[0];
  //console.log("kap_template", kap_template);
  
  var new_index = src_index.replace(
    /<section class="kap">[\s\S]*?<\/section>/g,
    function (match) {
      var kaps = "";
      for (var name in kap_templates) {
        // look for h1 tag in kap_template
        let kap = kap_templates[name];
        let h1 = kap.match(/<h1>[\s\S]*?<\/h1>/g);
        let tbody = kap.match(/<tbody>[\s\S]*?<\/tbody>/g);
        let new_kap = kap_template.replace(/<h1>[\s\S]*?<\/h1>/g, h1[0]);
        new_kap = new_kap.replace(/<tbody>[\s\S]*?<\/tbody>/g, tbody[0]);
        kaps += new_kap;
      }
      return kaps;
    }
  );

  // write new template.html file to ./dist
  fs.writeFileSync(path.join(__dirname, "../dist/template.html"), new_index);
  
} catch (e) {
  //console.log(src_index);
}

