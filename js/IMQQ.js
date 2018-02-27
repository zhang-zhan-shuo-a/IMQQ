$(document).ready(function(){
    /*登录*/
    $("#loginIn").hide();
    $("#LoginIn").click(function(){
        $("#loginIn").toggle();
    })
    $("#X").click(function(){
        $("#loginIn").hide();
    })
    /*滚动加载和视差滚动*/
    var scrollTop=$("document").scrollTop();
    var windowHeight=$("window").height();
    var bg11high=$("h1").height();
    var bg1top=$("h1").offset(0);
    var bg2high=$("#contect").height()
    var bg2top=$("#contect").offset(0);
    var bg3high=$(".file").height();
    var bg3top=$(".file").offset(0);
    function loading(){
        if((bg1top+bg1high-windowHeight)<(scollTop+40)){
            $(".bg1").css({"background-image":"url(../material/bg1_1600.jpg)"});
        }
        if((bg2top+bg2hight-windowHeight)<(scollTop+40)){
            $(".bg2").css({"background-image":"url(../material/avds.jpg)"});
        }
        
    }
    $("document").scroll(loading())
})