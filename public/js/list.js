$("ul").on("click","li",function(){
	$(this).toggleClass("completed")
})
$("ul").on("click","li span",function(event){
	event.stopPropagation();
	$(this).find('#myForm').submit();
	$(this).parent().fadeOut(200,function() {
		$(this).remove();
	});
	
	
})

/*
$("input").keypress(function(event){
	if(event.which===13){
		var txt=$(this).val()
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + txt + "</li>")
		$(this).val("");
	}
})
*/


$("h1 i").on("click",function(){
	$("input").fadeToggle(250)
})
