$(function(){
	new Swiper('.photoSwiper',{
		effect:"cards",
		grabCursor:true,
	})
	$('.gsap_img_frame.down-bigscale').each(function(i, el){
        const eachEl = $(el).find('.gsap_img_standard')
		const eachprt = $(el).parent();
		gsap.to(eachEl,{
			scrollTrigger:{
				trigger:eachprt,
				start:"-=80%",
				end:"bottom -=50%",
				//markers:true,
				scrub:true,
				toggleClass:'view',
			},
            y:'-600%',
            //scale:'1.05',
			//duration:800,
			
		})
	})

	gsap.registerPlugin(ScrollTrigger);
	const arrays = gsap.utils.toArray('.portfolio_list_wrap > div');
	const btnArrays = gsap.utils.toArray('.policy_progress_bar ul li span.line')


	arrays.forEach((panel, i)=>{
		ScrollTrigger.create({
			trigger: panel,
			start: "top", 
			end:'bottom',
			
		});

		let pannelNumber = $('.policy_progress_bar ul li').eq(i).find('.line');
		let pannelFrame = $(panel).find('.img_frame');

		gsap.to(pannelNumber,{
			scrollTrigger:{
				trigger:pannelFrame,
				start:'top',
				end:'bottom', 
				//markers:true,
				scrub:true,
				toggleClass:'on',
				ease:"none",
			},
			toggleClass:'sss',
			
		})	
		gsap.to('.lines',{
			scrollTrigger:{
				trigger:'.portfolio_list_wrap',
				scrub:true,
				//markers:true,
				start:'top top',
				end:'bottom +=120%',	
				toggleClass:'123',
				onEnter:()=>{
					if($('.lines').width() > '10%'){
						//console.log('10%')
					}
				},
				onEnterBack:()=>{
					//console.log('enter-back')					
				}
			
			},
			ease:"none",
			width:"100%"
		})
	})	

	$(window).on('scroll',function(){
		let winTop = $(window).scrollTop();
		let sectionHeight = $('.portfolio_list_wrap > div').height();
		let sectionOffsetTop = $('.portfolio_list_wrap').offset().top;
		let thumOffsetTop = $('.adfasdfsdasd').offset().top;
		let innerOffset = $('.portfolio_wraps').offset().top;
		//let thisOffset = $('.section_inner .section_cont').eq(numIdx).offset()
		//console.log('win :'+winTop+'offset :'+thumOffsetTop)

		if(winTop > sectionOffsetTop){
			$('.portfolio_list_wrap').addClass('in');
			$('.policy_progress_bar').addClass('in');
		}else{
			$('.portfolio_list_wrap').removeClass('in')
			$('.policy_progress_bar').removeClass('in');
		}
		if(winTop > (thumOffsetTop - sectionHeight)){
			$('.portfolio_list_wrap').removeClass('in').addClass('out');
			$('.policy_progress_bar').removeClass('in').addClass('out');
		}else{
			$('.portfolio_list_wrap').removeClass('out')
			$('.policy_progress_bar').removeClass('out');
		}

		$('.policy_progress_bar ul li').on('click',function(){
			let numIdx = $(this).index();
			//window.scrollTo(0,1000)
			window.scrollTo({
			  top: (innerOffset+(sectionHeight * numIdx)+(innerOffset*0.4)),
			  behavior: 'smooth',
			})


		});
	})

	//lenis smooth scrolling function
	const lenis = new Lenis()

	lenis.on('scroll', (e) => {
	  //console.log(e)
	})

	function raf(time) {
	  lenis.raf(time)
	  requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
})