//注册的表单验证
;
(function() {
//$("#form1").on("submit", function() {
//	var mobile = $("#mobile").val();
//	var word = $("#password").val();
//	$.ajax({
//		type: "post",
//		data: {
//			phone: mobile,
//			pass: word
//		},
//		url: 'http://10.31.162.63/js1810/nubiya/php/registor.php',
//	})
//});

$('#loginForm').validate({
	rules: {
		mobile: {
			required: true,
			minlength: 11,
			maxlength: 11,
			remote: {
				type: 'post',
				url: 'http://10.31.162.63/js1810/nubiya/php/registor.php',
			},

		},
		password: {
			required: true,
			minlength: 6,
			maxlength: 16
		},
		yzm: {
			minlength: 4
		}
	},
	messages: {
		mobile: {
			required: '手机号码不能为空',
			minlength: '请输入11位的手机号',
			maxlength: '请输入正确的手机号请输入',
			remote: '<em class="err">请输入正确的手机号</em>'
		},
		password: {
			required: '密码不能为空',
			minlength: '密码不能小于6位',
			maxlength: '密码不能大于16位'
		},
		yzm: {
			required: '验证码不能为空',
			minlength: '验证码不能少于四位'
		}
	}
})
})();