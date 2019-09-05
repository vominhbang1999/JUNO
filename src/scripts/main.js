// Main
$(document).ready(function () {
	$('.form-search-2 i.fa.fa-search').on('click', function () {
		$('#search_show').addClass('active');
		$(this).click(function() {
			$('#search_show').removeClass('active');
		})
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
});
