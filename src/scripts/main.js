 // HEADER 
$(document).ready(function () {
	// FORM SEARCH
	$('.form-search-2 i.fa.fa-search').on('click', function () {
		if($('.show-block-search').css('z-index') == 99) {
			$('.show-block-search').css({'z-index': 9999,'width' : '60%','visibility': 'unset'})
			$('.boc-block-search').css({'right': '0rem'})
			$('.row.header2').css({'right' : '17rem'})
			$('.banner-hinh .header2-search').css({'visibility' : 'unset'})
			$('.banner-hinh img').css({'left':'-17rem','top': '6rem'})
			$('body').css({'overflow' : 'hidden'})
		} else {

		}
	});
	$('.title-block-search i.fa.fa-times').on('click', function () {
		if($('.show-block-search').css('z-index') == 9999) {
			$('.show-block-search').css({'z-index': 99,'visibility': 'hidden'})
			$('.boc-block-search').css({'right': '-20rem'})
			$('.row.header2').css({'right' : '0rem'}).removeClass('.header2-search')
			$('.banner-hinh img').css({'left':'0em','top': '6rem'})
			$('.banner-hinh .header2-search').css({'visibility' : 'hidden'})
			$('body').css({'overflow' : 'auto'})
		} else {
		}
	});

	// SHOW MENU GIÀY ẨN 
	$('.show-menu-giay').hover(function () {
			$('.show-menu-giay .menu-hide-giay').css({
				'z-index' : '20',
			})			
		}, function () {
			$('.show-menu-giay .menu-hide-giay').css({
				'z-index' : '0',
				
			})
		}
	);
	$('.show-menu-tui').hover(function () {
			$('.show-menu-tui .menu-hide-tui').css({
				'z-index' : '20',
			})			
		}, function () {
			$('.show-menu-tui .menu-hide-tui').css({
				'z-index' : '0',
			})
		}
	);
	$('.show-menu-phukien').hover(function () {
			$('.show-menu-phukien .menu-hide-phukien').css({
				'z-index' : '20',
			})			
		}, function () {
			$('.show-menu-phukien .menu-hide-phukien').css({
				'z-index' : '0',
			})
		}
	);
	$('.muiten').hover(function () {
			$(this).find('i').css({'transform' : 'rotate(180deg)', 'transition' : 'all 0.5s ease-in-out'})
		}, function () {
			$(this).find('i').css({'transform' : 'rotate(0deg)', 'transition' : 'all 0.5s ease-in-out'})
		})
	// SHOW MENU MAIN KHI CLICK NÚT BTUTON
		$('button.navbar-toggler').click(function(){
			if ($('.menu-reponsive-main').css('visibility') == 'hidden') {
				$('.menu-reponsive-main').css({'transform':'translateX(-15px)','visibility':'unset','top' : '0rem','left' : '1rem'});
				$('body').css({'overflow' : 'hidden'})
				$('.row.header2').css({'position': 'fixed','right': '-12.5rem','z-index':9999,'top': '0px'}).addClass('before-header2')
				$('.form-search-2').css({'display' : 'none'})
				$('.banner-hinh img').css({'position':'fixed','left': '22.7rem','width' : '100%'})
				$('.sanpham-hot').css({'top' : '40rem','position' : 'absolute'})
				
			} else 
			{

			}
		});

		$('.header2').click(function () {
			if ($('.menu-reponsive-main').css('visibility') !== 'hidden') {
				$('.menu-reponsive-main').css({'transform':'translateX(-400px)','visibility' : 'hidden'});
				$('body').css({'overflow' : 'unset'})
				$('.row.header2').css({'position': 'relative','right': '0rem','background-color': '#1a191900'}).removeClass('before-header2')
				$('.form-search-2').css({'display' : 'block'})
				$('.banner-hinh img').css({'position':'unset','left': '0rem','width' : '100%'})
				$('.sanpham-hot').css({'top' : '41rem','position' : 'unset'})
			} else 
			{
	
			}
		})
	// SHOW MENU CHI TIẾT

	$('.show-menu-detail-giay').on('click', function () {
		$('.menu-reponsive-extra').css({'visibility' : 'unset'})
		$('.menu-reponsive-extra-giay').css({'visibility' : 'unset','opacity' : 1,'left' : '2rem'});
		$(this).parents('.menu-reponsive-main').css({'visibility' : 'hidden','opacity' : 0})
	});

	$('.show-menu-detail-tui').on('click', function () {
		$('.menu-reponsive-extra').css({'visibility' : 'unset'})
		$('.menu-reponsive-extra-tui').css({'visibility' : 'unset','opacity' : 1,'left' : '2rem'});
		$(this).parents('.menu-reponsive-main').css({'visibility' : 'hidden','opacity' : 0})
	});

	$('.show-menu-detail-phukien').on('click', function () {
		$('.menu-reponsive-extra').css({'visibility' : 'unset'})
		$('.menu-reponsive-extra-phukien').css({'visibility' : 'unset','opacity' : 1,'left' : '2rem'});
		$(this).parents('.menu-reponsive-main').css({'visibility' : 'hidden','opacity' : 0})
	});

	$('.menu-reponsive-extra .fa-chevron-left').on('click', function () {
		$('.menu-reponsive-extra').css({'visibility' : 'hidden'})
		$('.menu-reponsive-extra-giay').css({'visibility' : 'hidden','left' : '2rem','opacity' : 0});
		$('.menu-reponsive-extra-tui').css({'visibility' : 'hidden','left' : '2rem','opacity' : 0});
		$('.menu-reponsive-extra-phukien').css({'visibility' : 'hidden','left' : '2rem','opacity' : 0});
		$('.menu-reponsive-main').css({'visibility' : 'unset','opacity' : 1,'left' : '1rem'})
	});

});
// HEADER 

// MAIN // MAIN // MAIN // MAIN // MAIN // MAIN // MAIN // MAIN // MAIN 

// SLIDER
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	})

// GIAY
	$('.sanpham-in-box .hover-mau-nen figure').hover(function () {
		// HIỂN THỊ MÀU HOVER MÀU
			$(this).parents('.hover-mau-nen').find('figure').removeClass('active')
			$(this).addClass('active')
		// HIỂN THỊ HOVER SẢN PHẨM
			var a = $(this).find('img').attr('alt')
			$('.sanpham-in-box').find(a).addClass('active-hinh')
		}, function () {
			$(this).addClass('active')
			$('.sanpham-in-box').find('hinh').removeClass('active-hinh')
		}
	);

