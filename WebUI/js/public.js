function indexs() {
    var a = 0;
    var moveobj = 0;
    $(".star").click(function () {
        var currentIndex = $(this).index();
        if (moveobj != 0) return;
        if (currentIndex == 1) {
            moveobj = 1;
            hideDesc();
            $(".star").eq(0).css({ "transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-moz-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-webkit-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-o-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-ms-transform": "translateX(-1500px) translateY(850px) scale(1.5)" });
            $(".star").eq(1).css({ "transform": "translateX(60px) translateY(75px) scale(1)", "-moz-transform": "translateX(60px) translateY(75px) scale(1)", "-webkit-transform": "translateX(60px) translateY(75px) scale(1)", "-o-transform": "translateX(60px) translateY(75px) scale(1)", "-ms-transform": "translateX(60px) translateY(75px) scale(1)" });
            $(".star").eq(2).css({ "transform": "translateX(720px) translateY(-150px) scale(0.5)", "-moz-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-webkit-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-o-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-ms-transform": "translateX(720px) translateY(-150px) scale(0.5)" });
            $(".star").eq(3).css({ "transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-moz-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-webkit-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-o-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-ms-transform": "translateX(1150px) translateY(-270px)scale(0.25)" });
            $(".star").eq(4).css({ "transform": "translateX(1900px) translateY(-650px) scale(0)", "-moz-transform": "translateX(1900px) translateY(-650px) scale(0)", "-webkit-transform": "translateX(1900px) translateY(-650px) scale(0)", "-o-transform": "translateX(1900px) translateY(-650px) scale(0)", "-ms-transform": "translateX(1900px) translateY(-650px) scale(0)"});
            $(".star").find(".intro_main").removeClass("animate");
                $(".star_area").append($(".star").eq(0));
                $(".star").eq(4).css({ "transform": "translateX(1900px) translateY(-650px) scale(0)", "-moz-transform": "translateX(1900px) translateY(-650px) scale(0)", "-webkit-transform": "translateX(1900px) translateY(-650px) scale(0)", "-o-transform": "translateX(1900px) translateY(-650px) scale(0)", "-ms-transform": "translateX(1900px) translateY(-650px) scale(0)" });
                showDesc();
                moveobj = 0;
        } else if (currentIndex == 2) {
            moveobj = 1;
            hideDesc();
            $(".star").eq(0).css({ "transform": "translateX(-3000px) translateY(1850px) scale(2.5)", "-moz-transform": "translateX(-3000px) translateY(1850px) scale(2.5)", "-webkit-transform": "translateX(-3000px) translateY(1850px) scale(2.5)", "-o-transform": "translateX(-3000px) translateY(1850px) scale(2.5)", "-ms-transform": "translateX(-3000px) translateY(1850px) scale(2.5)" });
            $(".star").eq(1).css({ "transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-moz-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-webkit-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-o-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-ms-transform": "translateX(-1500px) translateY(850px) scale(1.5)" });
            $(".star").eq(2).css({ "transform": "translateX(60px) translateY(75px) scale(1)", "-moz-transform": "translateX(60px) translateY(75px) scale(1)", "-webkit-transform": "translateX(60px) translateY(75px) scale(1)", "-o-transform": "translateX(60px) translateY(75px) scale(1)", "-ms-transform": "translateX(60px) translateY(75px) scale(1)" });
            $(".star").eq(3).css({ "transform": "translateX(720px) translateY(-150px) scale(0.5)", "-moz-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-webkit-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-o-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-ms-transform": "translateX(720px) translateY(-150px) scale(0.5)" });
            $(".star").eq(4).css({ "transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-moz-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-webkit-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-o-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-ms-transform": "translateX(1150px) translateY(-270px)scale(0.25)" });
            //setTimeout(function () {
                $(".star_area").append($(".star").eq(0));
                $(".star_area").append($(".star").eq(0));
                $(".star").eq(3).css({ "transform": "translateX(1900px) translateY(-650px) scale(0)", "-moz-transform": "translateX(1900px) translateY(-650px) scale(0)", "-webkit-transform": "translateX(1900px) translateY(-650px) scale(0)", "-o-transform": "translateX(1900px) translateY(-650px) scale(0)", "-ms-transform": "translateX(1900px) translateY(-650px) scale(0)" });
               $(".star").eq(4).css({ "transform": "translateX(1900px) translateY(-650px) scale(0)", "-moz-transform": "translateX(1900px) translateY(-650px) scale(0)", "-webkit-transform": "translateX(1900px) translateY(-650px) scale(0)", "transform": "-o-translateX(1900px) translateY(-650px) scale(0)", "transform": "-ms-translateX(1900px) translateY(-650px) scale(0)" });
                showDesc();
                moveobj = 0;
          //  }, 600);
        }
    })
    if ($(".leaf").index() == 0) {
        $(".leaf").find(".intro_main").addClass("animate");
        showDesc();
    }
    $("body").on("swipeleft", function () {
        if (a == 0) {
            a = 1;
            hideDesc();
            $(".star").eq(0).css({ "transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-moz-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-webkit-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-o-transform": "translateX(-1500px) translateY(850px) scale(1.5)", "-ms-transform": "translateX(-1500px) translateY(850px) scale(1.5)" });
            $(".star").eq(1).css({ "transform": "translateX(60px) translateY(75px) scale(1)", "-moz-transform": "translateX(60px) translateY(75px) scale(1)", "-webkit-transform": "translateX(60px) translateY(75px) scale(1)", "transform": "-o-translateX(60px) translateY(75px) scale(1)", "-ms-transform": "translateX(60px) translateY(75px) scale(1)" });
            $(".star").eq(2).css({ "transform": "translateX(720px) translateY(-150px) scale(0.5)", "-moz-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-webkit-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-o-transform": "translateX(720px) translateY(-150px) scale(0.5)", "-ms-transform": "translateX(720px) translateY(-150px) scale(0.5)" })
            $(".star").eq(3).css({ "transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-moz-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-webkit-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-o-transform": "translateX(1150px) translateY(-270px)scale(0.25)", "-ms-transform": "translateX(1150px) translateY(-270px)scale(0.25)" })
            $(".star").eq(4).css({ "transform": "translateX(1900px) translateY(-650px) scale(0)", "-moz-transform": "translateX(1900px) translateY(-650px) scale(0)", "-webkit-transform": "translateX(1900px) translateY(-650px) scale(0)", "-o-transform": "translateX(1900px) translateY(-650px) scale(0)", "-ms-transform": "translateX(1900px) translateY(-650px) scale(0)", });
            $(".star").find(".intro_main").removeClass("animate");
            //setTimeout(function () {
                $(".star_area").append($(".star").eq(0));
                $(".star").eq(4).css({ "transform": "translateX(1900px) translateY(-650px) scale(0)", "-moz-transform": "translateX(1900px) translateY(-650px) scale(0)", "-webkit-transform": "translateX(1900px) translateY(-650px) scale(0)", "-o-transform": "translateX(1900px) translateY(-650px) scale(0)", "-ms-transform": "translateX(1900px) translateY(-650px) scale(0)" });
                showDesc();
           // }, 600);
            setTimeout(function () {
                a = 0;
            }, 2000);
        }
    })
}
function showDesc() {
    currentIco();
    setTimeout(function () {
        $(".circles").show();
        $(".star").eq(0).find(".intro_main").addClass("animate");
        $(".star").eq(0).find(".planet").children("img").addClass("scales");
        $(".cir1").addClass("bord1_scale");
    }, 600)
    setTimeout(function () {
        $(".cir1").removeClass("bord1_scale").addClass("ring1");
        $(".cir2").addClass("ring2");
        cube();
    }, 1600)
    //setInterval(function () {
    //    if ($(".cir2").attr("class").indexOf("cir2_2") == "-1") {
    //        $(".cir2").removeClass("ring2");
    //        $(".cir2").addClass("cir2_2");
    //    }
    //    else {
    //        $(".cir2").removeClass("cir2_2");
    //        $(".cir2").addClass("ring2");
    //    }
    //}, 6000)
}
function hideDesc() {
    $(".circles").hide();
    $(".star").find(".intro_main").removeClass("animate");
    $(".star").find(".planet").children("img").removeClass("scales");
    $(".cir1").removeClass("bord1_scale").removeClass("ring1");
    $(".cir2").removeClass("ring2");
    $(".cir2").removeClass("cir2_2");
}
function currentIco()
{
    $("#cicon span").removeClass("e");
    $("#cicon li[attr=" + $(".star").eq(0).attr("attr") + "]").find("span").addClass("e");
}

var moi = 1;
function cube() {
    if (moi > 360) {
        moi = 1;
    }
    setTimeout(function () {
        //cubemove(moi);
        cube();
    }, 10);
    moi++;
}
/*function cubemove(i) {
    var jiaodu = (0 + i) * 3.1415926535897932384626 / 180;
    newX = 368 * Math.cos(jiaodu) + 370;
    newY = 368 * Math.sin(jiaodu) + 370;
    var jiaodu2 = (180 + i) * 3.1415926535897932384626 / 180;
    newX2 = 368 * Math.cos(jiaodu2) + 370;
    newY2 = 368 * Math.sin(jiaodu2) + 370;
    var jiaodu3 = (360 - i) * 3.1415926535897932384626 / 180;
    newX3 = 347 * Math.cos(jiaodu3) + 370;
    newY3 = 347 * Math.sin(jiaodu3) + 370;
    $(".cube").animate({ left: newX, top: newY }, 50);
    $(".cube2").animate({ left: newX2, top: newY2 }, 50);
    $(".cubenin").animate({ left: newX3, top: newY3 }, 18);
}
*/


