$("ul").on("click", "li", function(){
    // Cross or Un-cross list items 
    $(this).toggleClass("completed");
});


//Click on X to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //extract the text value
        var todoText = $(this).val();
        //create a new li add to ul
        $("ul").append("<li><span>X </span>" + todoText + "</li>");
        // clear text value in input
    }
});



