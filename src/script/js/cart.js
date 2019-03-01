;
(function() {
	//alert(1)
	//1.封装函数实现商品列表的创建
	function goodslist(sid, num) { //sid：商品的编号，num:商品的数量
		$.ajax({
			url: "http://10.31.162.63/js1810/nubiya/php/store.php",
			dataType: 'json'
		}).done(function(data) {
			$.each(data, function(index, value) {
				if(sid == value.sid) { //比较当前传入的sid和数据里面的sid比较，相同获取当前的整条数据
					var clonegoodslist = $('.item-list:hidden').clone(true, true); //深度克隆被隐藏的商品列表。
					clonegoodslist.find('.goods-pic img').attr('src', value.url);
					clonegoodslist.find('.loadtitle').html(value.title);
					clonegoodslist.find('.loadpcp').html(value.price);
					clonegoodslist.find('.btn-cnts input').val(num);
					clonegoodslist.find('.b-sum').html((num * value.price).toFixed(2));
					clonegoodslist.css('display', 'block');
					$('tbody').append(clonegoodslist); //追加
					totalprice();
				}
			})
		});
	}

	//2.通过cookie渲染商品列表
	if(getcookie('cooksid') && getcookie('cookienum')) {
		var sid = getcookie('cooksid').split(','); //[2,1,3,4]
		var num = getcookie('cookienum').split(','); //[2,1,3,4]

		$.each(sid, function(index, value) {
			goodslist(sid[index], num[index]);
		});

	}
	//3.如果商品列表存在，隐藏--“购物车空空”
	empty();

	function empty() {
		if(getcookie('cooksid')) {
			$('.empty-cart').hide();
		} else {
			$('.empty-cart').show();
		}
	}

	//4.计算总的数量和总价
	function totalprice() {
		var allprice = 0;
		var allcount = 0;
		$('.goods-item:visible').each(function() {
//			if($(this).find('input:checkbox').prop('checked')) {
				allprice += parseFloat($(this).find('.b-sum').html());
				allcount += parseInt($(this).find('.b-sum ').val());
//			}
		});
		$('.b-sum').html('￥' + allprice);
//		$('.amount-sum em').html(allcount);
	}
//6.改变商品的数量
    		$('.quantity-add').on('click',function(){
    			
    			var addvalue=$(this).parents('.item-list').find('.btn-cnts input').val();
    			addvalue++;
    			$(this).parents('.item-list').find('.btn-cnts input').val(addvalue);
//    			alert(addvalue)
    			if(addvalue>99){
    				addvalue=99;
    			}
    			$(this).parents('.item-list').find('.btn-cnts input').val(addvalue);
    		});
    		
			
			$('.quantity-down').on('click',function(){
    			var addvalue=$(this).parents('.item-list').find('.btn-cnts input').val();
    			addvalue--;
    			if(addvalue<=0){
    				addvalue=1;
    			}
    			$(this).parents('.item-list').find('.btn-cnts input').val(addvalue);
    		});
			
			
			$('.btn-cnts input').on('input',function(){
				var reg=/^\d+$/g;
				if(reg.test($(this).val())){
					var $value=$(this).val();
					if($value>99){
						$(this).val(99);
					}else if($value <= 0){
						$(this).val(1);
					}else{
						$(this).val($value);
					}
				}else{
					$(this).val(1);
				}
			});

})()