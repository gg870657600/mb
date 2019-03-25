$(document).ready(function(){
	$(".tools").click(function(){
		$(".hidden-div").show()
	})
})

$(document).ready(function(){
	$("#close").click(function(){
		$(".hidden-div").hide()
	})
})
// 图片预览
function submit_img(){
	var file=document.getElementById("file").files[0];
	var fReader=new FileReader();
	fReader.readAsDataURL(file);
	fReader.onload=function(e){
		var img=document.getElementById("img")
		img.innerHTML='<img src="' + this.result +'" alt="" />';
	}
}

// 抽屉
$(document).ready(function(){
	var l = 0;
	$("#zuo").click(function(){
		l +=180;
		$(this).css("transform",'rotate('+l+'deg)');
		var zuo_left=$("#zuo").css("left");
		if(zuo_left=="284px"){
			$(".work2").css({
				"width":"1000px",
				"left":0
				})
			$("#zuo").css("left",0);
			return;
			}
		else{
			$(".work2").css({
				"width":"700px",
				"left":"300px"
				})
			$("#zuo").css("left","284px");
			return;
		}
	})
})

$(document).ready(function(){
	var r = 0;
	$("#you").click(function(){
		r +=180;
		$(this).css("transform",'rotate('+r+'deg)');
		var you_right=$("#you").css("right");
		if(you_right=="350px"){
			$(".work2").css({
				"width":"1066px",
				"right":0,
				"z-index":10,
				})
			$("#you").css("right",0);
			return;
			}
		else{
			$(".work2").css({
				"width":"700px",
				"right":"345px"
				})
			$("#you").css({
				"right":"350px",
				"margin-left":"1360px",
			});
			return;
		}
	})
})

/*$(document).ready(function(){
	var r=0;
	var zuo_left=$("#zuo").css("left");
	var you_right=$("#you").css("right");
	if(zuo_left==0 | you_left==0){
		
	}
})*/