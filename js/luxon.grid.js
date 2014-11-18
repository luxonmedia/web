$(function()
{
	// ON LOAD
	winunit = Math.floor($(window).width()/100);

	$('.grid_1').css('width',winunit*6);
	$('.grid_1').css('margin-left',winunit*1);
	$('.grid_1').css('margin-right',winunit*1);
	$('.grid_2').css('width',winunit*14);
	$('.grid_2').css('margin-left',winunit*1);
	$('.grid_2').css('margin-right',winunit*1);	
	$('.grid_3').css('width',winunit*22);
	$('.grid_3').css('margin-left',winunit*1);
	$('.grid_3').css('margin-right',winunit*1);	
	$('.grid_4').css('width',winunit*30);
	$('.grid_4').css('margin-left',winunit*1);
	$('.grid_4').css('margin-right',winunit*1);
	$('.grid_5').css('width',winunit*38);
	$('.grid_5').css('margin-left',winunit*1);
	$('.grid_5').css('margin-right',winunit*1);	
	$('.grid_6').css('width',winunit*46);
	$('.grid_6').css('margin-left',winunit*1);
	$('.grid_6').css('margin-right',winunit*1);
	$('.grid_7').css('width',winunit*46);
	$('.grid_7').css('margin-left',winunit*1);
	$('.grid_7').css('margin-right',winunit*1);	
	$('.grid_8').css('width',winunit*62);
	$('.grid_8').css('margin-left',winunit*1);
	$('.grid_8').css('margin-right',winunit*1);	
	$('.grid_9').css('width',winunit*70);
	$('.grid_9').css('margin-left',winunit*1);
	$('.grid_9').css('margin-right',winunit*1);	
	$('.grid_10').css('width',winunit*78);
	$('.grid_10').css('margin-left',winunit*1);
	$('.grid_10').css('margin-right',winunit*1);	
	$('.grid_11').css('width',winunit*86);
	$('.grid_11').css('margin-left',winunit*1);
	$('.grid_11').css('margin-right',winunit*1);	
	$('.grid_12').css('width',winunit*94);
	$('.grid_12').css('margin-left',winunit*1);
	$('.grid_12').css('margin-right',winunit*1);	
	
	$('.container_12').css('margin-left',winunit*2);
	$('.container_12').css('margin-right',winunit*2);
	$('.container_12').css('width',winunit*96);

	$('.container_12 .prefix_1').css('padding-left',winunit*8);
	$('.container_12 .prefix_2').css('padding-left',winunit*16);
	$('.container_12 .prefix_3').css('padding-left',winunit*24);
	$('.container_12 .prefix_4').css('padding-left',winunit*32);
	$('.container_12 .prefix_5').css('padding-left',winunit*40);
	$('.container_12 .prefix_6').css('padding-left',winunit*48);
	$('.container_12 .prefix_7').css('padding-left',winunit*56);
	$('.container_12 .prefix_8').css('padding-left',winunit*64);
	$('.container_12 .prefix_9').css('padding-left',winunit*72);
	$('.container_12 .prefix_10').css('padding-left',winunit*80);
	$('.container_12 .prefix_11').css('padding-left',winunit*88);
	$('.container_12 .prefix_12').css('padding-left',winunit*96);

	$('.container_12 .suffix_1').css('padding-right',winunit*8);
	$('.container_12 .suffix_2').css('padding-right',winunit*16);
	$('.container_12 .suffix_3').css('padding-right',winunit*24);
	$('.container_12 .suffix_4').css('padding-right',winunit*32);
	$('.container_12 .suffix_5').css('padding-right',winunit*40);
	$('.container_12 .suffix_6').css('padding-right',winunit*48);
	$('.container_12 .suffix_7').css('padding-right',winunit*56);
	$('.container_12 .suffix_8').css('padding-right',winunit*64);
	$('.container_12 .suffix_9').css('padding-right',winunit*72);
	$('.container_12 .suffix_10').css('padding-right',winunit*80);
	$('.container_12 .suffix_11').css('padding-right',winunit*88);
	$('.container_12 .suffix_12').css('padding-right',winunit*96);
		
	// ON WINDOW CHANGE
	$(window).resize( function()
	{

		winunit = Math.floor($(window).width()/100);

		$('.grid_1').css('width',winunit*6);
		$('.grid_1').css('margin-left',winunit*1);
		$('.grid_1').css('margin-right',winunit*1);
		$('.grid_2').css('width',winunit*14);
		$('.grid_2').css('margin-left',winunit*1);
		$('.grid_2').css('margin-right',winunit*1);	
		$('.grid_3').css('width',winunit*22);
		$('.grid_3').css('margin-left',winunit*1);
		$('.grid_3').css('margin-right',winunit*1);	
		$('.grid_4').css('width',winunit*30);
		$('.grid_4').css('margin-left',winunit*1);
		$('.grid_4').css('margin-right',winunit*1);
		$('.grid_5').css('width',winunit*38);
		$('.grid_5').css('margin-left',winunit*1);
		$('.grid_5').css('margin-right',winunit*1);	
		$('.grid_6').css('width',winunit*46);
		$('.grid_6').css('margin-left',winunit*1);
		$('.grid_6').css('margin-right',winunit*1);
		$('.grid_7').css('width',winunit*46);
		$('.grid_7').css('margin-left',winunit*1);
		$('.grid_7').css('margin-right',winunit*1);	
		$('.grid_8').css('width',winunit*62);
		$('.grid_8').css('margin-left',winunit*1);
		$('.grid_8').css('margin-right',winunit*1);	
		$('.grid_9').css('width',winunit*70);
		$('.grid_9').css('margin-left',winunit*1);
		$('.grid_9').css('margin-right',winunit*1);	
		$('.grid_10').css('width',winunit*78);
		$('.grid_10').css('margin-left',winunit*1);
		$('.grid_10').css('margin-right',winunit*1);	
		$('.grid_11').css('width',winunit*86);
		$('.grid_11').css('margin-left',winunit*1);
		$('.grid_11').css('margin-right',winunit*1);	
		$('.grid_12').css('width',winunit*94);
		$('.grid_12').css('margin-left',winunit*1);
		$('.grid_12').css('margin-right',winunit*1);	
		
		$('.container_12').css('margin-left',winunit*2);
		$('.container_12').css('margin-right',winunit*2);
		$('.container_12').css('width',winunit*96);
		
		$('.container_12 .prefix_1').css('padding-left',winunit*8);
		$('.container_12 .prefix_2').css('padding-left',winunit*16);
		$('.container_12 .prefix_3').css('padding-left',winunit*24);
		$('.container_12 .prefix_4').css('padding-left',winunit*32);
		$('.container_12 .prefix_5').css('padding-left',winunit*40);
		$('.container_12 .prefix_6').css('padding-left',winunit*48);
		$('.container_12 .prefix_7').css('padding-left',winunit*56);
		$('.container_12 .prefix_8').css('padding-left',winunit*64);
		$('.container_12 .prefix_9').css('padding-left',winunit*72);
		$('.container_12 .prefix_10').css('padding-left',winunit*80);
		$('.container_12 .prefix_11').css('padding-left',winunit*88);
		$('.container_12 .prefix_12').css('padding-left',winunit*96);

		$('.container_12 .suffix_1').css('padding-right',winunit*8);
		$('.container_12 .suffix_2').css('padding-right',winunit*16);
		$('.container_12 .suffix_3').css('padding-right',winunit*24);
		$('.container_12 .suffix_4').css('padding-right',winunit*32);
		$('.container_12 .suffix_5').css('padding-right',winunit*40);
		$('.container_12 .suffix_6').css('padding-right',winunit*48);
		$('.container_12 .suffix_7').css('padding-right',winunit*56);
		$('.container_12 .suffix_8').css('padding-right',winunit*64);
		$('.container_12 .suffix_9').css('padding-right',winunit*72);
		$('.container_12 .suffix_10').css('padding-right',winunit*80);
		$('.container_12 .suffix_11').css('padding-right',winunit*88);
		$('.container_12 .suffix_12').css('padding-right',winunit*96);
	});
});
