$(document).ready(function(){var t=$("#colors a"),e=$(".settings_box"),a=e.outerWidth();e.css({left:-a}),$("#panel_toggler").on("touchend click",function(t){t.preventDefault(),parseInt(e.css("left"))<0?e.animate({left:"0"},500):e.animate({left:-a},500)}),t.on("touchend click",function(t){t.preventDefault();var r=$(this);localStorage.setItem("SG_ValueHref",r.attr("data-href")),localStorage.setItem("SG_ColorButtonId",r.attr("id")),$("link.colors_style").attr("href",r.attr("data-href")),e.animate({left:-a},500),r.addClass("current").siblings().removeClass("current")});var r=localStorage.getItem("SG_ValueHref");null!==r&&($("link.colors_style").attr("href",localStorage.getItem("SG_ValueHref")),t.removeClass("current"),$("#"+localStorage.getItem("SG_ColorButtonId")).addClass("current"))});