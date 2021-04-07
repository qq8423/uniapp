const BASE_URL = "https://api-hmugo-web.itheima.net/api/public/v1"
export const myRequest = (Option)=>{
	return new Promise ((resolve,reject)=>{
		uni.request({
			url:BASE_URL+ Option.url,
			method:Option.method || "GET",
			data:Option.data || {},
			success:(res)=>{
				
				if(res.data.meta.status !==200){
					return uni.showToast({
						title:"获取失败!"
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:"获取失败!!"
				})
				reject(err)
			}
		})
		
	})
	
	
}