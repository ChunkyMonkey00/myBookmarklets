var imageUrl = 'https://i.postimg.cc/Mp8fg57w/Screenshot-2023-11-14-104541.png';
var div = document.createElement('div');
div.style.position = 'fixed';
div.style.top = '0';
div.style.left = '0';
div.style.width = '100%';
div.style.height = '100%';
div.style.backgroundImage = 'url(' + imageUrl + ')';
div.style.backgroundSize = 'cover';
div.style.display = 'none';
div.style.zIndex = '999999';
document.body.appendChild(div);
document.title = "Plus Portals";
var favicons = document.querySelectorAll('link[rel="icon"]');
favicons.forEach(function (favicon) {
document.head.removeChild(favicon);
});
var link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'icon';
link.href = '';
document.head.appendChild(link);
document.addEventListener('keydown', function (event) {
  if (event.key === 'o') {
    div.style.display = (div.style.display === 'none' ? 'block' : 'none');
  }
});
