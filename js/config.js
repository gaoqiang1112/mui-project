var cApi = {
	baseUrl:'http://121.41.83.191:10010/api'
}
var iApi = {
	loginOn: '/login/login', // 登录
}

var uApi = {
	qs:function(str){
		return document.querySelector(str)
	},
	qsa:function(str){
		return document.querySelectorAll(str)
	}
}
