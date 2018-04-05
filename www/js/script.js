window.onload = function () {

document.addEventListener("deviceready", init, false); 
init(); 

};

function init() {
    
    $("#loc-input").on("change", function(){
            console.log($("#loc-input option:selected").val());
    });
    $("#diff-input").on("change", function(){
     console.log($( "#diff-input option:selected").val());   
    });
    $("#leg-input").on("change", function(){
     console.log($( "#leg-input option:selected").val());   
    });
    
    var hideall = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage")
    
//    var hide1 = $("#SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide2 = $("#MoraineLakePage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide3 = $("#MoraineLakePage, #SixGlaciersPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide4 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide5 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide6 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide7 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide8 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide9 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
//    var hide10 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #YamnuskaPage, #LadyPage").hide();
//    var hide11 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #LadyPage").hide();
//    var hide12 = $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage").hide();
    
    
    
//    hideall;
    $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
    
    $("#explore").on("click", function() {
        
       console.log("function is working");
        
        var locationVal = $("#loc-input option:selected").val();
        var difficultyVal = $("#diff-input option:selected").val();
        var legnthVal = $("#leg-input option:selected").val();
        
        
        if(locationVal == "Banff" && difficultyVal == "Easy" && legnthVal == "1 - 4 hours") {
            console.log("1 works");
            $("#MoraineLakePage").show();
//            $("#MoraineLakePage").css("visibility", "hidden");
//            $("#AgnesPage").show();
//            hide1;
//            $("#SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide;
//            $("#SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Banff" && difficultyVal == "Easy" && legnthVal == "5+ hours") {
            console.log("2 works");
            $("#SixGlaciersPage").show();
//            $("#SixGlaciersPage").css("visibility", "hidden");
            
//            hide2.hide();
//            $("#MoraineLakePage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Banff" && difficultyVal == "Moderate" && legnthVal == "1 - 4 hours") {
            console.log("3 works");
            $("#SaddlebackPage").show();
//            $("#SaddlebackPage").css("visibility", "hidden");
            
//            hide3.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Banff" && difficultyVal == "Moderate" && legnthVal == "5+ hours") {
            console.log("4 works");
            $("#CascadePage").show();
//            $("#CascadePage").css("visibility", "hidden");
            
//            hide4.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Banff" && difficultyVal == "Hard" && legnthVal == "1 - 4 hours") {
            console.log("5 works");
            $("#CoryPassPage").show();
//            $("#CoryPassPage").css("visibility", "hidden");
            
//            hide5.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Banff" && difficultyVal == "Hard" && legnthVal == "5+ hours") {
            console.log("6 works");
            $("#AylmerPage").show();
//            $("#AylmerPage").css("visibility", "hidden");
            
//            hide6.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if (locationVal == "Canmore" && difficultyVal == "Easy" && legnthVal == "1 - 4 hours") {
            console.log("7 works");
            $("#GrassiPage").show();
//            $("#GrassiPage").css("visibility", "hidden");
            
//            hide7.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Canmore" && difficultyVal == "Easy" && legnthVal == "5+ hours") {
            console.log("8 works");
            $("#ChesterPage").show();
//            $("#ChesterPage").css("visibility", "hidden");
            
//            hide8.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Canmore" && difficultyVal == "Moderate" && legnthVal == "1 - 4 hours") {
            console.log("9 works");
            $("#PrairiePage").show();
//            $("#PrairiePage").css("visibility", "hidden");
            
//            hide9.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #HaLingPage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Canmore" && difficultyVal == "Moderate" && legnthVal == "5+ hours") {
            console.log("10 works");
            $("#HaLingPage").show();
//            $("#HaLingPage").css("visibility", "hidden");
            
//            hide10.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #YamnuskaPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Canmore" && difficultyVal == "Hard" && legnthVal == "1 - 4 hours") {
            console.log("11 works");
            $("#YamnuskaPage").show();
//            $("#YamnuskaPage").css("visibility", "hidden");
            
//            hide11.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #LadyPage").css("visibility", "visible");
        } else if(locationVal == "Canmore" && difficultyVal == "Hard" && legnthVal == "5+ hours") {
            console.log("12 works");
            $("#LadyPage").show();
//            $("#LadyPage").css("visibility", "hidden");
            
//            hide12.hide();
//            $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage").css("visibility", "visible");
        }
        
    });
    
        
    $("#backmain").on("click", function() {
        $("#MoraineLakePage, #SixGlaciersPage, #SaddlebackPage, #CascadePage, #CoryPassPage, #AylmerPage, #GrassiPage, #ChesterPage, #PrairiePage, #HaLingPage, #YamnuskaPage, #LadyPage").hide();
    });
    
    
    

    
    
    
    
    
    
    

    
    
    
}