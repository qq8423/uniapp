<template>
	<view >
		首页{{swiper}}
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[],
			}
		},
		onLoad() {
		this.getswiper()
		},
		methods: {
		async getswiper(){
		const res = await this.$myRequest({
				url:"/home/swiperdata",
				
			})
		console.log(res)
		this.swiper=res.data.message
		
		
		}
		}
	}
</script>

<style>
	
</style>
