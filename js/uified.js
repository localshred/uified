/*
Theme Name: Uified
Theme URI: http://github.com/localshred/uified
Description: Provides a simple html/css/javascript interface for creating unobtrusive UI elements
Author: BJ Neilsen, rand9 LLC
Author URI: http://www.rand9.com
Version: 1.0
.
I've compiled this work for the open source community. Please link me if you find this interface useful.
.
*/

$(document).ready(function($){
	
	// Tab Link UI listener
	$("ul.tab-links a").click(function(e){
		match = this.id.match(/^link-([-a-z]+)$/);
		if (match != null)
		{
			$(this).addClass("cur");
			$(this).parent().siblings().find("a.cur").removeClass("cur");
			$(this).parent().parent().siblings(".tab-box").hide();
			$("#"+match[1]).show();
		}
	});
	
	// Link Toggle UI listener
	$("a.toggle-link").click(function(e){
		match = this.id.match(/^link-toggle-([-a-z]+)$/);
		if (match != null)
		{
			$("#"+match[1]).toggle('blind');
		}
	});
	
	// Data View UI listener
	$("a.display-link").click(function(e){
		match = this.id.match(/^link-display-([a-z]+)-([-a-z]+)$/);
		if (match != null)
		{
			$("#"+match[2]).removeClass("grid-items");
			$("#"+match[2]).removeClass("list-items");
			$("#"+match[2]).addClass(match[1]+"-items");
		}
	});
	
});
