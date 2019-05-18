<!-- tab导航栏 -->
<template>
	<div class="tab">
		<ul class='tab_title'><li v-for='(i,index) in data' :key='index' :class="[current == index ? 'active':'']" @click="clc(index)">{{i.value}}</li></ul>
	</div>
</template>

<script>
	export default{
		props:['data'],
		data(){
			return{
				current:0
			}
		},
		methods:{
			clc(res){
				this.current = res
			}
		}
	}
</script>

<style scoped lang='scss'>
	.tab{
		/* font-size:0.16rem; */
		@-webkit-keyframes spin {
		
			0%   {
				color:#fff;
				border-bottom: 0px solid #fff ;
				transform: translate(-0.1rem)
			}
			50%{
				transform: translate(0.1rem)
			}
			100% {
				color:blue;
				border-bottom: 2px solid blue;
			}

		}
		.tab_title{
			height:0.3rem;
			color:#C71585;
			margin:0;
			padding:0;
			list-style: none;
			display: flex;
			align-items: center;
			justify-content: space-around;
			background:#f3f3f3;
			li{
				display:flex;
				align-items: center;
				height:100%;
				&.active{
					color:blue;
					animation: spin 0.3s;
					border-bottom: 2px solid blue;
					transition: all 0.3s;
				}
			}
		}
	}
</style>
