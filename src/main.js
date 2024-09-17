// cssLoader.js

function loadCSS(filePaths) {
  for (var i = 0; i < filePaths.length; i++) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filePaths[i];
    document.head.appendChild(link);
  }
}

// Usage
var cssFiles = [
  './styles/utils.css',
  './styles/components/home.css',
  './styles/components/about.css',
  './styles/components/gallery.css',
  './styles/components/music.css',
  './styles/components/foot.css',
  './styles/components/credits'
];

loadCSS(cssFiles);
