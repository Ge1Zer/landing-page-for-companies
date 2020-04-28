	
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



//  var itemOuterWidth = $(this).outerWidth(); // узнаем ширину текущего элемента (width + padding)
//   var itemOffsetLeft = $(this).offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
//   var containerScrollLeft = $(".cont-item").scrollLeft(); // узнаем текущее значение скролла

//   var positionCetner = (containerOuterWidth / 2 - itemOuterWidth / 2); // рассчитываем позицию центра

//   var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера

//   // анимируем
//   $('.cont-item').animate({
//     scrollLeft: scrollLeftUpd
//   }, 400);
// });

	// $('.dot-1').on('click', function(){
	// 		$('.cont-item').animate({scrollLeft: $(".cont-item:nth-child(1)").position()})
	// 		console.log( $(".cont-item:nth-child(1)").position())
	// })

	// $('.dot-2').on('click', function(){
	// 		console.log( '3')
	// 		$('.cont-item').animate({scrollTop: $(".cont-item:nth-child(3)").position()})
	// 		console.log( $(".cont-item:nth-child(2)").position())
	// })

	// $('.dot-3').on('click', function(){
	// 	console.log( '4')
	// 		$('.cont-item').animate({scrollLeft: $(".cont-item:nth-child(6)").position()})
	// 		console.log( $(".cont-item:nth-child(6)").position())
	// })



			
			// height = self.offset().left + self.width();
			// if ($(document).scrollLeft() + windowHWidth >= width) {
			// 	self.addClass('col')

		// let r=$('.team-member-items').scrollLeft()
		// if(r<=widthPlace){
		// 	$('.indi-dot div:nth-child(1)').addClass('col')
		// }else if(r<=2*widthPlace){
		// 	$('.indi-dot div:nth-child(1)').removeClass('col')
		// 	$('.indi-dot div:nth-child(2)').addClass('col')
		// }else if(r<=3*widthPlace){
		// 	$('.indi-dot div:nth-child(2)').removeClass('col')
		// 	$('.indi-dot div:nth-child(3)').addClass('col')
		// }

	// 		let widthPlace = $('.team-member-items').width();
	
 
	// $('.team-member-items').on('scroll', function() {
	// 		$('.team-member-items div:nth-child(3)').each(function() {
	// 				let self = $(this),
	// 				height = self.offset().left - self.width()-7.8;
	// 				console.log(height)

	// 				if(height>0){
	// 						$('.indi-dot div:nth-child(1)').addClass('col')
	// 				}else if(height<0){
	// 					$('.indi-dot div:nth-child(1)').removeClass('col')
	// 				}		
	// 		})

	// 		$('.team-member-items div:nth-child(6)').each(function() {
	// 				let self = $(this),
	// 				height = self.offset().left - self.width()-7.8;
	// 				if(height>0){
	// 						$('.indi-dot div:nth-child(2)').addClass('col')
	// 				}	else if(height<0){
	// 						$('.indi-dot div:nth-child(2)').removeClass('col')
	// 				}		
	// 		})

	// 		$('.team-member-items div:nth-child(9)').each(function() {
	// 				let self = $(this),
	// 				height = self.offset().left - self.width()-7.8;
	// 				if(height>0){
							
	// 						$('.indi-dot div:nth-child(3)').addClass('col')
	// 				}else if(height<0){
	// 					$('.indi-dot div:nth-child(3)').removeClass('col')
	// 				}		
	// 			})
	// })})