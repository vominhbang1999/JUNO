'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
// HEADER 
$(document).ready(function () {
	// FORM SEARCH
	$('.form-search-2 i.fa.fa-search').on('click', function () {
		$('body').css({ 'background-color': '#2f2f2f63' });
		$('.row.header2').css({ 'background-color': 'rgba(47, 47, 47, 0)' });
		if ($('.show-block-search').css('z-index') == 99) {
			$('.show-block-search').css({ 'z-index': 999, 'width': '60%', 'visibility': 'unset' });
			$('.boc-block-search').css({ 'right': '0rem' });
			$('.row.header2').css({ 'right': '17rem' });
			$('.banner img').css({ 'left': '-248px', 'top': '6rem' });
			$('.banner figure').addClass('bochinh-search');
		} else {}
	});
	$('.title-block-search i.fa.fa-times').on('click', function () {
		$('body').css({ 'background-color': 'rgba(47, 47, 47, 0)' });
		$('.row.header2').css({ 'background-color': 'rgba(47, 47, 47, 0)' });
		if ($('.show-block-search').css('z-index') == 999) {
			$('.show-block-search').css({ 'z-index': 99, 'visibility': 'hidden' });
			$('.boc-block-search').css({ 'right': '-20rem' });
			$('.row.header2').css({ 'right': '0rem' });
			$('.banner img').css({ 'left': '0px' });
			$('.banner figure').removeClass('bochinh-search');
		} else {}
	});

	// SHOW MENU GIÀY ẨN 
	$('.show-menu-giay').hover(function () {
		$('.show-menu-giay .menu-hide-giay').css({
			'z-index': '20'
		});
	}, function () {
		$('.show-menu-giay .menu-hide-giay').css({
			'z-index': '0'

		});
	});
	$('.show-menu-tui').hover(function () {
		$('.show-menu-tui .menu-hide-tui').css({
			'z-index': '20'
		});
	}, function () {
		$('.show-menu-tui .menu-hide-tui').css({
			'z-index': '0'
		});
	});
	$('.show-menu-phukien').hover(function () {
		$('.show-menu-phukien .menu-hide-phukien').css({
			'z-index': '20'
		});
	}, function () {
		$('.show-menu-phukien .menu-hide-phukien').css({
			'z-index': '0'
		});
	});
	$('.muiten').hover(function () {
		$(this).find('i').css({ 'transform': 'rotate(180deg)', 'transition': 'all 0.5s ease-in-out' });
	}, function () {
		$(this).find('i').css({ 'transform': 'rotate(0deg)', 'transition': 'all 0.5s ease-in-out' });
	});
	// SHOW MENU MAIN KHI CLICK NÚT BTUTON
	$('button.navbar-toggler').click(function () {
		if ($('.menu-reponsive-main').css('visibility') == 'hidden') {
			$('.menu-reponsive-main').css({ 'transform': 'translateX(-15px)', 'visibility': 'unset', 'top': '0rem', 'left': '1rem' });
			$('body').css({ 'background-color': '#2f2f2f63' });
			$('.row.header2').css({ 'position': 'fixed', 'right': '-8.9rem', 'z-index': 99999, 'background-color': '#1a1919bd', 'top': '1px' });
			$('.form-search-2').css({ 'display': 'none' });
			$('.banner img').css({ 'left': '319px' });
			$('.banner figure').addClass('bochinh');
		} else {}
	});

	$('.header2').click(function () {
		if ($('.menu-reponsive-main').css('visibility') !== 'hidden') {
			$('.menu-reponsive-main').css({ 'transform': 'translateX(-400px)', 'visibility': 'hidden' });
			$('body').css({ 'background-color': 'rgba(47, 47, 47, 0)' });
			$('.row.header2').css({ 'position': 'relative', 'right': '0rem', 'background-color': '#1a191900' });
			$('.form-search-2').css({ 'display': 'block' });
			$('.banner figure').removeClass('bochinh').css({ 'left': '319px' });
			$('.banner figure img').css({ 'left': '0px' });
		} else {}
	});
	// SHOW MENU CHI TIẾT

	$('.show-menu-detail-giay').on('click', function () {
		$('.menu-reponsive-extra').css({ 'visibility': 'unset' });
		$('.menu-reponsive-extra-giay').css({ 'visibility': 'unset', 'opacity': 1, 'left': '2rem' });
		$(this).parents('.menu-reponsive-main').css({ 'visibility': 'hidden', 'opacity': 0 });
	});

	$('.show-menu-detail-tui').on('click', function () {
		$('.menu-reponsive-extra').css({ 'visibility': 'unset' });
		$('.menu-reponsive-extra-tui').css({ 'visibility': 'unset', 'opacity': 1, 'left': '2rem' });
		$(this).parents('.menu-reponsive-main').css({ 'visibility': 'hidden', 'opacity': 0 });
	});

	$('.show-menu-detail-phukien').on('click', function () {
		$('.menu-reponsive-extra').css({ 'visibility': 'unset' });
		$('.menu-reponsive-extra-phukien').css({ 'visibility': 'unset', 'opacity': 1, 'left': '2rem' });
		$(this).parents('.menu-reponsive-main').css({ 'visibility': 'hidden', 'opacity': 0 });
	});

	$('.menu-reponsive-extra .fa-chevron-left').on('click', function () {
		$('.menu-reponsive-extra').css({ 'visibility': 'hidden' });
		$('.menu-reponsive-extra-giay').css({ 'visibility': 'hidden', 'left': '2rem', 'opacity': 0 });
		$('.menu-reponsive-extra-tui').css({ 'visibility': 'hidden', 'left': '2rem', 'opacity': 0 });
		$('.menu-reponsive-extra-phukien').css({ 'visibility': 'hidden', 'left': '2rem', 'opacity': 0 });
		$('.menu-reponsive-main').css({ 'visibility': 'unset', 'opacity': 1, 'left': '1rem' });
	});
});
// HEADER 

// MAIN //  
$(document).ready(function () {
	// $(window).resize(function() {
	// 	if (window.matchMedia('(max-width: 990px)').matches) {
	// 		// functionality for screens smaller than 1200px
	// 		$('.banner img.img-fluid').attr('src', './img/banner_home_responsvie.jpg')
	// 	} else if (window.matchMedia('(min-width: 990px)').matches) {
	// 		$('.banner img.img-fluid').attr('src', './img/banner_home.jpg')
	// 	}
	// });
	$(window).resize(function () {
		var width = $(window).width();
		if (width < 990) {
			$('.banner img.img-fluid').attr('src', './img/banner_home_responsvie.jpg');
			$('.banner img.img-fluid').css({ 'position': 'fixed' });
		} else if (width >= 990) {
			$('.banner img.img-fluid').attr('src', './img/banner_home.jpg');
			$('.banner img.img-fluid').css({ 'position': 'unset' });
		}
	});
});
// MAIN //
//# sourceMappingURL=main.js.map
