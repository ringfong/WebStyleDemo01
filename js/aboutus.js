$(document).ready(function(){        
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
    $(".toIndexContactus").click(function () { 
        window.location.href = '../html/index.html#IndexContactus';
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
    // 漢堡列
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $(".MenuItem").toggleClass('hide_on_bush');
    });
});

