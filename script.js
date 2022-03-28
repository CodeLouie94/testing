var cookieBox = document.querySelector(".cookie");

function removeCookie() {
    cookieBox.remove();
}

var frontPic = document.querySelector("#frontPic");

function mouseIn(){
    frontPic.setAttribute('src', 'assets/succulents-2.jpg');
}

function mouseOut(){
    frontPic.setAttribute('src', 'assets/succulents-1.jpg');
}