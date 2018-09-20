$(document).ready(function ()
{
    $("#hide").click(function ()
    {
        $("#p1").hide();
    });
    $("#show").click(function () {
        $("#p1").show();
    });
    //$("#p2").hover(function ()
    //{
    //    alert("You hovered");
    //});
    $("input").focus(function ()      //using attribute
    {
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function ()
    {
        $(this).css("background-color", "#ffffff");
    });
    $("#p3").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });
    $("#hide1").click(function () {
        $("#p4").hide(1000);
    });
    $("#show1").click(function () {
        $("#p4").show(1000);
    });
    $("#flip").click(function () {
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function () {
        $("#panel").stop();
    });
    $("#btn1").click(function () {
        alert("Text: " + $("#p5").text());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#p5").html());
    });
    $("#b1").click(function () {
        $("#div1").fadeIn("slow");
    });
    $("#b2").click(function () {
        $("#div2").fadeIn(3000);
    });
    $("#fadeout").click(function () {
        $("#div1").fadeOut(3000);
        $("#div2").fadeOut(3000);
    });

});
