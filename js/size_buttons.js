		$(document).ready(function() {
		   	$("#ax-l").hide($("blind").val(),{},1000);
		    $("#ax-xl").hide($("blind").val(),{},1000);
		    $("#ax-xxl").hide($("blind").val(),{},1000);

		   $("#ax-m-but").click(function(){
		      $("#ax-l").hide($("blind").val(),{},1000);
		      $("#ax-xl").hide($("blind").val(),{},1000);
		      $("#ax-xxl").hide($("blind").val(),{},1000);
		      $("#ax-m").hide($("blind").val(),{},1000);
		      $("#ax-m").show($("blind").val(),{},1000);
		   });
		   $("#ax-l-but").click(function(){
		      $("#ax-l").hide($("blind").val(),{},1000);
		      $("#ax-xl").hide($("blind").val(),{},1000);
		      $("#ax-xxl").hide($("blind").val(),{},1000);
		      $("#ax-m").hide($("blind").val(),{},1000);
		      $("#ax-l").show($("blind").val(),{},1000);
		   });
		   $("#ax-xl-but").click(function(){
		      $("#ax-l").hide($("blind").val(),{},1000);
		      $("#ax-xl").hide($("blind").val(),{},1000);
		      $("#ax-xxl").hide($("blind").val(),{},1000);
		      $("#ax-m").hide($("blind").val(),{},1000);
		      $("#ax-xl").show($("blind").val(),{},1000);
		   });
		   $("#ax-xxl-but").click(function(){
		      $("#ax-l").hide($("blind").val(),{},1000);
		      $("#ax-xl").hide($("blind").val(),{},1000);
		      $("#ax-xxl").hide($("blind").val(),{},1000);
		      $("#ax-m").hide($("blind").val(),{},1000);
		      $("#ax-xxl").show($("blind").val(),{},1000);
		   });
		});