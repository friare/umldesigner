// standalone jsUML
// by Généreux AKOTENOU
// 20220604_1553

var JSUML2_VERSION = "development";

var scripts = [
    "./css/UDStyle.css",
    "./script/UDDCore.js",
    "./script/UDDModules.js"
];

function addScript(url) {
    if(url.includes('.js')) {
        document.writeln( "<script type=\"text/javascript\" src=\"" + url + "\"></script>" );
    }
    else if(url.includes('.css')) {
        document.writeln( "<link rel=\"stylesheet\" href=\"" + url + "\">" );
    }
}

function loadScripts() {
  for( var i=0; i<scripts.length; i++ ) {
      addScript(scripts[i]);
  }
}

loadScripts();
