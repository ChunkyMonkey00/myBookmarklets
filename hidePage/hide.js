javascript:(function()%7Bvar imageUrl %3D 'https%3A%2F%2Fi.postimg.cc%2FMp8fg57w%2FScreenshot-2023-11-14-104541.png'%3Bvar div %3D document.createElement('div')%3Bdiv.style.position %3D 'fixed'%3Bdiv.style.top %3D '0'%3Bdiv.style.left %3D '0'%3Bdiv.style.width %3D '100%25'%3Bdiv.style.height %3D '100%25'%3Bdiv.style.backgroundImage %3D 'url(' %2B imageUrl %2B ')'%3Bdiv.style.backgroundSize %3D 'cover'%3Bdiv.style.display %3D 'none'%3Bdiv.style.zIndex %3D '999999'%3Bdocument.body.appendChild(div)%3Bdocument.title %3D "Plus Portals"%3Bvar favicons %3D document.querySelectorAll('link%5Brel%3D"icon"%5D')%3Bfavicons.forEach(function (favicon) %7Bdocument.head.removeChild(favicon)%3B%7D)%3Bvar link %3D document.createElement('link')%3Blink.type %3D 'image%2Fx-icon'%3Blink.rel %3D 'icon'%3Blink.href %3D ''%3Bdocument.head.appendChild(link)%3Bdocument.addEventListener('keydown'%2C function (event) %7Bif (event.key %3D%3D%3D 'o') %7Bdiv.style.display %3D (div.style.display %3D%3D%3D 'none' %3F 'block' %3A 'none')%3B%7D%7D)%7D)()