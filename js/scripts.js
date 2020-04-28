	
let containerOuterWidth = $('.cont-item').outerWidth(); // узнаем ширину контейнера (width + padding)
$(".dot-1").addClass('doton')

$(".dot-1").on("click",function() {$('.cont-item').animate({scrollLeft: 0-5}, 1000);});
$(".dot-2").on('click',function() {$('.cont-item').animate({scrollLeft: containerOuterWidth-5}, 1000);});
$(".dot-3").on("click",function() {$('.cont-item').animate({scrollLeft: containerOuterWidth*2-5}, 1000);});


let r=$('.cont-item').scroll(
function(){
	let r=$(this).scrollLeft()
	if(r<390){
			$(".dot-1").addClass('doton')
			$(".dot-2").removeClass('doton')
			$(".dot-3").removeClass('doton')
	}else if(r>390 && r<2*390){
			$(".dot-1").removeClass('doton')
			$(".dot-2").addClass('doton')
			$(".dot-3").removeClass('doton')
	}else if(r>2*390){
			$(".dot-1").removeClass('doton')
			$(".dot-2").removeClass('doton')
			$(".dot-3").addClass('doton')
	}
});

let e=false;
$("#bu, a").on("click",function() {
	if(e){
		$("#bu").removeClass('close-bu')
		$("#bu").addClass('burger')
		$(".dise").css({'display': "none"})

			e=!e
		
	}else{
		$("#bu").removeClass('burger')
		$("#bu").addClass('close-bu')
		$(".dise").css({'display': "block"})

		e=!e
	}

});
