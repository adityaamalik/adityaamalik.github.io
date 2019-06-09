var todotext;

$("ul").on("click","li",function(){

	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" + todotext + "</li>");

	}
});

$(".fa-plus").click(function(){

	todotext = $("input[type='text']").val();
		$("input[type='text']").val("");
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>" + todotext + "</li>");	
});