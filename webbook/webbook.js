/// beginning of jQuery scripts
     
$(document).ready(function() {	

/*Title Page*/

$('#pagemain').show();

//// Begin Swipe Functions

var count = 0;   // count for pagination

$('body').swipe( {
        //Generic swipe handler for all directions
      swipeLeft:function(event, direction, distance, duration, fingerCount) {

		fingers: 'all';
	  
		 $('html,body').animate({scrollTop:0},0);  // moves to top of page with each swipe
    
          count++;  // increase count by one with each swipe
        
         $('#pagecount').text(count);  // to display count on top right corner of page (add comments on id in html to turn off)
	
		var current = $('.page.active');
		var next =  current.next('.page');

		current.removeClass('active').addClass('hidden');
		next.removeClass('hidden').addClass('active');
           
           
        if (count == 6)
        {
        	count= 0;
			$('#pagemain').show();
		
		}
		
		/*Don't Need?*/
		/*var current = $('.page.active');
		current.removeClass('active').addClass('hidden');
		$('#pg1').removeClass('hidden').addClass('active');
        }*/
  
		
	if (count== 1)
	
	{
	
		$('.title').show();
	
	/*page1*/
		
		$('.title').fadeIn('slow');
		$('.title').delay('1000');
		$('.title').fadeOut('1000');

		$('.gal').delay('1500');
		$('.gal').fadeIn('slow');

		$("#pg1").show(function() {
	 
			setInterval(function()
			{
				$('.gal :first-child').fadeOut(1500)
				.next().fadeIn(1500).end().appendTo('.gal');
				},2500);        
		});//end pg1show int

			$('.line1').delay('5000');
			$('.line1').fadeIn('slow');

			$('.line2').delay('9000');
			$('.line2').fadeIn('slow');

			$('.line3').delay('13000');
			$('.line3').fadeIn('slow');

			$('.line4').delay('17000');
			$('.line4').fadeIn('slow');
		
			$('.line5').delay('18000');
			$('.line5').fadeIn('slow');
		
			$('.line6').delay('21000');
			$('.line6').fadeIn('slow');
		
			$('.line7').delay('25000');
			$('.line7').fadeIn('slow');
			
			$('.leftbox').delay('26000');
			$('.leftbox').slideDown('normal');

			$('.par').delay('27000');
			$('.par').fadeIn('slow');
		
			$('.frc').delay('27000');		
			$('.frc').fadeIn('slow');
			
			$('.frc').approach({
				"fontSize": "40px"
				, "color": "#ff94dd"
			}, 200);
		
			$('.para').delay('27000');		
			$('.para').fadeIn('slow');		
		
			$('.para').approach({
				"fontSize": "40px"
				, "color": "#ff94dd"
			}, 200);

		
			$('.par2').delay('27000');
			$('.par2').fadeIn('slow');
		
			$('.parb').delay('27000');		
			$('.parb').fadeIn('slow');
		
			$('.parb').approach({
				"fontSize": "40px"
				, "color": "#ff94dd"
			}, 200);

			$('button').delay('27000');
			$('button').fadeIn('normal');
		
			$('.leftbox').fadeIn(function(){
				$('.line1').hide('fast');
				$('.line2').hide('fast');
				$('.line3').hide('fast');
				$('.line4').hide('fast');
				$('.line5').hide('fast');
				$('.line6').hide('fast');
			});
		
			$('.line8').delay('61000');
			$('.line8').fadeIn(function(){
				$('.line7').hide('fast');
				$('.leftbox').hide('slow');
				$('.par').hide('slow');
				$('.para').hide('slow');
				$('parb').hide('slow');
				$('.par2').hide('slow');
			});
			
			$("button").click(function(){
				
				$('.line7').hide('fast');
				$('.line8').hide('slow');
				$('#videoplayer').fadeIn('normal');
				$('#videoplayer').delay('65000');   
				$('.gal').hide();
				$('.imgcaption').fadeOut('4000');
				$('#videoplayer').hide('slow');
				$('.line1').fadeOut();
				$('.line2').fadeOut();
				$('.line3').fadeOut();
				$('.leftbox').fadeOut();
				$('.par').fadeOut();
				$('button').fadeOut();
			});
			
//not working			
			$('#videoplayer').click(function() {
				
				//when click video, set time to .45 seconds
				
				var myVid = $('#videoplayer');
				myVid.currentTime=45;
								
				/*other ways?*/
				//$('#videoplayer').get(45).play();
				//$('#videoplayer')[45].play(); 
				//this.currentTime = 45;
				//$('#videoplayer').setCurTime('.45');
					//[45]		//Also want to stop at 1.40
			});
			
			
	}//end pg1
	
	if (count== 2)
	
	{
	
	$('.pg2box').show();
	
	/*page2*/
	
		$('.pg2box').delay('1000');
		$('.pg2box').fadeIn('slow');
		$('.historytext').delay('2000');
		$('.historytext').fadeIn('slow');
		
		$('.gal2').delay('3000');
		$('.gal2').show('slow');
		
		$('.histext1').delay('2000');
		$('.histext1').fadeIn('slow');
		

		//loads page, gallery starts
		$("#pg2").show(function() {
	
			$('.gal2 img:gt(0)').hide(); // to hide all but the first image when page loads

			setInterval(function()
			{
				
				$('.gal2 :first-child').fadeOut(2000)
					.next().fadeIn(2000).end().appendTo('.gal2');
				},4000); 
	
		});//end pg1show int
		
		$('.histext2').delay('6000');
		$('.histext2').fadeIn('slow');
		
		$('.histext3').delay('9000');
		$('.histext3').fadeIn('slow');
		
		$('.histext4').delay('13000');
		$('.histext4').fadeIn('slow');
		
		$('.histext5').delay('18000');
		$('.histext5').fadeIn('slow');
		$('.histext5').approach({
				"fontSize": "22px"
				, "color": "#ff94dd"
			}, 200);
		
		$('.histext6').delay('22000');
		$('.histext6').fadeIn('slow');
		
		$('.histext7').delay('34000');
		$('.histext7').fadeIn('slow');
		$('.histext7').delay('6000');
		$('.histext7').fadeOut('slow');
		
		$('.histext8').delay('39000');
		$('.histext8').fadeIn('slow');
	
	}//end pg2	
     
	 
	 
	if (count== 3)
	 
	{
	
	/*page3*/

	$('#pg3').show(function() {
		$('.pg3line1').fadeIn('slow');
		$('.pg3line1').delay('2000');
		$('.pg3line1').fadeOut('slow');
	});	
		
		$('.pg3line2').delay('4000');
		$('.pg3line2').fadeIn('slow');
		
		$('.pg3line3').delay('9000');
		$('.pg3line3').slideDown('slow');
	
		$('.pg3line4').delay('13000');
		$('.pg3line4').slideDown('slow');
	
		$('.pg3line5').delay('17000');
		$('.pg3line5').slideDown('slow');
		
		$('.pg3line6').delay('22000');
		$('.pg3line6').fadeIn('slow');
	
		$('.pg3line7').delay('26000');
		$('.pg3line7').fadeIn('slow');
		
		$('.pg3line8').delay('30000');
		$('.pg3line8').fadeIn('slow');
		
		$('.pg3line9').delay('36000');
		$('.pg3line9').fadeIn('slow');
		
		$('.gal3').delay('23000');
		$('.gal3').fadeIn('slow');
		$('.gal3 img:gt(0)').hide(); // to hide all but the first image when page loads

			setInterval(function()
			{
				
				$('.gal3 :first-child').fadeOut(2000)
					.next().fadeIn(2000).end().appendTo('.gal3');
				},4000);

		$('.animation').delay('36000');
		$('.animation').fadeIn('fast');
		
	}//end pg3

	if (count== 4)
	 
	{
	
		/*page4*/

		$('.startpara').fadeIn(function() {
			$(".rotate").textrotator({
			animation: "flipUp", 
			separator: ","
			},3000)
			.css("color", "#dfc18e");
		});//end startpara function	
	
		$('.ph1').delay('3000');
		$('.ph1').fadeIn('slow');	
		$('.ph2').delay('7000');
		$('.ph2').fadeIn('slow');
		$('.ph3').delay('11000');
		$('.ph3').fadeIn('slow');
		$('.ph4').delay('15000');
		$('.ph4').fadeIn('slow');
		
		$('.d1').delay('5000');
		$('.d1').fadeIn('slow');	
		$('.d2').delay('9000');
		$('.d2').fadeIn('slow');
		$('.d3').delay('13000');
		$('.d3').fadeIn('slow');
		$('.d4').delay('17000');
		$('.d4').fadeIn('slow');
	}
	//end pg4

	
	if (count== 5)
	 
	{
	
	/*page5*/

	$('#pg5').show();
	
	$('.pg5ln1').fadeIn('slow');
	
	$('.pg5ln2').delay('2000');
	$('.pg5ln2').fadeIn('slow');
	
	$('.pg5ln3').delay('5000');
	$('.pg5ln3').fadeIn('slow');
	
	$('.pg5ln4').delay('8000');
	$('.pg5ln4').fadeIn('slow');
	
	$('.pg5ln5').delay('11000');
	$('.pg5ln5').fadeIn('slow');
	
	$('.pg5ln6').delay('14000');
	$('.pg5ln6').fadeIn('slow');
	
	$('.pg5ln7').delay('18000');
	$('.pg5ln7').fadeIn('slow');
	
	$('.pg5ln8').delay('19000');
	$('.pg5ln8').fadeIn('fast');
	
	} //end pg5
	
		
	   },  //end swipeLeft function - after this comma you can add other data values to the swipe
	   
	   //Start swipeRight
	   
	   swipeRight:function(event, direction, distance, duration, fingerCount) {
		
		fingers: 'all';
		
		$('html,body').animate({scrollTop:0},0);  // moves to top of page with each swipe
    
		count--;  // decrease count by one with each swipe
        
		$('#pagecount').text(count);  // to display count on top right corner of page
	
		if (count == -1)
			
		{
        	count= 5;
        
		var current = $('.page.active');
		var prev =  current.prev('.page');

		current.removeClass('active').addClass('hidden');
		prev.removeClass('hidden').addClass('active');
		
		}
	
		
	if (count== 1)
	
	{
	
		$('.title').show();
	
	/*page1*/
		
		$('.title').fadeIn('slow');
		$('.title').delay('1000');
		$('.title').fadeOut('1000');

		$('.gal').delay('1500');
		$('.gal').fadeIn('slow');

		$("#pg1").show(function() {
	 
			setInterval(function()
			{
				$('.gal :first-child').fadeOut(1500)
				.next().fadeIn(1500).end().appendTo('.gal');
				},2500);        
		});//end pg1show int

			$('.line1').delay('5000');
			$('.line1').fadeIn('slow');

			$('.line2').delay('9000');
			$('.line2').fadeIn('slow');

			$('.line3').delay('13000');
			$('.line3').fadeIn('slow');

			$('.line4').delay('17000');
			$('.line4').fadeIn('slow');
		
			$('.line5').delay('18000');
			$('.line5').fadeIn('slow');
		
			$('.line6').delay('21000');
			$('.line6').fadeIn('slow');
		
			$('.line7').delay('25000');
			$('.line7').fadeIn('slow');
			
			$('.leftbox').delay('26000');
			$('.leftbox').slideDown('normal');

			$('.par').delay('27000');
			$('.par').fadeIn('slow');
		
			$('.frc').delay('27000');		
			$('.frc').fadeIn('slow');
			
			$('.frc').approach({
				"fontSize": "40px"
				, "color": "#ff94dd"
			}, 200);
		
			$('.para').delay('27000');		
			$('.para').fadeIn('slow');		
		
			$('.para').approach({
				"fontSize": "40px"
				, "color": "#ff94dd"
			}, 200);

		
			$('.par2').delay('27000');
			$('.par2').fadeIn('slow');
		
			$('.parb').delay('27000');		
			$('.parb').fadeIn('slow');
		
			$('.parb').approach({
				"fontSize": "40px"
				, "color": "#ff94dd"
			}, 200);

			$('button').delay('27000');
			$('button').fadeIn('normal');
		
			$('.leftbox').fadeIn(function(){
				$('.line1').hide('fast');
				$('.line2').hide('fast');
				$('.line3').hide('fast');
				$('.line4').hide('fast');
				$('.line5').hide('fast');
				$('.line6').hide('fast');
			});
		
			$('.line8').delay('61000');
			$('.line8').fadeIn(function(){
				$('.line7').hide('fast');
				$('.leftbox').hide('slow');
				$('.par').hide('slow');
				$('.para').hide('slow');
				$('parb').hide('slow');
				$('.par2').hide('slow');
			});
			
			$("button").click(function(){
				
				$('.line7').hide('fast');
				$('.line8').hide('slow');
				$('#videoplayer').fadeIn('normal');
				$('#videoplayer').delay('65000');   
				$('.gal').hide();
				$('.imgcaption').fadeOut('4000');
				$('#videoplayer').hide('slow');
				$('.line1').fadeOut();
				$('.line2').fadeOut();
				$('.line3').fadeOut();
				$('.leftbox').fadeOut();
				$('.par').fadeOut();
				$('button').fadeOut();
			});
			
//not working			
			$('#videoplayer').click(function() {
				
				//when click video, set time to .45 seconds
				
				var myVid = $('#videoplayer');
				myVid.currentTime=45;
								
				/*other ways?*/
				//$('#videoplayer').get(45).play();
				//$('#videoplayer')[45].play(); 
				//this.currentTime = 45;
				//$('#videoplayer').setCurTime('.45');
					//[45]		//Also want to stop at 1.40
			});
			
			
	}//end pg1
	
	if (count== 2)
	
	{
	
	$('.pg2box').show();
	
	/*page2*/
	
		$('.pg2box').delay('1000');
		$('.pg2box').fadeIn('slow');
		$('.historytext').delay('2000');
		$('.historytext').fadeIn('slow');
		
		$('.gal2').delay('3000');
		$('.gal2').show('slow');
		
		$('.histext1').delay('2000');
		$('.histext1').fadeIn('slow');
		

		//loads page, gallery starts
		$("#pg2").show(function() {
	
			$('.gal2 img:gt(0)').hide(); // to hide all but the first image when page loads

			setInterval(function()
			{
				
				$('.gal2 :first-child').fadeOut(2000)
					.next().fadeIn(2000).end().appendTo('.gal2');
				},4000); 
	
		});//end pg1show int
		
		$('.histext2').delay('6000');
		$('.histext2').fadeIn('slow');
		
		$('.histext3').delay('9000');
		$('.histext3').fadeIn('slow');
		
		$('.histext4').delay('13000');
		$('.histext4').fadeIn('slow');
		
		$('.histext5').delay('18000');
		$('.histext5').fadeIn('slow');
		$('.histext5').approach({
				"fontSize": "22px"
				, "color": "#ff94dd"
			}, 200);
		
		$('.histext6').delay('22000');
		$('.histext6').fadeIn('slow');
		
		$('.histext7').delay('34000');
		$('.histext7').fadeIn('slow');
		$('.histext7').delay('6000');
		$('.histext7').fadeOut('slow');
		
		$('.histext8').delay('39000');
		$('.histext8').fadeIn('slow');
	
	}//end pg2	
     
	 
	 
	if (count== 3)
	 
	{
	
	/*page3*/

	$('#pg3').show(function() {
		$('.pg3line1').fadeIn('slow');
		$('.pg3line1').delay('2000');
		$('.pg3line1').fadeOut('slow');
	});	
		
		$('.pg3line2').delay('4000');
		$('.pg3line2').fadeIn('slow');
		
		$('.pg3line3').delay('9000');
		$('.pg3line3').slideDown('slow');
	
		$('.pg3line4').delay('13000');
		$('.pg3line4').slideDown('slow');
	
		$('.pg3line5').delay('17000');
		$('.pg3line5').slideDown('slow');
		
		$('.pg3line6').delay('22000');
		$('.pg3line6').fadeIn('slow');
	
		$('.pg3line7').delay('26000');
		$('.pg3line7').fadeIn('slow');
		
		$('.pg3line8').delay('30000');
		$('.pg3line8').fadeIn('slow');
		
		$('.pg3line9').delay('36000');
		$('.pg3line9').fadeIn('slow');
		
		$('.gal3').delay('23000');
		$('.gal3').fadeIn('slow');
		$('.gal3 img:gt(0)').hide(); // to hide all but the first image when page loads

			setInterval(function()
			{
				
				$('.gal3 :first-child').fadeOut(2000)
					.next().fadeIn(2000).end().appendTo('.gal3');
				},4000);

		$('.animation').delay('36000');
		$('.animation').fadeIn('fast');
		
	}//end pg3

	if (count== 4)
	 
	{
	
		/*page4*/

		$('.startpara').fadeIn(function() {
			$(".rotate").textrotator({
			animation: "flipUp", 
			separator: ","
			},3000)
			.css("color", "#dfc18e");
		});//end startpara function	
	
		$('.ph1').delay('3000');
		$('.ph1').fadeIn('slow');	
		$('.ph2').delay('7000');
		$('.ph2').fadeIn('slow');
		$('.ph3').delay('11000');
		$('.ph3').fadeIn('slow');
		$('.ph4').delay('15000');
		$('.ph4').fadeIn('slow');
		
		$('.d1').delay('5000');
		$('.d1').fadeIn('slow');	
		$('.d2').delay('9000');
		$('.d2').fadeIn('slow');
		$('.d3').delay('13000');
		$('.d3').fadeIn('slow');
		$('.d4').delay('17000');
		$('.d4').fadeIn('slow');
	}
	//end pg4

	
	if (count== 5)
	 
	{
	
	/*page5*/

	$('#pg5').show();
	
	$('.pg5ln1').fadeIn('slow');
	
	$('.pg5ln2').delay('2000');
	$('.pg5ln2').fadeIn('slow');
	
	$('.pg5ln3').delay('5000');
	$('.pg5ln3').fadeIn('slow');
	
	$('.pg5ln4').delay('8000');
	$('.pg5ln4').fadeIn('slow');
	
	$('.pg5ln5').delay('11000');
	$('.pg5ln5').fadeIn('slow');
	
	$('.pg5ln6').delay('14000');
	$('.pg5ln6').fadeIn('slow');
	
	$('.pg5ln7').delay('18000');
	$('.pg5ln7').fadeIn('slow');
	
	$('.pg5ln8').delay('19000');
	$('.pg5ln8').fadeIn('fast');
	
	} //end pg5
		
		
		
	 }//end swipeRight Event	
		
   
});  // end all swipe events

			






			
	
	
}); //end doc ready  DO NOT TOUCH THIS!