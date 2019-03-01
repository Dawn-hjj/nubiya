<?php
require "conn.php";//引入数据库连接的文件
	//1.获取前端传来的做唯一匹配的值
	//判断是否传过来了
	//isset($_POST['submit']):为了提交表单数据到数据同时做检测.
	if(isset($_POST['mobile'])){
       	$mobil=$_POST['mobile'];
		$query="select * from myform where mobile='$mobil'";
		$result=mysql_query($query);
		if(mysql_fetch_array($result)){//如果有值代表用户名存在。
			echo 'false';//有重复
		}else{
			echo 'true';//没有重复
		}
}
if(isset($_POST['submit']) && $_POST['submit']=="注册"){
		$user=$_POST['mobile'];//username：表单的名称
		$pass=md5($_POST['pass']);
//		$email=$_POST['email'];
		//添加语句
		$query="insert myform(password) values('$pass')";
		mysql_query($query);
		header('location:http://10.31.162.63/js1810/nubiya/src/login.html');//页面的跳转
	}
?>
