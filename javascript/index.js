$(".btn1").click(  function(){
    $(".x").toggleClass("hide");
    $(".x").toggleClass("show");
    console.log("clicked");
} );
$(".btn2").click(  function(){
    $(".y").toggleClass("hide");
    $(".y").toggleClass("show");
    console.log("clicked");
} );
$(".btn3").click(  function(){
    $(".z").toggleClass("hide");
    $(".z").toggleClass("show");
    console.log("clicked");
} );


// $(document).scroll( function(){
   
    
//     if($(document).scrollTop()<=$("#student-laptop").position().top){
//         console.log("equal");
//         $("#student-laptop").css("background-attachment" , "fixed");
//     }else{
//         $("#student-laptop").css("background-attachment" , "none");
//     }

//     if($(document).scrollTop()<=$("#buisness-laptop").position().top){
//         console.log("equal");
//         $("#buisness-laptop").css("background-attachment" , "fixed");
//     }else{
//         $("#business-laptop").css("background-attachment" , "none");
//     }
// })