---
---
function getScript(source, callback) {
  var el = document.createElement('script');
  el.onload = callback;
  el.src = source;
  document.body.appendChild(el);
}

//If a files had no dependencies, simply use...
//  loadJS('path/to/file.js');







// use the getScript function to load any scripts who have dependencies
// for example you could use...
// getScript('path/to/your/jQuery.min.js', function(){
//  loadJS('path/to/js/file/with/jQuery/decendencies.js');
//  loadJS('path/to/js/another-file/with/jQuery/decendencies.js');
// });
