var express = require('express');
var router=express.Router();
var arr=[];


router.post('/login',function(req,res){	
	var uname=req.body['username'];
	var pwd=req.body['password'];
	for(var i = 0;i<arr.length;i++){
		if(uname == arr[i].yh){
			if(pwd == arr[i].mm){
				res.send({flag:1});
			}else{
				res.send({flag:3});
			}
		}else if(uname!=arr[i].yh){
			if(i == (arr.length - 1)){
				res.send({flag:2});
			}
		}
	};



	console.log(uname+","+pwd);
})

router.post('/regist',function(req,res){//请求 相应
var uname=req.body["username"];
var pas=req.body["password"];
var sex=req.body["sex"];
var tel=req.body["tel"];
var hobby=req.body["hobby"];
var jn=req.body["jineng"];

console.log(uname+","+pas+","+sex+","+tel+","+hobby+","+jn)

for(i in arr){ 
		if(arr[i].yh == uname)
		{
			res.send({flag:2});
		}
	}
	
	if(uname&&pas&&sex&&tel&&hobby&&jn){
		arr.push({
			yh:uname,
			mm:pas,
			xing:sex,
			shou:tel,
			hao:hobby,
			j:jn
		});
		res.send({flag:1});
	}else{
		res.send({flag:3});
	}


})


module.exports=router;//输出