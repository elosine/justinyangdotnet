var sidenavdiv = document.getElementById("idsidenav");
var maindiv = document.getElementById("idmaindiv");
var svgNS = "http://www.w3.org/2000/svg";
// M1 ----------------------------------------------------------------- //
var link = document.createElement('a');
var linktxt = document.createTextNode("Home");
link.id = "m1";
link.style.paddingTop = "66px";
link.appendChild(linktxt);
link.href = "#";
sidenavdiv.appendChild(link);
// M2 ----------------------------------------------------------------- //
var link = document.createElement('a');
var linktxt = document.createTextNode("Works");
link.appendChild(linktxt);
link.href = "#";
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
link.href = "#";
sidenavdiv.appendChild(link);
// MENU NAVICON ----------------------------------------------------------- //
var menuicondiv = document.createElement("div");
menuicondiv.id = "idmenuicondiv";
menuicondiv.className = "menuicondiv";
maindiv.appendChild(menuicondiv);
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
tcirc.setAttributeNS(null, "fill", "#2BAE66FF");
tcirc.className.baseVal = "menucirc";
tcirc.addEventListener("click", openNav);
tcirc.addEventListener("mouseenter", circpink);
tcirc.addEventListener("mouseleave", circgreen);
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
var sidenavW = "150px";
var navopen = false;

function circpink() {
  var tcirc = document.getElementById("menuiconcirc");
  tcirc.setAttributeNS(null, "fill", "#FAD0C9FF");
}

function circgreen() {
  var tcirc = document.getElementById("menuiconcirc");
  tcirc.setAttributeNS(null, "fill", "#2BAE66FF");
}

function openNav() {
  if (!navopen) {
    document.getElementById("idsidenav").style.width = sidenavW;
    document.getElementById("idmaindiv").style.marginLeft = sidenavW;
    var tcirc = document.getElementById("menuiconcirc");
    topline.setAttributeNS(null, "stroke-width", (circctr - linesideoffset));
    midline.setAttributeNS(null, "stroke-width", (circctr - linesideoffset));
    btmline.setAttributeNS(null, "stroke-width", (circctr - linesideoffset));
    btmline.setAttributeNS(null, "stroke-linecap", 'square');
    midline.setAttributeNS(null, "stroke-linecap", 'square');
    topline.setAttributeNS(null, "stroke-linecap", 'square');

    midline.setAttributeNS(null, "stroke", "#B0B8B4FF");
    topline.setAttributeNS(null, "stroke", "#B0B8B4FF");
    btmline.setAttributeNS(null, "stroke", "#B0B8B4FF");

    navopen = true;
  } else {
    document.getElementById("idsidenav").style.width = "0";
    document.getElementById("idmaindiv").style.marginLeft = "0";
    var tcirc = document.getElementById("menuiconcirc");
    topline.setAttributeNS(null, "stroke-width", lineW);
    midline.setAttributeNS(null, "stroke-width", lineW);
    btmline.setAttributeNS(null, "stroke-width", lineW);
    btmline.setAttributeNS(null, "stroke-linecap", 'round');
    midline.setAttributeNS(null, "stroke-linecap", 'round');
    topline.setAttributeNS(null, "stroke-linecap", 'round');
        midline.setAttributeNS(null, "stroke", "black");
        topline.setAttributeNS(null, "stroke", "black");
        btmline.setAttributeNS(null, "stroke", "black");
    navopen = false;
  }
}


// blendgroup.setAttribute('style', "isolation: isolate");
// var myname = document.createElement('h6');
// var nametxt = document.createTextNode("Justin Yang");
// myname.appendChild(nametxt);
// sidenavdiv.appendChild(myname);
//
// //resize main body div
// var mainbody = document.getElementById("main");
// var head = document.getElementById("head1");
// var headheight = head.offsetHeight;
// headheight = headheight + 55;
// mainbody.setAttribute( "style", "height:calc(100vh - " + headheight + "px)" );

// FUNCTION: winResize ---------------------------------------------- //
// window.addEventListener('resize', winResize, false);
// function winResize() {
//   headheight = head.offsetHeight;
//   headheight = headheight + 55;
//   mainbody.setAttribute( "style", "height:calc(100vh - " + headheight + "px)" );
// }
