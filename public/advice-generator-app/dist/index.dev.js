"use strict";

var adviceText = document.querySelector('.adviceText');
var adviceNum = document.querySelector('.adviceNum');
var img = document.querySelector('img');
var docWidth = document.body.clientWidth;
console.log(docWidth);

if (docWidth <= 375) {
  img.src = 'images/pattern-divider-mobile.svg';
}

function getData() {
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://api.adviceslip.com/advice').then(function (res) {
            return res.json();
          }).then(function (data) {
            console.log(data);
            var getData = data.slip;
            console.log(getData.advice);
            adviceNum.innerHTML = "ADVICE #".concat(getData.id);
            adviceText.innerHTML = "\"".concat(getData.advice, "\"");
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

getData();