
/*$(function(){
    $("input").on("click",function(){
    //alert("Hi");
    var numberOfListItem = $("li").length;
var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
$("h1").text($("li").eq(randomChildNumber).text());
    });
    });*/

    $(function(){
        $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var jsImg = new Array("noodles.jpg","rice.jpg","dum.jpg");
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());
    document.getElementById("my_div").innerHTML  = "<img src='"+jsImg[randomChildNumber]+"' width=500 height=300>";
        });
        });

    
       
        