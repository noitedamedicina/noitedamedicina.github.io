$(function() {
    var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
    $('html, body').css({'background-image': 'url(/bg/ndm15/' + images[Math.floor(Math.random() * images.length)] + ')'});
});