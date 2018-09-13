function precarica( img ) {
			$( img ).each( function () {
				$( '<img/>' )[ 0 ].src = this;
			});
		}
		precarica([
				'img/map-semarang-timur.png',
				'img/map-semarang-kota.png',
				'img/map-semarang-utara.png',
				'img/map-semarang-barat.png'
			]);
				
	/*******jQuery for external title*********/
				
		jQuery(document).ready(function () {
			$('.title-blue').mouseout(function(){
				$("#map").attr('src', 'img/map-semarang.png');
			}),
			$('.title-blue').mouseover( function(){
				$("#map").attr('src', 'img/map-semarang-barat.png');
			});
			$('.title-red').mouseout(function(){
				$("#map").attr('src', 'img/map-semarang.png');
			}),
			$('.title-red').mouseover( function(){
				$("#map").attr('src', 'img/map-semarang-utara.png');
			});
			$('.title-green').mouseout(function(){
				$("#map").attr('src', 'img/map-semarang.png');
			}),
			$('.title-green').mouseover( function(){
				$("#map").attr('src', 'img/map-semarang-kota.png');
			});	
			$('.title-yellow').mouseout(function(){
				$("#map").attr('src', 'img/map-semarang.png');
			}),
			$('.title-yellow').mouseover( function(){
				$("#map").attr('src', 'img/map-semarang-timur.png');
			});
		});