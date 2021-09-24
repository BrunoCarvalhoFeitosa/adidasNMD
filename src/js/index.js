const adidas_Loader = () => {
  TweenMax.to(".first", 1.5, {
    delay: 2,
    top: "-100%",
    ease: Expo.easeInOut
  });
  TweenMax.to(".second", 1.5, {
    delay: 2.4,
    top: "-100%",
    ease: Expo.easeInOut
  });
  TweenMax.to(".third", 1.5, {
    delay: 2.8,
    top: "-100%",
    ease: Expo.easeInOut
  });

  setTimeout(() => {
    document.querySelector('.b-loader').remove();
  }, 4000);
};

const adidas_ZoomSneaker = (imgID, zoom) => {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  img.parentElement.insertBefore(glass, img);

  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  
  function moveMagnifier (e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
  
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
  
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  const getCursorPos = (e) => {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    
    x = e.pageX - a.left;
    y = e.pageY - a.top;
  
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
};

const adidas_RevealGallery = () => {
  const arrowGallery = document.querySelector('.b-gallery__aside img');
  const letterNMD = document.querySelector('.b-gallery__aside-nmd');
  
  arrowGallery.addEventListener('click', (ev) => {
    arrowGallery.classList.add('move');
    
    setTimeout(() => {
      letterNMD.classList.add('reveal');
    }, 850);
    setTimeout(() => {
      document.querySelector('.n').classList.add('reveal');
    }, 200);
    setTimeout(() => {
      document.querySelector('.m').classList.add('reveal');
    }, 1400);
    setTimeout(() => {
      document.querySelector('.d').classList.add('reveal');
    }, 2000);

    document.querySelector('.b-gallery').classList.add('show--gallery');
  });
};

adidas_Loader();
adidas_ZoomSneaker("nmd-image-one", 1.15);
adidas_ZoomSneaker("nmd-image-two", 1.15);
adidas_ZoomSneaker("nmd-image-three", 1.15);
adidas_RevealGallery();