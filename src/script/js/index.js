! function() {
	//1.拼接数据
	$.ajax({
		url: 'http://10.31.162.63/js1810/nubiya/php/taobaodata.php',
		dataType: 'json'
	}).done(function(data) {
		//		console.log(data.url)
		var $html = '';
		$.each(data, function(index, value) {
			//	console.log(value.url)
			$html += `
					<li>
						<a href="/js1810/nubiya/src/details.html?sid=${value.sid}">
							<img src="${value.url}">
							<p>${value.titile}</p>
						</a>
					</li>
			`;
		});
		$('.index-nav ul').prepend($html);
	});
}();

;(function() {
	var $imglist=$('.index-nav img');
	
	//导航的显示与隐藏
	$('.list-inline-li').on('mouseover', function() {
		$('.index-nav').show().stop(true,true).animate({height:241},1000)
	});
	$('.index-nav').on('mouseleave', function() {
		$('.index-nav').hide().animate({height:0},1000);
	});

	//按下箭头键，滚动条跳到顶部
	$('.jiantou').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		});
	});
})();
//首页的轮播图效果
;(function(){

	    var $num = 0;
        var $picnum = 3;
        var bstop = true;
        var $first = $('.piclist li:first').clone(true);
        var $last = $('.piclist li:last').clone(true);
        $('.piclist').append($first);
        $('.piclist').prepend($last);
       //console.log($('.main ul li').length)
   		var $offset=parseInt(document.body.clientWidth)
        $('.main').width($offset);
        $('.main ul li').width($offset);
        $('.main ul li img').width($offset);
        
        $('.piclist').width($('.piclist li').length * $('.piclist li').eq(0).width()).css('left', -$offset+'px');
        $('.carousel-indicators li').click(function() {
            if (bstop) {
                $num = $(this).index();
                tab();
            }
            bstop = false;
        });
		    
        $('#right').click(function() {
//      	alert(document.documentElement.clientWidth);
            if (bstop) {
                $num--;
                document.title = $num;
                if ($num == $picnum) {
                    $('.carousel-indicators li:first').addClass('active').siblings('.carousel-indicators li').removeClass('active');
                }
                tab();
            }
            bstop = false;
		});
		$('#left').click(function(){
			if(bstop){
				$num++;
				tab();
			}
			bstop=false;
		});
	function tab() {
            $('.carousel-indicators li').eq($num).addClass('active').siblings('.carousel-indicators li').removeClass('active');
            $('.piclist').animate({
                left: -$offset* ($num + 1) + 'px'
            }, 200, function() {
                if (parseInt($('.piclist').css('left')) == -$offset * ($picnum + 1)) {
                    $('.piclist').css('left', -$offset+'px');
                    $num = 0;
                }
                if (parseInt($('.piclist').css('left')) == 0) {
                    $('.piclist').css('left', -$offset * $picnum + 'px');
                    $num = 2;
                }
                bstop=true;
            })
        }
	//轮播图的自动播放
//	var timer=setInterval(function(){
//		$('#left').click()
//	},3000)
//	$('.main').hover(function(){
//		$('#left,#right').show();
//		clearInterval(timer);
//	},function(){
//		$('#left,#right').hide();
//	   timer=setInterval(function(){
//		$('#left').click()
//	},3000)
//	})
})();
//固定定位部分的效果

//	;(function(){
//	var $box=$('.main');
//	var $btns=$('.main ol li');
//	var $pics=$('.main ul li');
//	var $left=$('#left');
//	var $right=$('#right');
//	var $timer=null;
//	var $autoplaytimer=null;
//	var $num=0;
//	$box.hover(function(){
//		$('#left,#right').show();
//		clearInterval($autoplaytimer);
//	},function(){
//		$('#left,#right').hide();
//		$autoplaytimer=setInterval(function(){
//			$right.click();
//		},5000);
//	});
//	$btns.hover(function(){
//		$num=$(this).index();//当前的索引
//		$timer=setTimeout(function(){
//			change();
//		},400)
//		
//	},function(){
//		clearTimeout($timer);
//	});
//	$right.on('click',function(){
//		$num++;
//		if($num>$btns.length-1){
//			$num=0;
//		}
//		change();
//	});
//	$left.on('click',function(){
//		$num--;
//		if($num<0){
//			$num=$btns.length-1;
//		}
//		change();
//	});
//	function change(){
//		$btns.eq($num).addClass('active').siblings('li').removeClass('active');
//		$pics.eq($num).animate({
//			opacity:1
//		}).siblings('li').animate({
//			opacity:0
//		});
//	}
//	$autoplaytimer=setInterval(function(){
//		$right.click();
//	},5000);
// })();
