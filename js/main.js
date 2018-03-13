const img = document.querySelector('.cat1');

img.style.position = 'absolute';
img.style.left = '0px';
img.style.bottom = '0px';


var watchKittyFall = function() {
  const left = parseInt(img.style.left);
  const right = left + 2;
  img.style.left = right + 'px';

  if (left > (window.innerWidth-img.width)) {
    img.style.left = '0px';
    img.style.left = '0px';

  } //img.clientWidth
};
window.setInterval(watchKittyFall, 10);
