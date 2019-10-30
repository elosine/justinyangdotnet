window.addEventListener('resize', winResize, false);

var sidenavdiv = document.getElementById("sidenav");
var myname = document.createElement('h6');
var nametxt = document.createTextNode("Justin Yang");
myname.appendChild(nametxt);
sidenavdiv.appendChild(myname);

var m1 = document.createElement('a');
var m1txt = document.createTextNode("Home");
m1.appendChild(m1txt);
m1.href = "index.html";
sidenavdiv.appendChild(m1);

var sidenavdiv = document.getElementById("sidenav");
var cat = document.createElement('h5');
var cattxt = document.createTextNode("WORKS:");
cat.appendChild(cattxt);
sidenavdiv.appendChild(cat);

var m1 = document.createElement('a');
var m1txt = document.createTextNode("A colony of black spots: compositions for interactive sound and image");
m1.appendChild(m1txt);
m1.href = "a_colony_of_black_spots.html";
sidenavdiv.appendChild(m1);

//resize main body div
var mainbody = document.getElementById("main");
var head = document.getElementById("head1");
var headheight = head.offsetHeight;
headheight = headheight + 55;
mainbody.setAttribute( "style", "height:calc(100vh - " + headheight + "px)" );
// FUNCTION: winResize ---------------------------------------------- //
function winResize() {
  headheight = head.offsetHeight;
  headheight = headheight + 55;
  mainbody.setAttribute( "style", "height:calc(100vh - " + headheight + "px)" );
}
