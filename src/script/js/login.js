//////登陆表单验证
;(function(){
			$('.btn-login').on('click',function(){
				$.ajax({
					type:'post',
					url:'http://10.31.162.63/js1810/nubiya/php/login.php',
					data:{
						sid:$('#mobile').val()
					},
					dataType:'json',
					success:function(data){
						if(data.mobile==$('#mobile').val()&&data.pass==$('#password').val()){
						//	alert('登录成功')
						window.location.href="index.html";
						window.localStorage.setItem('mobile',data.mobile)
						}else{
							alert('登录不成功')
						}
					}
				})
			})
	
})()