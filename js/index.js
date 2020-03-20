$(document).ready(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 3000, // 秒數
    slideshow: true,
    animationLoop: true,
  });
  // 漢堡列
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $(".MenuItem").toggleClass('hide_on_bush');
});
  // 點選Menu進行本頁跳轉至聯絡我們
  $('.toIndexContactus').click(function() {
    $('html, body').animate({scrollTop: $('#IndexContactus').offset().top}, 1000)
  });
  $('.GoogleAPI').mouseover(function() {
    $('.MapTextArea').css('display', 'flex');
    $('.MapIframe').css('height', '70%');
    $('.MapIframe').css('border-radius', '20px 20px 0 0');
  });
  $('.GoogleAPI').mouseout(function() {
    $('.MapTextArea').css('display', '');
    $('.MapIframe').css('height', '');
    $('.MapIframe').css('border-radius', '');
  });
  // 跳轉到關於
  $(".AboutusLink").click(function () { 
    window.location.href = '../html/aboutus.html';
  });
  // 跳轉到服務
  $(".ServiceNormalcard").click(function () { 
    window.location.href = '../html/service.html';
  });
  // Menu跳轉
  $("#toservice").click(function () { 
    window.location.href = '../html/service.html';
  });
  $("#toteam").click(function () { 
    window.location.href = '../html/team.html';
  });
  $("#toaboutus").click(function () { 
    window.location.href = '../html/aboutus.html';
  });
  // 底部跳轉
  $(".FooterLink ul li:nth-child(1)").click(function () { 
    window.location.href = '../html/service.html';
  });
  $(".FooterLink ul li:nth-child(2)").click(function () { 
    window.location.href = '../html/team.html';
  });
  $(".FooterLink ul li:nth-child(3)").click(function () { 
    window.location.href = '../html/aboutus.html';
  });
});

