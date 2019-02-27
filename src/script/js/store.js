! function() {
	//1.拼接数据
	$.ajax({
		url: 'http://10.31.162.63/js1810/nubiya/php/store.php',
		dataType: 'json'
	}).done(function(data) {
		//		console.log(data.url)
		var $html = '';
		$.each(data, function(index, value) {
				//console.log(value)
			$html += `
					<li style="margin-bottom:10px">
								<div class="hot-small">
									<span>六期</br>免息</span>
								</div>
								<a>
									<img data-original="${value.url}" class="lazy" style="width:290px,height:248px"/>
									
								</a>
								<div class="figure-info">
									<h5>${value.title}</h5>
									<span style="color:#FF4D4D">骁龙845</span>
								</div>
								<p>${value.price}</p>
								<div class="nbc-pro-btn">
									<a href="/js1810/nubiya/src/details.html? sid=${value.sid}" class="btn-info">查看详情</a>
									<a class="btn-sell">立即购买</a>
								</div>
							</li>
			`;
		});
		$('.hotblock ul').prepend($html);
		$('img.lazy').lazyload({
			effect:'fadeIn'
		})
	});
}();

//切换改变css样式效果
;(function(){
	var $nb_left=$('.nb-ml-newrelease-left ul li');
	$.each($nb_left,function(index,value){
		$(value).hover(function(){
			$(this).css({"background":"#f35c49",'color':'#fff'});
//			$nb_left.eq(0).css({'background':'#f35c49'});
	//		$nb_left.eq(0).css({'background':'','color':''})
		},function(){
			
			$(value).css({'background':'','color':''})
		})
	})
	
})()
//楼梯效果
;(function(){
	//1.通过滚动条的距离控制楼梯导航的显示与隐藏
     var $top=$(window).scrollTop();
     var $loutinav=$('#loutinav');
//   if($top>=200){
//   	$loutinav.show();
//   }else{
//   	$loutinav.hide();
//   }
//2.点击楼梯导航，让对应的楼层进行位置的跳转。
    	$('#loutinav li').not('.last').on('click',function(){
    		$(this).addClass('active').siblings('li').removeClass('active');
    		var $top=$('.louceng').eq($(this).index()).offset().top;
    		$('html,body').animate({
	    		scrollTop:$top
	    	});
    	});
    	$('.last').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		});
	});

})()
//懒加载
//监听窗口滚动事件，检查元素是否在可视范围内;
//;(function(){
// $('img').addClass('lazy');
// $('img').attr('data-original',function(){
// 	retun $(this).attr('src');
// });
// $('img.lazy').lazyload({
// 	effect:'fadeIn';
// })
//})()
