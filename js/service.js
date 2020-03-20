// 宣告接收文件
var IntroductionContent = {
    "項目一" : "牙醫還鼓勵通過恰當的個人衛生，及一年兩次的定期檢查來進行專業的清潔和評估，以此預防口腔疾病。口腔狀況會反映出像骨質疏鬆、糖尿病或癌症這樣的全身性", 
    "項目二" : "2019年9月14日 - 健保制度下，民眾可能希望一次掛號費100元就可以補完所有的蛀牙，但是，卻不知道事實上就很難又快又好又便宜。 標籤: 牙醫, 蛀牙, 補牙齒, 補牙.", 
    "項目三" : "2019年8月29日 - 關於看牙醫，過程到底是不是真的那麼痛，我也不太記得了，但是那個電鑽聲和看不到醫生接下來要幹嘛的恐懼感，總是會讓我感到害怕。直到我遇見 ...", 
    "項目四" : "提供全省優質牙醫診所介紹，最新最完整的牙齒醫學新聞、牙齒保健、植牙與矯正Q & A；牙醫師資訊、演講、進修公告、牙醫網站設計和行銷。", 
    "項目五" : "2020年1月6日 - 診所小姐跑來診所鬧，還被牙醫師說要提告」；「整形外科的醫師有一堆女朋友，其中一個還幫他生小孩但是沒有名分」。 女牙醫最後苦口婆心勸告，「拜託 ...",
    "項目六" : "當我們使用 $(“#SS1”).attr(“src”, “images/small2.jpg”); 就可以把小圖片的的路徑，更改成為 images/small2.jpg 這個值。"
};

$(document).ready(function(){    
    // 點擊切換項目
    $(".ServiceMenuItem").click(function () { 
        // 資料還原
        $(".IntroductionLeftArea").html("");
        // 取得項目名稱
        let item = $(this).find(".ServiceMenuItemText").text().trim();
        // 寫入格式
        let lefthtml = "<h2>" + 
        item + "</h2><p>" + 
        IntroductionContent[item] + "</p>";
        // 填入文字
        $(".IntroductionLeftArea").html(lefthtml);
        // 取得圖片
        let rightimg = $(this).find("img").attr("src");
        // 載入圖片
        $(".IntroductionPhoto").attr("src", rightimg);
        if(window.screen.width <= 480){
            $('html, body').animate({scrollTop: $('#ToServiceContent').offset().top}, 1000)
        }        
    });
    // 漢堡列
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $(".MenuItem").toggleClass('hide_on_bush');
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
});
