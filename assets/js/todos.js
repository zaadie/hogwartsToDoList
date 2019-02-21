$("ul").on("click", "li", function(){
    // Cross or Un-cross list items 
    $(this).toggleClass("completed");
});


//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //extract the text value
        var todoText = $(this).val();
        //clear the inputs
        $(this).val("");
        //create a new li add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");
    }
});



