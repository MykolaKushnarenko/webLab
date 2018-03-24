$(".sqr_1_external").mouseenter( function (){
	$(".circle").css("visibility", "visible");
}
);
$(".diamond").mouseenter( function (){
	$(".circle").addClass("move_circle");
}
);
$(".diamond").mouseleave( function (){
	$(".diamond").addClass("move_1");
}
);