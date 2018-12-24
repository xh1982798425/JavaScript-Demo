var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for (var index = 1; index < 6; index++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + index + '.jpg');
  newImage.onclick = function (e) {
    getImg(e.target.src);
  }
  thumbBar.appendChild(newImage);
}

function getImg(obj) {
  displayedImage.setAttribute('src', obj);
}


/* 编写 变亮/变暗 按钮 */
btn.onclick = function (e) {
  var a = e.target.getAttribute('class');
  if (a === 'dark') {
    e.target.setAttribute('class', 'light');
    e.target.textContext = "变亮";
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5';
  } else {
    e.target.setAttribute('class', 'dark');
    e.target.textContext = "变暗";
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}