"use strict";

var docWidth = document.body.clientWidth;
console.log(docWidth);
var img = document.querySelectorAll('img');
console.log(img);

for (var i = 0; i < img.length; i++) {
  var n = i + 1;

  if (docWidth < 912) {
    img[i].src = "./images/".concat(n, "__tablet.jpg");
    console.log(img[i].src);
  } else {
    img[i].src = "./images/".concat(n, "__desk.jpg");
    console.log(img[i].src);
  }
}