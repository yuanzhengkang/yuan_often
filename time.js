function times(timer,branch,spanTime){		//time为数据中的时间  格式跟new date()出来的一样	branch为设定的过期的分数	spanTime是停止计时器消失
		let date = new Date().getTime();	//当前time戳
		let time = new Date(timer).getTime() + branch * 60 * 1000;	//数据中的时间戳 + 设定的过期时间
		let miao = (time - date) / 1000;
		let retutime = (miao % 60).toString().slice(0, 2); //秒数	展示的秒数  在vue页面中data的实时展示数据
		let retuzhanshiTime = (miao / 60).toString().slice(0, 2); //分数	展示的分数  在vue页面中data的实时展示数据
		
		if (time - date > branch * 60 * 1000) {
			time -= time + 24 * 60 * 60 * 1000 //为了防止23.00 - 00.00的BUG
		}
		
		//下面就是些补0操作
		if (retuzhanshiTime <= 0) {
			retuzhanshiTime = '00'
		}
		if (retutime <= 0) {
			retutime = '00'
		}
		if (retutime.toString().split('.')[0]) {
			retutime = '0' + retutime.toString().split('.')[0]
		}
		if (retuzhanshiTime.toString().split('.')[0]) {
			retuzhanshiTime = '0' + retuzhanshiTime.toString().split('.')[0]
		}
		if (retutime.length >= 3) {
			retutime = retutime.toString().slice(1, 3)
		}
		if (retuzhanshiTime.length >= 3) {
			retuzhanshiTime = retuzhanshiTime.toString().slice(1, 3)
		}
		if (retuzhanshiTime == '00' && retutime == '00') {
			spanTime = false
			clearInterval(setTime)
		} else {
			spanTime = true
		}
		let obj = [retutime,retuzhanshiTime,spanTime];
		return obj
}
export default{
	times
}
