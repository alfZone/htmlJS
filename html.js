const _SERVIDORh = "http://galeria.esmonserrate.org/2do/";

//include other html page -  is fine for adding page with commun menus in a site
function includeHTML(tag) {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute(tag);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute(tag);
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

// reload a js -  it fine for reload js for set off html elements loaded on real time
function load_js(scriptPath) {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.src= scriptPath;
      head.appendChild(script);
   }
