var sidenavdiv = document.getElementById("idsidenav");
var maindiv = document.getElementById("idMainContainerDiv");
var svgNS = "http://www.w3.org/2000/svg";
// Name ----------------------------------------------------------------- //
var mname = document.createElement('h6');
var mnametxt = document.createTextNode("J u s t i n  Y a n g");
mname.id = "mname";
mname.appendChild(mnametxt);
sidenavdiv.appendChild(mname);
// M1 ----------------------------------------------------------------- //
var link = document.createElement('a');
var linktxt = document.createTextNode("Home");
link.id = "m1";
link.appendChild(linktxt);
link.href = "index.html";
sidenavdiv.appendChild(link);
// M2 ----------------------------------------------------------------- //
var link = document.createElement('a');
var linktxt = document.createTextNode("Works");
link.appendChild(linktxt);
link.href = "works.html";
sidenavdiv.appendChild(link);
// M3 ----------------------------------------------------------------- //
var link = document.createElement('a');
var linktxt = document.createTextNode("Bio");
link.appendChild(linktxt);
link.href = "#";
sidenavdiv.appendChild(link);
// M4 ----------------------------------------------------------------- //
var link = document.createElement('a');
var linktxt = document.createTextNode("Contact");
link.appendChild(linktxt);
link.href = "contact.html";
sidenavdiv.appendChild(link);
// MENU NAVICON ----------------------------------------------------------- //
var menuicondiv = document.createElement("div");
menuicondiv.id = "idmenuicondiv";
menuicondiv.className = "menuicondiv";
document.body.appendChild(menuicondiv);
// maindiv.appendChild(menuicondiv);
var menuicondivW = document.getElementById('idmenuicondiv').offsetWidth;
var menuicondivH = document.getElementById('idmenuicondiv').offsetHeight;
var tsvgcont = document.createElementNS(svgNS, "svg");
tsvgcont.setAttributeNS(null, "id", "idmenuiconsvgcont");
tsvgcont.className.baseVal = "menuiconsvgcont";
document.getElementById("idmenuicondiv").appendChild(tsvgcont);
var tcirc = document.createElementNS(svgNS, "circle");
tcirc.setAttributeNS(null, "id", "menuiconcirc");
tcirc.setAttributeNS(null, "cx", (menuicondivW / 2));
tcirc.setAttributeNS(null, "cy", (menuicondivH / 2));
tcirc.setAttributeNS(null, "r", (menuicondivW / 2));
tcirc.setAttributeNS(null, "stroke", "none");
tcirc.setAttributeNS(null, "fill", "#2DA8D8FF");
// tcirc.setAttributeNS(null, "fill", "#2BAE66FF#2DA8D8FF");
tcirc.setAttributeNS(null, "cursor", "pointer");
tcirc.className.baseVal = "menucirc";
tcirc.addEventListener("click", openNav);
document.getElementById("idmenuiconsvgcont").appendChild(tcirc);
var linetopoffset = 16;
var linesideoffset = 12;
var circctr = menuicondivH / 2;
var lineW = 6;
var topline = document.createElementNS(svgNS, "line");
topline.setAttributeNS(null, "id", "menutopline");
topline.setAttributeNS(null, "x1", linesideoffset);
topline.setAttributeNS(null, "y1", linetopoffset);
topline.setAttributeNS(null, "x2", (menuicondivW - linesideoffset));
topline.setAttributeNS(null, "y2", linetopoffset);
topline.setAttributeNS(null, "stroke", "black");
topline.setAttributeNS(null, "stroke-width", lineW);
topline.setAttributeNS(null, "stroke-linecap", 'round');
topline.className.baseVal = "menuline";
document.getElementById("idmenuiconsvgcont").appendChild(topline);
var midline = document.createElementNS(svgNS, "line");
midline.setAttributeNS(null, "id", "menumidline");
midline.setAttributeNS(null, "x1", linesideoffset);
midline.setAttributeNS(null, "y1", (menuicondivH / 2));
midline.setAttributeNS(null, "x2", (menuicondivW - linesideoffset));
midline.setAttributeNS(null, "y2", (menuicondivH / 2));
midline.setAttributeNS(null, "stroke", "black");
midline.setAttributeNS(null, "stroke-width", lineW);
midline.setAttributeNS(null, "stroke-linecap", 'round');
midline.className.baseVal = "menuline";
document.getElementById("idmenuiconsvgcont").appendChild(midline);
var btmline = document.createElementNS(svgNS, "line");
btmline.setAttributeNS(null, "id", "menubtmline");
btmline.setAttributeNS(null, "x1", linesideoffset);
btmline.setAttributeNS(null, "y1", (menuicondivH - linetopoffset));
btmline.setAttributeNS(null, "x2", (menuicondivW - linesideoffset));
btmline.setAttributeNS(null, "y2", (menuicondivH - linetopoffset));
btmline.setAttributeNS(null, "stroke", "black");
btmline.setAttributeNS(null, "stroke-width", lineW);
btmline.setAttributeNS(null, "stroke-linecap", 'round');
btmline.className.baseVal = "menuline";
document.getElementById("idmenuiconsvgcont").appendChild(btmline);
// CLOSE/OPEN DIV FUNCTION ------------------------------------------- //
var sidenavW = "145px";
var navopen = false;
function openNav() {
  if (!navopen) {
    // Open side menu by changing its width
    sidenavdiv.style.width = sidenavW;
    //Menu Icon Animation
    tcirc.setAttributeNS(null, "fill", "#FAD0C9FF");
    topline.setAttributeNS(null, "stroke-width", (circctr - linesideoffset - 3));
    midline.setAttributeNS(null, "stroke-width", (circctr - linesideoffset - 3));
    btmline.setAttributeNS(null, "stroke-width", (circctr - linesideoffset - 3));
    btmline.setAttributeNS(null, "stroke-linecap", 'square');
    midline.setAttributeNS(null, "stroke-linecap", 'square');
    topline.setAttributeNS(null, "stroke-linecap", 'square');
    midline.setAttributeNS(null, "stroke", "black");
    topline.setAttributeNS(null, "stroke", "black");
    btmline.setAttributeNS(null, "stroke", "black");
    navopen = true;
  } else {
    document.getElementById("idsidenav").style.width = "0";
    topline.setAttributeNS(null, "stroke-width", lineW);
    midline.setAttributeNS(null, "stroke-width", lineW);
    btmline.setAttributeNS(null, "stroke-width", lineW);
    btmline.setAttributeNS(null, "stroke-linecap", 'round');
    midline.setAttributeNS(null, "stroke-linecap", 'round');
    topline.setAttributeNS(null, "stroke-linecap", 'round');
    midline.setAttributeNS(null, "stroke", "black");
    topline.setAttributeNS(null, "stroke", "black");
    btmline.setAttributeNS(null, "stroke", "black");
    tcirc.setAttributeNS(null, "fill", "#2DA8D8FF");
    navopen = false;
  }
}
// Get rid of hover events on touchscreens ////////////////////////
function hasTouch() {
  return 'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
}
if (hasTouch()) { // remove all :hover stylesheets
  try { // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;
      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;
        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
// FUNCTION: winResize ---------------------------------------------- //
window.addEventListener('resize', winResize, false);

function winResize() {
  if (window.matchMedia('screen and (max-width: 768px)').matches) {

  }
}
