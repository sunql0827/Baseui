<template>
  <div class="page">
	  <div class="nav-title sp-18 text-white">公有组件</div>
		<div class="contents">
				<div class="grids">
						<div class="grids-item"><router-link to="FontSize">字体大小</router-link></div>
						<div class="grids-item"><router-link to="FontColor">字体颜色</router-link></div>
						<div class="grids-item"><router-link to="BgColor">背景颜色</router-link></div>
						<div class="grids-item">圆角幅度</div>
						<div class="grids-item">阴影背景</div>
						<div class="grids-item">内外间距</div>
						<div class="grids-item">Icon</div>
				</div>
		</div>
    <menubar></menubar>
  </div>
</template>

<script>
	import menubar from './element/Menubar.vue'
export default {
  name: 'page',
	components:{
		menubar
	},
  props: {
    msg: String
  },created() {
  	
  },methods:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents{
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	text-align: center;
	
}
.grids{
	width: 100%;
	display: inline-block;
	position: relative;
	text-align: center;
	padding: 2px;
}
.grids-item{
	border:solid 1px #EDEDED;
	width: 32%;
	float: left;
	height: 50px;
	line-height: 50px;
	text-align: center;
	margin: 0.1%;
}
</style>
